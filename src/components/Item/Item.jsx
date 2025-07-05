import { useState } from 'react';
import { useAppContext } from '../../context/context';
import Counter from '../Counter/Counter';
import './Item.css';
import { Link } from 'react-router';

function Item ({ id, price, title, text, img }){

    const { addToCart } = useAppContext();
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
        <div className='card-container'>
            <div className='cardImage-container'>
                <img src={img} className='card-image' alt='Imagen de producto' />
            </div>

            <div className='card-content'>
                <h3> {title} </h3>
                <p> {text} </p>
                <p> $ {price} </p>
                <Link to={`/details/${id}`} className='card-link'>
                <button className='card-button'>Ver detalles</button>
                </Link>
                <Counter quantity={quantity} addQuantity={addQuantity} subtractQuantity={subtractQuantity} />
                <button className='card-button' onClick= {() => addToCart({id:id, price:price, title:title, text:text, img:img, quantity:quantity})}>Agregar al carrito</button>
            </div>
        </div>
    )


}


export default Item;