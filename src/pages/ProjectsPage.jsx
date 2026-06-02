import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectosLocal = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}proyectos.json`);
        
        if (!response.ok) {
          throw new Error('Hubo un problema al cargar el archivo de proyectos.');
        }
        
        const data = await response.json();

        setTimeout(() => {
          setProyectos(data);
          setCargando(false);
        }, 500);

      } catch (err) {
        setError(err.message);
        setCargando(false);
      }
    };

    fetchProyectosLocal();
  }, []);

  if (cargando) {
    return (
      <div className="text-center mt-5 pt-5">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <h4 className="mt-3 text-secondary">Cargando portafolio...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-5 shadow-sm">
        <h4>¡Ups!</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <Helmet>
        <title>Proyectos | Mi Portafolio</title>
      </Helmet>
      
      <h2 className="fw-bold mb-4 text-center">Mis Proyectos</h2>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
        {proyectos.map((proyecto) => (
          <div className="col" key={proyecto.id}>
            <ProjectCard 
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              imagen={proyecto.imagen}
              tecnologias={proyecto.tecnologias}
              repo={proyecto.repo}
              link={proyecto.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;