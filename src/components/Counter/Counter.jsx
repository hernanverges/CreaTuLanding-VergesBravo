import './Counter.css';

function Counter ({quantity, subtractQuantity, addQuantity}){
    return (
        <>
        <div className='counter-container'>
            <button className='quantity-button' onClick={ addQuantity }>+</button>
            <p className='quantity-number'>{ quantity }</p>
            <button className='quantity-button' onClick={ subtractQuantity }>-</button>
        </div>
        </>
    )
}

export default Counter;