import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-dark bg-black border-bottom border-dark' : 'navbar-light bg-light shadow-sm'}`}>
      <div className="container py-2">
        <Link className="navbar-brand fw-bolder text-uppercase tracking-tight" to="/">
          Simon Sclarandi
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-uppercase fs-6" to="/about">Sobre Mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase fs-6" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase fs-6" to="/contact">Contacto</Link>
            </li>
          </ul>
          
          <button 
            className={`btn rounded-pill px-4 fw-bold shadow-sm ${tema === 'dark' ? 'btn-outline-info text-light' : 'btn-outline-dark'}`} 
            onClick={toggleTema}
          >
            {tema === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Validación obligatoria de props según la rúbrica
Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired,
};

export default Navbar;