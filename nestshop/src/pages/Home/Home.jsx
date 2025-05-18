import React from 'react';
import Navbar from '../../components/Nav/NavBar.jsx';
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx';
import './Home.css';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct.jsx';

export default function Home({ theme, toggleTheme, products }) {
    return (
<div className="content">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <div className="body-content">
        <FeaturedProduct products={products} />
          <ProductGrid products={products} />
          </div>
        </div>
        );
    }