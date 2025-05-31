import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../theme';
import trashIcon from '../../assets/trash-icon.svg';
import './Cart.css'

export default function Cart({ isOpen, onClose, theme }) {
    const [cartItems, setCartItems] = useState([]);
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    // Load cart data from local storage
    useEffect(() => {
        if (isOpen) {
            const cartData = JSON.parse(localStorage.getItem('cart')) || {};
            const items = Object.values(cartData);
            setCartItems(items);
        }
    }, [isOpen]);

    const updateCart = (items) => {
        const cartObj = {};
        items.forEach(item => {
            cartObj[item.id] = item;
        });
        localStorage.setItem('cart', JSON.stringify(cartObj));
        setCartItems(items);
    };

    const increment = (id) => {
        const updated = cartItems.map(item =>
            item.id === id ? {...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updated);
    }

    const decrement = (id) => {
        const updated = cartItems.map(item =>
            item.id === id ? {...item, quantity: Math.max(1, item.quantity -1) } : item
        );
        updateCart(updated);
    }

    const removeItem = (id) => {
        const updated = cartItems.filter(item => item.id !== id);
        updateCart(updated);
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (!isOpen) return null; // only render modal when isOpen is true
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
        >
            <div
                style={{
                    backgroundColor: themeMode.background,
                    color: themeMode.text,
                    padding: '2rem',
                    borderRadius: '15px',
                    minWidth: '300px',
                    maxHeight: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className="cart-header">
                    <h2>Your Cart</h2>
                </div>

                {/* Scrollable part of Modal */}
                <div className="cart-items-container">
                {cartItems.length === 0 ? (
                    <p>Uh Oh...Your cart is empty 😢</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <button className="quantity-controller" onClick={() => decrement(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button className="quantity-controller" onClick={() => increment(item.id)}>+</button>
                                <button className="remove-button" onClick={() => removeItem(item.id)} style={{ marginLeft: '1rem' }}>
                                    <img src={trashIcon} alt="Remove Item" width="20" height="20" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
                </div>

                {/* Cart Modal Footer */}
            <div className="cart-footer">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="close-modal" onClick={onClose}>Close</button>
              </div>
            </div>
        </div>
    );
}