// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      color: 'var(--text-color)', // Dark red
      backgroundColor: 'var(--cream)',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: "'Lato', sans-serif",
    }}
  >
    <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--dark-red)' }}>About Us</h1>
    <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
      At Makhdooms', we specialize in creating premium leather goods that stand the test of time. Our journey began with a
      passion for timeless craftsmanship and an eye for quality materials. We source our leather from sustainable farms, ensuring
      each product not only exudes luxury but also meets the highest environmental standards.
    </p>

    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--dark-red)' }}>Our Mission</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
        Our mission is to blend elegance with durability, crafting products that accompany you in all your adventures. Whether it’s
        a bag, wallet, or jacket, every item is designed with precision and dedication.
      </p>
    </section>

    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--dark-red)' }}>Why Choose Us?</h2>
      <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '1.6' }}>
        <li>✔ Premium quality materials</li>
        <li>✔ Timeless craftsmanship</li>
        <li>✔ Eco-friendly production</li>
      </ul>
    </section>
  </motion.div>
);

export default About;
