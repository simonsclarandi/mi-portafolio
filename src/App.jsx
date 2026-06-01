import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PopupWidget } from 'react-calendly';
import { useLocalStorage } from './hooks/useLocalStorage';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  const [tema, setTema] = useLocalStorage('tema', 'light');

  const location = useLocation();

  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname]);

  const toggleTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-vh-100 ${tema === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div ref={topRef}></div>

      <Navbar tema={tema} toggleTema={toggleTema} />
      
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <PopupWidget
        url="https://calendly.com/simonsclarandi-lp/30min" 
        rootElement={document.getElementById('root')}
        text="📅 Agendar Reunión"
        textColor="#ffffff"
        color="#0d6efd" 
      />
    </div>
  );
}

export default App;