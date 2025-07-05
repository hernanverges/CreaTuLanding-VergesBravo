import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);


export const ContextProvider = (props) => {

const [cart, setCart] = useState([]);


//logica para agregar a carrito//
const addToCart = (product) => {
    if (cart.some(el => el.id === product.id)){
        const newCart = cart.map(newEl => {
            if (newEl.id === product.id){
                return {
                    ...newEl,
                    quantity: newEl.quantity + product.quantity,
                } 
            }else {
                    return newEl;
                };
        });
        setCart(newCart);
        console.log(...newCart, product);
    } else {
    setCart([...cart, product]);
    console.log([...cart, product]);
    }
}

//fin logica para agregar a carrito//

//vaciar carrito//
const cleanCart = () =>{
    setCart([]);
}
//fin vaciar carrito//

    return (
        <AppContext.Provider value={ {cart, addToCart, cleanCart} }>
        {props.children}
        </AppContext.Provider>
    )

}