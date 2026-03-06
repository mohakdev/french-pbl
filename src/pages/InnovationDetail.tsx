import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { innovations } from '../data/innovations';
import '../styles/innovation-detail.css';

const InnovationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const innovation = innovations.find(i => i.id === id);

  if (!innovation) {
    return (
      <div className="innovation-detail-container">
        <div className="not-found">
          <h1>{language === 'fr' ? 'Innovation non trouvée' : 'Innovation not found'}</h1>
          <Link to="/timeline" className="back-link">
            {language === 'fr' ? '← Retour à la chronologie' : '← Back to timeline'}
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'fr' ? innovation.titleFr : innovation.titleEn;
  const detailed = language === 'fr' ? innovation.detailedFr : innovation.detailedEn;

  const categoryLabels: Record<string, { fr: string; en: string }> = {
    science: { fr: 'Science', en: 'Science' },
    technology: { fr: 'Technologie', en: 'Technology' },
    industry: { fr: 'Industrie', en: 'Industry' },
    transport: { fr: 'Transport', en: 'Transport' },
    medicine: { fr: 'Médecine', en: 'Medicine' }
  };

  const categoryLabel = language === 'fr'
    ? categoryLabels[innovation.category].fr
    : categoryLabels[innovation.category].en;

  const categoryColors: Record<string, string> = {
    science: '#FF6B6B',
    technology: '#4ECDC4',
    industry: '#FFE66D',
    transport: '#95E1D3',
    medicine: '#C7CEEA'
  };

  // Find next and previous innovations for navigation
  const sortedInnovations = [...innovations].sort((a, b) => a.year - b.year);
  const currentIndex = sortedInnovations.findIndex(i => i.id === id);
  const previousInnovation = currentIndex > 0 ? sortedInnovations[currentIndex - 1] : null;
  const nextInnovation = currentIndex < sortedInnovations.length - 1 ? sortedInnovations[currentIndex + 1] : null;

  return (
    <div className="innovation-detail-container">
      {/* Hero Section with Image */}
      <div className="detail-hero" style={{ borderTopColor: categoryColors[innovation.category] }}>
        {innovation.image && (
          <div className="hero-image-wrapper">
            <img src={innovation.image} alt={title} className="hero-image" />
            <div className="hero-image-overlay"></div>
          </div>
        )}
        <div className="hero-content-wrapper">
          <Link to="/timeline" className="back-button">
            ← {language === 'fr' ? 'Retour' : 'Back'}
          </Link>
          <h1 className="detail-title">{title}</h1>
          <div className="detail-meta">
            <span className="year">{innovation.year}</span>
            <span className="category" style={{ backgroundColor: categoryColors[innovation.category] }}>
              {categoryLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="detail-content">
        <article className="detail-article">
          <h2>{language === 'fr' ? 'L\'Innovation' : 'The Innovation'}</h2>
          <p className="detail-text">{detailed}</p>

          {innovation.inventor && (
            <div className="inventor-section">
              <h3>{language === 'fr' ? 'Inventeur' : 'Inventor'}</h3>
              <p className="inventor-name">{innovation.inventor}</p>
            </div>
          )}

          <div className="timeline-context">
            <h3>{language === 'fr' ? 'Contexte Historique' : 'Historical Context'}</h3>
            <p>
              {language === 'fr'
                ? `Cette innovation a été inventée en ${innovation.year}, marquant une période importante dans l'histoire de la technologie et de la science.`
                : `This innovation was invented in ${innovation.year}, marking an important period in the history of technology and science.`}
            </p>
          </div>
        </article>
      </div>

      {/* Navigation Section */}
      <div className="navigation-section">
        <div className="nav-buttons">
          {previousInnovation && (
            <Link to={`/innovation/${previousInnovation.id}`} className="nav-button prev">
              <span className="nav-arrow">←</span>
              <div className="nav-info">
                <span className="nav-label">{language === 'fr' ? 'Précédent' : 'Previous'}</span>
                <span className="nav-title">
                  {language === 'fr' ? previousInnovation.titleFr : previousInnovation.titleEn}
                </span>
              </div>
            </Link>
          )}
          {nextInnovation && (
            <Link to={`/innovation/${nextInnovation.id}`} className="nav-button next">
              <div className="nav-info">
                <span className="nav-label">{language === 'fr' ? 'Suivant' : 'Next'}</span>
                <span className="nav-title">
                  {language === 'fr' ? nextInnovation.titleFr : nextInnovation.titleEn}
                </span>
              </div>
              <span className="nav-arrow">→</span>
            </Link>
          )}
        </div>
      </div>

      {/* Back to Timeline */}
      <div className="back-section">
        <Link to="/timeline" className="back-link-full">
          {language === 'fr' ? 'Voir toute la Chronologie' : 'View Full Timeline'}
        </Link>
      </div>
    </div>
  );
};

export default InnovationDetail;
