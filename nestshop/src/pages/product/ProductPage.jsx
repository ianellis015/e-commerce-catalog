import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../api/products';
import BackButton from '../../assets/Back-Button.svg';
import './ProductPage.css';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        async function loadProduct() {
            const data = await fetchProductById(id);
            setProduct(data);
        }
        loadProduct();
    }, [id]);

    // add item to cart using local storage:
    // Local Storage has three main methods
    /*
    •	localStorage.getItem(key) – retrieves a string by key
	•	localStorage.setItem(key, value) – saves a key-value string pair
	•	localStorage.removeItem(key) – deletes the key
    */
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};

        // If item already exists in the cart, increment it's quantity
        if (cart[id]) {
            cart[id].quantity += 1;
        } else {
            cart[id] = {
                ...product,
                quantity: 1
            };
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart`);
    };

    if (!product) return <p>Loading...</p>;
    return (
            <div className="product-page-container">
                <div
                    className="product-page-card"
                    style={{ padding: '2rem' }}>
                    <div className="info-container">
                        <button className="back-button" onClick={() => navigate(-1)}>
                            <img src={BackButton} alt="Go Back" />
                        </button>
                        <h1>{product.name}</h1>
                        <h3>{product.description}</h3>
                        <h1>${product.price}</h1>
                        <button 
                            className="add-to-cart"
                            onClick={addToCart}
                            >
                            Add to Cart
                        </button>
                    </div>
                    <div className="img-container">
                        <img src={product.image} alt={product.name} width="200" />
                    </div>
                </div>
            </div>
    )
}
