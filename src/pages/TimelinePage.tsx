import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { innovations } from '../data/innovations';
import TimelineItem from '../components/TimelineItem';
import '../styles/timeline-page.css';

const TimelinePage: React.FC = () => {
  const { language } = useLanguage();
  
  // Sort innovations by year
  const sortedInnovations = [...innovations].sort((a, b) => a.year - b.year);

  return (
    <div className="timeline-page">
      <div className="timeline-header">
        <h1>{language === 'fr' ? 'Chronologie des Innovations Françaises' : 'Timeline of French Innovations'}</h1>
        <p>
          {language === 'fr'
            ? 'Explorez les magnifiques réalisations technologiques de la France au fil du temps'
            : 'Explore the magnificent technological achievements of France through time'}
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {sortedInnovations.map((innovation, index) => (
          <TimelineItem
            key={innovation.id}
            innovation={innovation}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
