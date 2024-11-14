// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
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
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--dark-red)' }}>Contact Us</h1>
      <p>We’d love to hear from you! Please fill out the form below, and we’ll get back to you shortly.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '1rem',
          backgroundColor: '#E9E3D0', // Light cream for form background
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontFamily: "'Lato', sans-serif",
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontFamily: "'Lato', sans-serif",
            }}
          />
        </div>

        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              minHeight: '100px',
              fontFamily: "'Lato', sans-serif",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: 'var(--dark-red)',
            color: 'var(--cream)',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
