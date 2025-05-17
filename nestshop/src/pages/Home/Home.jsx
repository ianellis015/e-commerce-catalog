import React from 'react';
import Navbar from '../../components/Nav/NavBar.jsx';
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx';
import './Home.css';

export default function Home({ theme, toggleTheme, products }) {
    return (
<div className="content">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <div className="body-content">
          <ProductGrid products={products} />
          </div>
        </div>
        );
    }