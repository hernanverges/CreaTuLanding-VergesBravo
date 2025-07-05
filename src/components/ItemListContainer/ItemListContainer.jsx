/* eslint-disable no-unused-vars */
import './ItemListContainer.css';
import Item from '../Item/Item.jsx';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { db } from '../../firebaseConfig.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { HiShoppingCart } from "react-icons/hi2";


function ItemListContainer({ greetings }){

  const [allProducts, setAllProducts]=useState([]);
  const [products, setProducts]=useState([]);
  const [loading, setLoading]=useState(false);

  const productsCollection = getDocs(collection(db,'products'));

  const {category} = useParams();


  //filtros//
  const filterProducts = (products, category) => {
    if (category){
      setProducts(products.filter(el => el.category === category));
    } else {
      setProducts(products);
    }
  }
  //fin filtros//


  useEffect( () => {
  if (allProducts.length === 0){

    setLoading(true);
    productsCollection.then(snapshot => {
      const productsArray = snapshot.docs.map(el => el.data());
      setAllProducts(productsArray);
      filterProducts(productsArray, category);
      setLoading(false);
    })
    .catch(err => console.error(err));
} else{
filterProducts(allProducts, category);
}

  }, [category])
  
  return(
    <div className='itemlist-container'>
    <h2> {greetings} </h2>
    <div className='items-container'>
    {
      loading ? <span className="loader"></span>
      :
    products.length > 0 ?
    products.map(elem => <Item
      key={ elem.id }
      {... elem}
 />
)

      :
      <p>No se encontraron productos.</p>
    }
    </div>
    <Link to={`/confirmpurchase`}>
    <button className='finish-button'>Finalizar compra</button>
    </Link>
    <Link to={`/cart`}>
    <button className='finish-button'>Ir al carrito <HiShoppingCart /></button>
    </Link>
    </div>
  )
}

export default ItemListContainer;