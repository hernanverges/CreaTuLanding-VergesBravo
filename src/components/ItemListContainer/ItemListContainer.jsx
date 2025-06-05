import './ItemListContainer.css';
import Item from '../Item/Item.jsx';
import getProducts from '../../../services/mockService.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function ItemListContainer({ greetings }){

  const [allProducts, setAllProducts]=useState([]);
  const [products, setProducts]=useState([]);
  const [loading, setLoading]=useState(false);

  const {category} = useParams();

  const filterProducts = (products, category) => {
    if (category){
      setProducts(products.filter(el => el.category === category));
    } else {
      setProducts(products);
    }
  }


  useEffect( () => {
  if (allProducts.length === 0){
    setLoading(true);
  getProducts().then( (result) => {
    setAllProducts(result);
    filterProducts(result, category);
    setLoading(false);
  }).catch((err) => {alert(err)});
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
      {... elem} />)
      :
      <p>No se encontraron productos.</p>
    }
    </div>
    </div>
  )
}

export default ItemListContainer;