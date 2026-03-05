import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import TimelinePage from './pages/TimelinePage';
import InnovationDetail from './pages/InnovationDetail';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div id="root">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/innovation/:id" element={<InnovationDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
