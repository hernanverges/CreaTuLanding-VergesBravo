import { HiShoppingCart } from "react-icons/hi2";
import './CartWidget.css';
import { useAppContext } from "../../context/context";

function CartWidget(){

  const { cart } = useAppContext();

  return(
    <p className='cart-icon'>
      <HiShoppingCart /> ({ cart.length })
    </p>
  )
}

export default CartWidget;