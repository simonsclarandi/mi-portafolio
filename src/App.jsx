import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';

// Iremos descomentando esto a medida que los construyamos
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Usamos tu custom hook para el tema
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const toggleTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    // Template literals para cambiar clases dinámicamente según el tema
    <div className={`min-vh-100 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      
      <Navbar tema={tema} toggleTema={toggleTema} />
      
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <PopupWidget
        url="https://calendly.com/TU-USUARIO-AQUI" // Reemplaza esto con tu link real de Calendly
        rootElement={document.getElementById('root')}
        text="📅 Agendar Reunión"
        textColor="#ffffff"
        color="#0d6efd" // Color azul de Bootstrap, puedes cambiarlo según tu preferencia
      />
      
    </div>
  );
}

export default App;