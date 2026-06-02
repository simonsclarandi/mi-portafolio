import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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

  const habilidades = [
    { nombre: 'React / Vite', nivel: 85 },
    { nombre: 'JavaScript', nivel: 80 },
    { nombre: 'HTML5 & CSS3', nivel: 90 },
    { nombre: 'Análisis Funcional', nivel: 75 }
  ];

  return (
    <div className="animate__animated animate__fadeIn">
      <Helmet>
        <title>Sobre Mí | Simon Sclarandi</title>
      </Helmet>

      <div className="row align-items-center mb-5 pb-4 border-bottom border-dark">
        <div className="col-12 col-md-7 text-start order-2 order-md-1 mt-4 mt-md-0">
          <h2 className="fw-bolder text-uppercase mb-1">Sobre Mí</h2>
          <p className="text-info mb-4">simonsclarandi@email.com</p>
          <p className="lead text-secondary fs-6 lh-lg pe-md-4">
            Soy una persona dedicada a la que le entusiasma trabajar en equipo y enfrentar nuevos desafíos. Disfruto involucrarme constantemente en proyectos innovadores y aprender nuevas tecnologías. Mi enfoque principal está en crear interfaces y plataformas de alta calidad que ayuden a los negocios a potenciar su presencia digital.
          </p>
        </div>
        
        <div className="col-12 col-md-5 text-center text-md-end order-1 order-md-2">
          <img 
            src={`${import.meta.env.BASE_URL}mi-foto.png`} 
            alt="Simon Sclarandi" 
            className="img-fluid rounded-circle shadow-lg border border-3 border-info" 
            style={{ 
              width: '300px', 
              height: '300px', 
              objectFit: 'cover',
              filter: 'grayscale(30%)'
            }} 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500/121418/38bdf8?text=Tu+Foto' }}
          />
        </div>
      </div>

      {/* Habilidades y Experiencia */}
      <div className="row mt-4">
        <div className="col-md-6 mb-4 pe-md-5">
          <h4 className="text-uppercase fw-bold mb-4 border-bottom border-info pb-2 d-inline-block">Habilidades Técnicas</h4>
          {habilidades.map((hab, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <small className="text-uppercase fw-bold">{hab.nombre}</small>
              </div>
              <div className="progress rounded-pill bg-dark" style={{ height: '6px' }}>
                <div 
                  className="progress-bar bg-info" 
                  role="progressbar" 
                  style={{ width: `${hab.nivel}%` }} 
                  aria-valuenow={hab.nivel} 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-6 mb-4">
          <h4 className="text-uppercase fw-bold mb-4 border-bottom border-info pb-2 d-inline-block">Experiencia y Educación</h4>
          
          {/* Experiencia */}
          {experiencia.map((item) => (
            <div key={`exp-${item.id}`} className="mb-4">
              <div className="d-flex align-items-start">
                <div className="bg-info rounded-circle me-3 mt-1 shadow-sm" style={{ width: '10px', height: '10px' }}></div>
                <div>
                  <h6 className="fw-bold mb-0 text-uppercase">{item.puesto}</h6>
                  <p className="text-info small mb-1 fw-bold">{item.empresa}</p>
                  <small className="text-secondary">{item.anio}</small>
                  <p className="text-secondary small mt-2">
                    Desarrollo de landing pages y catálogos estructurados, ayudando a diversos clientes a digitalizar y mostrar sus servicios de forma atractiva.
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Educación */}
          {educacion.map((item) => (
             <div key={`edu-${item.id}`} className="mb-4">
               <div className="d-flex align-items-start">
                 <div className="bg-secondary rounded-circle me-3 mt-1 shadow-sm" style={{ width: '10px', height: '10px' }}></div>
                 <div>
                   <h6 className="fw-bold mb-0 text-uppercase">{item.titulo}</h6>
                   <p className="text-secondary small mb-1 fw-bold">{item.institucion}</p>
                   <small className="text-secondary">{item.anio}</small>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;