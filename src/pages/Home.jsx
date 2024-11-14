// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/leather-bg.jpg'; // Import background image

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      height: '100vh', // Full viewport height
      width: '100%', // Full width
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cream)', // Cream color for text
      backgroundImage: `url(${backgroundImage})`, // Set background image
      backgroundSize: 'cover', // Cover the whole div
      backgroundPosition: 'center', // Center the background
      backgroundRepeat: 'no-repeat', // No repeat
      position: 'relative',
    }}
  >
    {/* Semi-transparent overlay for better text readability */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(74, 4, 4, 0.6)', // Dark red overlay with transparency
      zIndex: 1,
    }}></div>

    {/* Content */}
    <div style={{
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
    }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem' }}>Welcome to Makhdooms'</h1>
      <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.2rem' }}>Explore our luxurious leather collection, crafted with precision and care.</p>
      <button style={{
        marginTop: '1rem',
        padding: '10px 20px',
        fontFamily: "'Playfair Display', serif",
        backgroundColor: 'var(--dark-red)',
        color: 'var(--cream)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}>
        Shop Now
      </button>
    </div>
  </motion.div>
);

export default Home;
