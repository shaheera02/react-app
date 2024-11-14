// src/components/ProductCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, image, price }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    style={{
      backgroundColor: 'var(--cream)',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
      color: 'var(--dark-red)',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    }}
  >
    <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
    <h3>{title}</h3>
    <p>${price}</p>
    <button>Add to Cart</button>
  </motion.div>
);

export default ProductCard;
