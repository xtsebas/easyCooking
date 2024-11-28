import './navbar.css';
import logo from '../../assets/file.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-options">
        <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <span className="search-icon">🔍</span> 
        </div>
        <a>Categorías</a>
        <a>Ingredientes</a>
        <a>Dificultad</a>
        <a>Inicia Sesion</a>
      </div>
    </nav>
  );
};

export default Navbar;