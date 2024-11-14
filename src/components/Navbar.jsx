// src/components/Navbar.js
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => (
  <nav style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--dark-red)',
    padding: '1rem',
    justifyContent: 'space-between',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
  }}>
    {/* Logo Section */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Makhdooms' Logo" style={{ height: '40px', marginRight: '1rem', transition: 'transform 0.3s ease' }} />
      <h1 style={{ color: 'var(--cream)', fontSize: '1.5rem', margin: 0 }}>Makhdooms'</h1>
    </div>

    {/* Links Section */}
    <div>
      <Link to="/" style={{ color: 'var(--cream)', margin: '0 1rem' }}>Home</Link>
      <Link to="/products" style={{ color: 'var(--cream)', margin: '0 1rem' }}>Products</Link>
      <Link to="/about" style={{ color: 'var(--cream)', margin: '0 1rem' }}>About</Link>
      <Link to="/contact" style={{ color: 'var(--cream)', margin: '0 1rem' }}>Contact</Link>
    </div>
  </nav>
);

export default Navbar;
