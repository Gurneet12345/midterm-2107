import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllProducts } from '../api';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="page-title">Today's Deals</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <div className="discount-badge">32% off</div>
                <p className="product-price">
                  ${product.price}{' '}
                  <span className="original-price">Was: ${(product.price * 1.5).toFixed(2)}</span>
                </p>
                <p className="product-title">{product.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
