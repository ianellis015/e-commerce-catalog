import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProduct.css';

export default function FeaturedProduct({ products }) {
    const featured = products.find(product => product.id === "1");
    const navigate = useNavigate();

    if (!featured) {
        return <div className='featured-product-div'>Loading Featured Product...</div>;
    }

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    }

    
    return (
 
        // Pass props down from API to display the featured product
        <div 
            className='featured-product-div'
            onClick={() => handleClick(featured.id)}
            style={{ cursor: 'pointer' }}
        >
            <p>Featured Product</p>
            <h1>{featured.name}</h1>
            <h3>{featured.description}</h3>
            <h2>${featured.price}</h2>
            <img src={featured.image} />
        </div>
    );
}