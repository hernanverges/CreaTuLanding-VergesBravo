import { HiShoppingCart } from "react-icons/hi2";
import './CartWidget.css';

function CartWidget({ cantidad }){

  return(
    <p className='cart-icon'>
      <HiShoppingCart /> ({ cantidad })
    </p>
  )
}

export default CartWidget;