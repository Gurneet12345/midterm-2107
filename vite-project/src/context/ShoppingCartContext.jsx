// src/context/ShoppingCartContext.jsx
import React,{createContext,useState}from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
const [cart,setCart] = useState([]);
const addToCart = (product) => {
const existingProduct = cart.find(item => item.id === product.id);
if(existingProduct){
setCart(cart.map(item=>
item.id===product.id?{...item,quantity:item.quantity+1}:item));
}else{
setCart([...cart,{...product,quantity:1}]); }};
const updateQuantity = (id, quantity) => {
setCart(cart.map(item=>
item.id===id?{...item,quantity}:item));
};
const removeFromCart=(id)=>{setCart(cart.filter(item=>item.id!==id));};
return(
<ShoppingCartContext.Provider value={{cart,addToCart,updateQuantity,removeFromCart}}>
{children}
</ShoppingCartContext.Provider>);};
