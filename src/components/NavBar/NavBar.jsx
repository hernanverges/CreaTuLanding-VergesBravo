import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar(){
  return(
    <>
    <nav>
      <div className='logo-container'>
      <p className='logo'>LOGO</p>
      </div>

      <ul className='navbar-list'>
      <li className='navbar-item'>Inicio</li>
      <li className='navbar-item'>Productos</li>
      <li className='navbar-item'>Contacto</li>
      </ul>

      <div className='cartwidget-container'>
      <CartWidget cantidad='0' />
      </div>

    </nav>

      </>
  )
}

export default NavBar;