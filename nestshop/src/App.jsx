import React, { useState, useEffect } from 'react'
import { fetchAllProducts, fetchProductById } from './api/products';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import styled from "styled-components";
import { GlobalStyles } from './globalStyles';
import './App.css'


export default function App() {
  // Defining our state hooks
  const [theme, setTheme] = useState('light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="header">
          <h1>NestShop</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <p>Check the console to see the products!</p>
        </div>
        </>
    </ThemeProvider>
  );
}
