import './ItemDetail.css';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import getProducts from '../../../services/mockService';

function ItemDetail (){

    const {id}=useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProducts()
        .then(result => {
            const product = result.find(el => el.id === id);
            setLoading(false);
            setProduct(product);
        }).catch(err => {alert (err)} )
    })
    return (
        loading ? <div className='detail-container'><span className="loader"></span></div>
        :
        <div className='detail-container'>
        <div className='card-container'>
            <div className='cardImage-container'>
                <img src={product.img} className='card-image' alt='Imagen de producto' />
            </div>

            <div className='card-content'>
                <h3> {product.title} </h3>
                <p> {product.description} </p>
                <p> {product.text} </p>
                <p> {product.price} </p>
                <button className='card-button'>Agregar al carrito</button>
            </div>
        </div>
        </div>
    )


}


export default ItemDetail;