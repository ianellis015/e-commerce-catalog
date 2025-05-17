import react from 'react';
import './ProductGrid.css';

export default function ProductGrid({ products }) {
    return (
        // for every product passed down, create a product card div with
        // the following features
        <div className="grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} width="100" />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    </div>
            ))}
        </div>
    );
}