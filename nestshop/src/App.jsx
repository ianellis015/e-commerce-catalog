import { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllProducts, fetchProductById } from './api/products';
import './App.css'


export default function App() {
  useEffect(() => {
  async function loadProducts() {
    try {
      const all = await fetchAllProducts();
      console.log("Fetched products:", all);

      const one = await fetchProductById("1");
      console.log("Fetched product with ID 1:", one);
    } catch (err) {
      console.error("API error:", err.message);
      console.error(err);
    }
  }

  loadProducts();
}, []);

  return (
    <div className="header">
      <h1>NestShop</h1>
      <p>Check the console to see the products!</p>
    </div>
  );
}
