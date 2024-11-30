import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import './navbar.css';
import logo from '../../assets/file.png';

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-options">
        <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <span className="search-icon">🔍</span> 
        </div>
        <Link to="/categories">Categorías</Link>
        <Link to="/ingredients">Ingredientes</Link>
        <Link to="/difficulty">Dificultad</Link>
        <Link to="/login">Inicia Sesión</Link>
      </div>
    </nav>
  );
};

export default Navbar;