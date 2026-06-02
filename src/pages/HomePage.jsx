import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <div 
      className="row align-items-center animate__animated animate__fadeIn m-0 rounded shadow-lg"
      style={{ 
        minHeight: '85vh', /* Aumentamos ligeramente el alto para dar más respiro */
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${import.meta.env.BASE_URL}escritorio.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Helmet>
        <title>Inicio | Simon Sclarandi</title>
        <meta name="description" content="Portafolio de Simon Sclarandi, Estudiante Analista de Sistemas de Computación y Desarrollador FrontEnd." />
      </Helmet>
      
      {/* EL CAMBIO ESTÁ AQUÍ: Agregamos mt-5 (Margin Top 5) para forzar que el bloque baje un poco */}
      <div className="col-12 col-md-8 text-start p-5 mt-5">
        
        <h1 className="display-2 fw-bolder text-uppercase mb-0 tracking-tight text-light">
          Simon
        </h1>
        <h1 className="display-2 fw-bolder text-uppercase mb-2 text-info">
          Sclarandi
        </h1>
        <p className="lead fs-4 text-secondary mb-5 text-uppercase letter-spacing-1">
          Estudiante Analista de Sistemas
        </p>
        
        <div className="d-flex gap-3 mb-4">
          <Link to="/about" className="btn btn-outline-light rounded-pill px-4 py-2 text-uppercase fw-bold">
            Sobre Mí
          </Link>
          <Link to="/projects" className="btn btn-outline-info rounded-pill px-4 py-2 text-uppercase fw-bold">
            Portafolio
          </Link>
        </div>

        {/* Redes Sociales */}
        <div className="d-flex gap-3 align-items-center mt-4">
          <span className="text-secondary fw-bold text-uppercase me-2">Redes:</span>
          <a href="https://github.com/simonsclarandi" target="_blank" rel="noreferrer" className="text-light text-decoration-none fs-5 transition-hover">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/simon-sclarandi/" target="_blank" rel="noreferrer" className="text-light text-decoration-none fs-5 ms-3 transition-hover">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;