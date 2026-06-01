import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SkillBadge from '../components/SkillBadge';

const HomePage = () => {
  const skillsPrincipales = ['React', 'Vite', 'Desarrollo FrontEnd', 'Análisis Funcional'];

  return (
    <div className="text-center mt-5">
      <Helmet>
        <title>Inicio | Simon Sclarandi</title>
        <meta name="description" content="Portafolio de Simon Sclarandi, Estudiante Analista de Sistemas de Computación y Desarrollador FrontEnd." />
      </Helmet>
      
      <img 
        src="https://ui-avatars.com/api/?name=Simon+Sclarandi&size=150&background=random" 
        alt="Foto de perfil de Simon Sclarandi" 
        className="rounded-circle mb-3 shadow"
      />
      
      <h1 className="display-4 fw-bold">¡Hola! Soy Simon Sclarandi</h1>
      <p className="lead fs-3 text-secondary">Estudiante Analista de Sistemas de Computación</p>
      
      <div className="mt-4 mb-4">
        <h3 className="h5 mb-3">Mis Skills Principales:</h3>
        <div className="d-flex justify-content-center flex-wrap">
          {skillsPrincipales.map((skill, index) => (
            <SkillBadge key={index} nombre={skill} />
          ))}
        </div>
      </div>

      <Link to="/contact" className="btn btn-lg btn-success mt-3 shadow-sm">
        ¡Contactame!
      </Link>
    </div>
  );
};

export default HomePage;