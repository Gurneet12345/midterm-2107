
import React,{useContext}from 'react';
import {ShoppingCartContext}from '../context/ShoppingCartContext';

function Checkout(){
const {cart} = useContext(ShoppingCartContext);
const totalCost = cart.reduce((sum,item) => sum+item.price*item.quantity,0);

return(
<div>
<h2>Checkout</h2>
{cart.map(item=>(
<div key={item.id}>
<h3>{item.title}</h3>
<p>Quantity: {item.quantity}</p>
<p>Subtotal: ${item.price*item.quantity}</p>
</div>
))}
<h3>Total Cost: ${totalCost.toFixed(2)}</h3>
<button onClick={()=>alert('Thank you for your purchase!')}>Checkout</button>
</div>
);}

export default Checkout;
