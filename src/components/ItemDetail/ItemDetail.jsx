import './ItemDetail.css';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import getProducts from '../../../services/mockService';
import { useAppContext } from '../../context/context';
import Counter from '../Counter/Counter.jsx';

function ItemDetail (){

    const {id}=useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const { addToCart } = useAppContext();

    const navigate = useNavigate();

    useEffect(() => {

        getProducts()
        .then(result => {
            const product = result.find(el => el.id === id);
            setLoading(false);
            setProduct(product);
        }).catch(err => {alert (err)} )
    });

    const [quantity, setQuantity] = useState(1);

    function addQuantity(){
        if (quantity < 10){
            setQuantity(quantity+1);
        }
    }

    function subtractQuantity(){
        if (quantity > 1){
            setQuantity(quantity-1);
        }
    }

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
                <p> $ {product.price} </p>
                <Counter quantity={quantity} addQuantity={addQuantity} subtractQuantity={subtractQuantity} />
                <button className='card-button' onClick={() => addToCart({id:product.id, title: product.title, description: product.description, img: product.img, text: product.text, price: product.price, quantity:quantity})}>Agregar al carrito</button>
                <button className='card-button' onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
        </div>
        </div>
    )


}


export default ItemDetail;