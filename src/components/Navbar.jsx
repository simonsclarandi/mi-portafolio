import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-light shadow-sm'}`}>
      <div className="container">
        {/* Link a Inicio */}
        <Link className="navbar-brand fw-bold" to="/">Mi Portafolio</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
          
          {/* Botón toggle de tema */}
          <button 
            className={`btn ${tema === 'dark' ? 'btn-light' : 'btn-dark'}`} 
            onClick={toggleTema}
          >
            {tema === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Validación de props como lo pide la consigna
Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired,
};

export default Navbar;