import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/products';

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            const data = await fetchProductById(id);
            setProduct(data);
        }
        loadProduct();
    }, [id]);

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
        <div>
            <div style={{ padding: '2rem' }}>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name} width="200" />
                <p>${product.price}</p>
                <p>{product.description}</p>

                <button 
                    className="add-to-cart"
                    onClick={addToCart}
                    >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
