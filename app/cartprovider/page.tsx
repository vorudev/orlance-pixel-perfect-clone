"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";

const products = [
  { id: 1, name: "Product A", price: 9.99, image: "/item1.png" },
  
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Products</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Link href="/pages/cart">
        Go to Cart
      </Link>
    </div>
  );
};

export default Home;
