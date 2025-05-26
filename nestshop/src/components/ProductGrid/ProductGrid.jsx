import react from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductGrid.css';

export default function ProductGrid({ products }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    }
    return (
        // for every product passed down, create a product card div with
        // the following features
        <div className="grid">
            {products.map(product => (
                <div 
                    key={product.id}
                    className="product-card"
                    onClick={() => handleClick(product.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={product.image} alt={product.name} width="100" />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    </div>
            ))}
        </div>
    );
}