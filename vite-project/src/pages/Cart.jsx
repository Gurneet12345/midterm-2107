import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import './Cart.css';

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(ShoppingCartContext);

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <input
                type="number"
                className="quantity-selector"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, +e.target.value)}
              />
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <h3 className="cart-total">
        Total: <span className="total-amount">${totalCost.toFixed(2)}</span>
      </h3>
    </div>
  );
}

export default Cart;
