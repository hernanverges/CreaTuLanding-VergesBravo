import { useAppContext } from '../../context/context';
import './Cart.css'; 

export default function Cart() {
  const { cart, cleanCart } = useAppContext();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${total}</p>
          <button className="clean-button" onClick={cleanCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}