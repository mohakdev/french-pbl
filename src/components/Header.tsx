import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">🇫🇷 France Tech</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">{language === 'fr' ? 'Accueil' : 'Home'}</Link>
          <Link to="/timeline" className="nav-link">{language === 'fr' ? 'Chronologie' : 'Timeline'}</Link>
        </nav>

        <button className="language-toggle" onClick={toggleLanguage} title="Toggle language">
          <span className="language-flag">{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
          <span className="language-text">{language === 'fr' ? 'FR' : 'EN'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
