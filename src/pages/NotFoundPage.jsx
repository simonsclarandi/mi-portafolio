import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <div className="text-center mt-5 pt-5 animate__animated animate__fadeIn">
      <Helmet>
        <title>Página no encontrada | Mi Portafolio</title>
      </Helmet>

      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-4">¡Ups! Parece que te perdiste.</h2>
      <p className="text-secondary mb-4">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className="btn btn-lg btn-primary shadow-sm">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;