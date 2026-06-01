import { Link } from 'react-router-dom';
import SkillBadge from '../components/SkillBadge';

const HomePage = () => {
  // Datos definidos en un array como pide la consigna
  const skillsPrincipales = ['React', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Git'];

  return (
    <div className="text-center mt-5">
      {/* Foto de perfil (puedes reemplazar la URL por una foto tuya) */}
      <img 
        src="https://ui-avatars.com/api/?name=Tu+Nombre&size=150&background=random" 
        alt="Mi foto de perfil" 
        className="rounded-circle mb-3 shadow"
      />
      
      <h1 className="display-4 fw-bold">¡Hola! Soy [Tu Nombre]</h1>
      <p className="lead fs-3 text-secondary">Desarrollador Web Frontend</p>
      
      <div className="mt-4 mb-4">
        <h3 className="h5 mb-3">Mis Skills Principales:</h3>
        <div className="d-flex justify-content-center flex-wrap">
          {/* Uso del .map() con key */}
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