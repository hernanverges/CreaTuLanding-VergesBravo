import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from 'react-router';

function NavBar(){
  return(
    <>
    <nav>
      <div className='logo-container'>
      <p className='logo'>LOGO</p>
      </div>

      <ul className='navbar-list'>
      <li>
        <Link to='/'>Inicio
        </Link>
      </li>

      <li className='navbar-item dropdown'>
          <span>Productos ▾</span>
          <ul className='dropdown-menu'>
            <li><Link to='/products/electrodomesticos'>Electrodomésticos</Link></li>
            <li><Link to='/products/computadoras'>Computadoras</Link></li>
            <li><Link to='/products/hogar'>Hogar</Link></li>
          </ul>
        </li>

      <li>
      <Link to='/contact'>Contacto
      </Link>
      </li>
      </ul>

      <div className='cartwidget-container'>
      <CartWidget cantidad='0' />
      </div>

    </nav>

      </>
  )
}

export default NavBar;