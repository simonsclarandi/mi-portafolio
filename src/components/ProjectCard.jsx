import PropTypes from 'prop-types';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ nombre, descripcion, imagen, tecnologias }) => {
  return (
    <div className="card h-100 shadow-sm transition-hover">
      <img src={imagen} className="card-img-top" alt={`Captura de ${nombre}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{nombre}</h5>
        <p className="card-text text-secondary flex-grow-1">{descripcion}</p>
        
        <div className="mt-3">
          {/* Reutilizamos el componente SkillBadge */}
          {tecnologias.map((tech, index) => (
            <SkillBadge key={index} nombre={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Validación estricta de las propiedades
ProjectCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;