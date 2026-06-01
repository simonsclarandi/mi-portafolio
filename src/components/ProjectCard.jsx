import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

const ProjectCard = ({ nombre, descripcion, imagen, tecnologias }) => {
  return (
    <motion.div 
      // Configuraciones de Framer Motion
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // Hace que la animación ocurra solo la primera vez que se ve
      
      className="card h-100 shadow-sm transition-hover"
    >
      <img src={imagen} className="card-img-top" alt={`Captura de ${nombre}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{nombre}</h5>
        <p className="card-text text-secondary flex-grow-1">{descripcion}</p>
        
        <div className="mt-3">
          {tecnologias.map((tech, index) => (
            <SkillBadge key={index} nombre={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;