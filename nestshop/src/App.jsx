import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchAllProducts, fetchProductById } from './api/products';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import styled from "styled-components";
import { GlobalStyles } from './globalStyles';
import Home from './pages/Home/Home';
import ProductPage from './pages/product/ProductPage';



export default function App() {
  // Defining my state hooks
  const [theme, setTheme] = useState('light');
  const [products, setProducts] = useState([]);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
  async function loadProducts() {
    try {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts)
      console.log("Fetched products:", allProducts);
    } catch (err) {
      console.error("API error:", err.message);
      console.error(err);
    }
  }

  loadProducts();
}, []);

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} products={products} />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}
