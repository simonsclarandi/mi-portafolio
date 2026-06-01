import { useState } from 'react';
import SkillBadge from '../components/SkillBadge.jsx';

const AboutPage = () => {
  // 1. Arrays con tus datos
  const experiencia = [
    { id: 1, puesto: 'Desarrollador Frontend Trainee', empresa: 'Tech Corp', anio: '2023 - Presente' },
    { id: 2, puesto: 'Freelance Web Developer', empresa: 'Autónomo', anio: '2022 - 2023' }
  ];

  const educacion = [
    { id: 1, titulo: 'Desarrollo Web Full Stack', institucion: 'Bootcamp', anio: '2022' },
    { id: 2, titulo: 'Tecnicatura en Programación', institucion: 'Universidad X', anio: '2020 - 2022' }
  ];

  const habilidades = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Node.js', 'Figma'];

  // Estado para el renderizado condicional (mostrar/ocultar experiencia)
  const [mostrarExperiencia, setMostrarExperiencia] = useState(true);

  return (
    <div className="row animate__animated animate__fadeIn">
      {/* Descripción personal */}
      <div className="col-12 mb-5 text-center">
        <h2 className="fw-bold mb-3">Sobre Mí</h2>
        <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
          Soy un desarrollador apasionado por crear interfaces web interactivas y accesibles. 
          Me encanta aprender nuevas tecnologías, resolver problemas complejos con código limpio 
          y trabajar en equipo para llevar ideas a la realidad.
        </p>
      </div>

      <div className="col-md-6 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h4 m-0">💼 Experiencia</h3>
          {/* Botón para alternar el estado */}
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={() => setMostrarExperiencia(!mostrarExperiencia)}
          >
            {mostrarExperiencia ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>

        {/* 2. Renderizado condicional con && */}
        {mostrarExperiencia && (
          <ul className="list-group shadow-sm">
            {experiencia.map((item) => (
              <li key={item.id} className="list-group-item">
                <h5 className="mb-1 fw-bold">{item.puesto}</h5>
                <p className="mb-1 text-primary">{item.empresa}</p>
                <small className="text-secondary">{item.anio}</small>
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