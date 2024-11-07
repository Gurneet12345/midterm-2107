import React,{useEffect,useState,useContext}from 'react';
import {useParams}from 'react-router-dom';
import {fetchProductById}from '../api';
import {ShoppingCartContext}from '../context/ShoppingCartContext';

function ProductDetails(){
const {id} = useParams();
const {addToCart} = useContext(ShoppingCartContext);
const [product,setProduct] = useState(null);

useEffect(()=>{
fetchProductById(id).then(setProduct);
},[id]);

if(!product) return <p>Loading...</p>;

return(
<div>
<h1>{product.details}</h1>
<img src={product.image} alt={product.title} style={{width:'200px'}}/>
<p>{product.description}</p>
<p>Price: ${product.price}</p>
<button onClick={()=>addToCart(product)}>Add to Cart</button>
</div>
);}

export default ProductDetails;
