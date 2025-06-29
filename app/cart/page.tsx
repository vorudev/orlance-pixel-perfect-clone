'use client';
// pages/cart.tsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: '1rem' }}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
      <div style={{ marginTop: '1rem' }}>
        <Link href="/">
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
