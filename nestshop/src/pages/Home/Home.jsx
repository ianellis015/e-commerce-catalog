import React, { useState} from 'react';
import Navbar from '../../components/Nav/NavBar.jsx';
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct.jsx';
import Cart from '../../components/Cart/Cart.jsx';
import './Home.css';

export default function Home({ theme, toggleTheme, products }) {
    const [showCartModal, setShowCartModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredProducts = selectedCategory ? products.filter(p =>
        p.category === selectedCategory) : products;
    

    const onCartClick = () => {
        setShowCartModal(true)
    }
    return (
<div className="content">
    <Navbar 
        theme={theme}
        toggleTheme={toggleTheme} 
        onCartClick={onCartClick}
        onFilterSelect={(category) => setSelectedCategory(category)}/>
    <div className="body-content">
        {!selectedCategory && <FeaturedProduct products={products} />}
          <ProductGrid products={filteredProducts} />
          </div>
          <Cart isOpen={showCartModal} onClose={() => setShowCartModal(false)} />
        </div>
        );
    }