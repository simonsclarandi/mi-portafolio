import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import proyectosData from '../data/proyectos.json';

const ProjectsPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos una petición Fetch con un retraso de 1.5 segundos
    const cargarProyectos = () => {
      try {
        setTimeout(() => {
          setProyectos(proyectosData);
          setCargando(false);
        }, 1500);
      } catch (err) {
        setError('Hubo un problema al cargar el portafolio.');
        setCargando(false);
      }
    };

    cargarProyectos();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  // Renderizado condicional: Mostrar un spinner mientras carga
  if (cargando) {
    return (
      <div className="text-center mt-5 pt-5">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <h4 className="mt-3 text-secondary">Cargando proyectos...</h4>
      </div>
    );
  }

  // Renderizado condicional: Mostrar mensaje si hay error
  if (error) {
    return (
      <div className="alert alert-danger text-center mt-5 shadow-sm">
        <h4>¡Ups!</h4>
        <p>{error}</p>
      </div>
    );
  }

  // Renderizado principal: Mostrar la grilla de proyectos
  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="fw-bold mb-4 text-center">Mis Proyectos</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {proyectos.map((proyecto) => (
          <div className="col" key={proyecto.id}>
            <ProjectCard 
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              imagen={proyecto.imagen}
              tecnologias={proyecto.tecnologias}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;