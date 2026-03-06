import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Innovation } from '../data/innovations';
import '../styles/timeline.css';

interface TimelineItemProps {
  innovation: Innovation;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ innovation, isLeft }) => {
  const { language } = useLanguage();
  const title = language === 'fr' ? innovation.titleFr : innovation.titleEn;
  const description = language === 'fr' ? innovation.descriptionFr : innovation.descriptionEn;

  const categoryColors: Record<string, string> = {
    science: '#FF6B6B',
    technology: '#4ECDC4',
    industry: '#FFE66D',
    transport: '#95E1D3',
    medicine: '#C7CEEA'
  };

  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-marker" style={{ backgroundColor: categoryColors[innovation.category] }}></div>
      <div className="timeline-content">
        <div className="timeline-card">
          {innovation.image && (
            <div className="timeline-image-wrapper">
              <img src={innovation.image} alt={title} className="timeline-image" />
            </div>
          )}
          <div className="timeline-card-content">
            <span className="timeline-year">{innovation.year}</span>
            <h3 className="timeline-title">{title}</h3>
            <p className="timeline-description">{description}</p>
            <Link to={`/innovation/${innovation.id}`} className="timeline-link">
              {language === 'fr' ? 'En savoir plus →' : 'Learn more →'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
