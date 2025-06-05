import './Item.css';
import { Link } from 'react-router';

function Item ({ id, price, title, text, img }){


    return (
        <div className='card-container'>
            <div className='cardImage-container'>
                <img src={img} className='card-image' alt='Imagen de producto' />
            </div>

            <div className='card-content'>
                <h3> {title} </h3>
                <p> {text} </p>
                <p> {price} </p>
                <Link to={`/details/${id}`} className='card-link'>
                <button className='card-button'>Ver detalles</button>
                </Link>
                <button className='card-button'>Agregar al carrito</button>
            </div>
        </div>
    )


}


export default Item;