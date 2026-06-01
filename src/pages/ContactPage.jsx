import { useReducer, useState } from 'react';

// 1. Definimos el estado inicial
const initialState = { nombre: '', email: '', mensaje: '' };

// 2. Definimos el reducer para manejar los campos
const formReducer = (state, action) => {
  switch (action.type) {
    case 'ACTUALIZAR_CAMPO':
      return { ...state, [action.campo]: action.valor };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const ContactPage = () => {
  // 3. Inicializamos useReducer y estados secundarios
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  // 4. Función de validación completa
  const validar = () => {
    let nuevosErrores = {};
    
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    
    if (!form.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nuevosErrores.email = 'El formato del email no es válido.';
    }
    
    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    }

    setErrores(nuevosErrores);
    // Devuelve true si no hay errores (objeto vacío)
    return Object.keys(nuevosErrores).length === 0;
  };

  // 5. Handlers de eventos
  const handleChange = (e) => {
    dispatch({ type: 'ACTUALIZAR_CAMPO', campo: e.target.name, valor: e.target.value });
  };

  const handleBlur = () => {
    validar(); // Valida al salir del input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validar()) {
      setEnviado(true);
      // Ocultar mensaje y resetear formulario automáticamente después de 3 segundos
      setTimeout(() => {
        setEnviado(false);
        dispatch({ type: 'RESET' });
        setErrores({});
      }, 3000);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setErrores({});
  };

  return (
    <div className="row justify-content-center animate__animated animate__fadeIn">
      <div className="col-12 col-md-8 col-lg-6">
        <h2 className="fw-bold mb-4 text-center">Contactame</h2>
        
        {/* Renderizado condicional del mensaje de éxito */}
        {enviado && (
          <div className="alert alert-success text-center shadow-sm">
            ¡Tu mensaje fue enviado con éxito!
          </div>
        )}

        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              /* Template literals dinámicos para clases de validación */
              className={`form-control ${errores.nombre ? 'is-invalid' : form.nombre ? 'is-valid' : ''}`}
              value={form.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errores.email ? 'is-invalid' : form.email ? 'is-valid' : ''}`}
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.email && <div className="invalid-feedback">{errores.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className={`form-control ${errores.mensaje ? 'is-invalid' : form.mensaje ? 'is-valid' : ''}`}
              value={form.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>
              Limpiar
            </button>
            <button type="submit" className="btn btn-primary px-4">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;