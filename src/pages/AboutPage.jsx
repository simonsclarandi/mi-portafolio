import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SkillBadge from '../components/SkillBadge.jsx';

const AboutPage = () => {
  const experiencia = [
    { 
      id: 1, 
      puesto: 'Desarrollador Frontend Web', 
      empresa: 'Proyectos Freelance para Empresas', 
      anio: 'Actualidad' 
    }
  ];

  const educacion = [
    { 
      id: 1, 
      titulo: 'Analista de Sistemas de Computación', 
      institucion: 'En curso', 
      anio: 'Actualidad' 
    }
  ];

  const habilidades = ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Análisis Funcional', 'Trabajo en Equipo', 'Metodologías Ágiles'];

  const [mostrarExperiencia, setMostrarExperiencia] = useState(true);

  return (
    <div className="row animate__animated animate__fadeIn">
      <Helmet>
        <title>Sobre Mí | Simon Sclarandi</title>
      </Helmet>

      <div className="col-12 mb-5 text-center">
        <h2 className="fw-bold mb-3">Sobre Mí</h2>
        <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
          Soy una persona dedicada a la que le entusiasma trabajar en equipo y enfrentar nuevos desafíos. Disfruto involucrarme constantemente en proyectos innovadores y aprender nuevas tecnologías. Mi enfoque principal está en crear interfaces y plataformas de alta calidad que ayuden a los negocios a potenciar su presencia digital.
        </p>
      </div>

      <div className="col-md-6 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h4 m-0">💼 Experiencia</h3>
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={() => setMostrarExperiencia(!mostrarExperiencia)}
          >
            {mostrarExperiencia ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>

        {mostrarExperiencia && (
          <ul className="list-group shadow-sm">
            {experiencia.map((item) => (
              <li key={item.id} className="list-group-item">
                <h5 className="mb-1 fw-bold">{item.puesto}</h5>
                <p className="mb-1 text-primary">{item.empresa}</p>
                <small className="text-secondary">{item.anio}</small>
                <p className="mt-2 mb-0 text-muted small">
                  Desarrollo de landing pages y catálogos estructurados, ayudando a diversos clientes a digitalizar y mostrar sus servicios de forma atractiva.
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="col-md-6 mb-4">
         <h3 className="h4 mb-3">🎓 Educación</h3>
         <ul className="list-group shadow-sm mb-4">
            {educacion.map((item) => (
              <li key={item.id} className="list-group-item">
                <h5 className="mb-1 fw-bold">{item.titulo}</h5>
                <p className="mb-1 text-primary">{item.institucion}</p>
                <small className="text-secondary">{item.anio}</small>
              </li>
            ))}
          </ul>

          <h3 className="h4 mb-3">🛠️ Más Habilidades</h3>
          <div className="d-flex flex-wrap">
            {habilidades.map((hab, index) => (
              <SkillBadge key={index} nombre={hab} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default AboutPage;