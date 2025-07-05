
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import { ContextProvider } from './context/context.jsx';
import ConfirmPurchase from './components/ConfirmPurchase/ConfirmPurchase.jsx';
import Cart from './components/Cart/Cart.jsx';


function App() {

  return (
    <>
    <ContextProvider>
    <BrowserRouter>
      <NavBar />


      <Routes>
        <Route path='/contact' element={<p>'Sección Contactos'</p>} />
        <Route path='/' element={<ItemListContainer greetings='Bienvenido al e-commerce' />} />
        <Route path='products' element={<p>'Sección Productos'</p>} />
        <Route path='/products/:category' element={<ItemListContainer />} />
        <Route path='*' element={<p>Página no encontrada</p>} />
        <Route path='/details/:id' element={<ItemDetail />} />
        <Route path='/confirmpurchase' element={<ConfirmPurchase />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>
    </ContextProvider>
    </>
  )
}

export default App
