import React, { useState} from 'react';
import Navbar from '../../components/Nav/NavBar.jsx';
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx';
import './Home.css';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct.jsx';
import Cart from '../../components/Cart/Cart.jsx'

export default function Home({ theme, toggleTheme, products }) {
    const [showCartModal, setShowCartModal] = useState(false);

    const onCartClick = () => {
        setShowCartModal(true)
    }
    return (
<div className="content">
    <Navbar theme={theme} toggleTheme={toggleTheme} onCartClick={onCartClick}/>
    <div className="body-content">
        <FeaturedProduct products={products} />
          <ProductGrid products={products} />
          </div>
          <Cart isOpen={showCartModal} onClose={() => setShowCartModal(false)} />
        </div>
        );
    }