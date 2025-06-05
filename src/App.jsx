import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavBar />


      <Routes>
        <Route path='/contact' element={<p>'Sección Contactos'</p>} />
        <Route path='/' element={<ItemListContainer greetings='Bienvenido al e-commerce' />} />
        <Route path='products' element={<p>'Sección Productos'</p>} />
        <Route path='/products/:category' element={<ItemListContainer />} />
        <Route path='*' element={<p>Página no encontrada</p>} />
        <Route path='/details/:id' element={<ItemDetail />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
