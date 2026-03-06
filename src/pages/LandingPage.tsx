import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/landing.css';

const LandingPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Innovative France',
      subtitle: 'Découvrez les innovations technologiques qui ont façonné le monde',
      cta: 'Explorer la Chronologie',
      description: 'La France a contribué à d\'innombrables innovations technologiques qui ont transformé l\'humanité. De la montgolfière aux rayons X, explorez les génies qui ont changé le cours de l\'histoire.',
      features: [
        { icon: '🚀', title: 'Innovation', desc: 'Pionniers de technologies révolutionnaires' },
        { icon: '🔬', title: 'Science', desc: 'Découvertes scientifiques fondamentales' },
        { icon: '🌍', title: 'Impact Global', desc: 'Inventions qui ont changé le monde' },
        { icon: '⭐', title: 'Excellence', desc: 'Héritage d\'excellence et de créativité' }
      ]
    },
    en: {
      title: 'Innovative France',
      subtitle: 'Discover the technological innovations that shaped the world',
      cta: 'Explore the Timeline',
      description: 'France has contributed to countless technological innovations that transformed humanity. From hot air balloons to X-rays, explore the geniuses who changed the course of history.',
      features: [
        { icon: '🚀', title: 'Innovation', desc: 'Pioneers of revolutionary technologies' },
        { icon: '🔬', title: 'Science', desc: 'Fundamental scientific discoveries' },
        { icon: '🌍', title: 'Global Impact', desc: 'Inventions that changed the world' },
        { icon: '⭐', title: 'Excellence', desc: 'Legacy of excellence and creativity' }
      ]
    }
  };

  const texts = language === 'fr' ? content.fr : content.en;

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{texts.title}</h1>
          <p className="hero-subtitle">{texts.subtitle}</p>
          <Link to="/timeline" className="hero-cta">
            {texts.cta}
            <span className="cta-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <div className="description-content">
          <h2>{language === 'fr' ? 'Héritage d\'Innovation' : 'Legacy of Innovation'}</h2>
          <p>{texts.description}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          {texts.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{language === 'fr' ? 'Plongez dans l\'Histoire' : 'Dive into History'}</h2>
          <p>
            {language === 'fr'
              ? 'Explorez plus de 10 innovations technologiques qui ont révolutionné le monde'
              : 'Explore over 10 technological innovations that revolutionized the world'}
          </p>
          <Link to="/timeline" className="cta-button">
            {language === 'fr' ? 'Voir la Chronologie' : 'View Timeline'}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          {language === 'fr'
            ? '© 2024 France Innovatrice - Célébrant les contributions technologiques de la France'
            : '© 2024 Innovative France - Celebrating France\'s technological contributions'}
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
