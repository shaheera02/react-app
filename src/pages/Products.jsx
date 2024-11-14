// src/pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => (
  <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', padding: '2rem' }}>
    <ProductCard title="Leather Bag" image="/assets/leather-bag.jpg" price="199" />
    <ProductCard title="Leather Wallet" image="/assets/leather-wallet.jpg" price="49" />
    <ProductCard title="Leather Jacket" image="/assets/leather-jacket.jpg" price="299" />
    {/* Add more products as needed */}
  </div>
);

export default Products;
