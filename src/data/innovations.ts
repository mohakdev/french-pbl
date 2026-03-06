export interface Innovation {
  id: string;
  year: number;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  detailedFr: string;
  detailedEn: string;
  inventor?: string;
  category: 'science' | 'technology' | 'industry' | 'transport' | 'medicine';
  image?: string;
}

export const innovations: Innovation[] = [
  {
    id: 'hot-air-balloon',
    year: 1783,
    titleFr: 'Montgolfière - Ballon à Air Chaud',
    titleEn: 'Montgolfier - Hot Air Balloon',
    descriptionFr: 'Le premier vol de ballon à air chaud avec équipage humain',
    descriptionEn: 'First manned hot air balloon flight',
    detailedFr: `La montgolfière est l'une des plus grandes inventions françaises. En 1783, les frères Joseph-Michel et Jacques-Étienne Montgolfier ont créé le premier ballon à air chaud, révolutionnant le domaine de l'aéronautique. Le 21 novembre 1783, Jean-François Pilâtre de Rozier et François Laurent d'Arlandes ont effectué le premier vol humain en ballon au-dessus de Paris, parcourant environ 9 kilomètres en 25 minutes. Cette invention a marqué le début de l'exploration aérienne et a inspiré d'autres pionniers à poursuivre le développement de l'aviation.`,
    detailedEn: `The hot air balloon is one of the greatest French inventions. In 1783, brothers Joseph-Michel and Jacques-Étienne Montgolfier created the first hot air balloon, revolutionizing aeronautics. On November 21, 1783, Jean-François Pilâtre de Rozier and François Laurent d'Arlandes made the first manned hot air balloon flight over Paris, traveling approximately 9 kilometers in 25 minutes. This invention marked the beginning of aerial exploration and inspired other pioneers to continue developing aviation.`,
    inventor: 'Joseph-Michel & Jacques-Étienne Montgolfier',
    category: 'transport',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800'
  },
  {
    id: 'pasteurization',
    year: 1864,
    titleFr: 'Pasteurisation',
    titleEn: 'Pasteurization',
    descriptionFr: 'Procédé de chauffage pour éliminer les micro-organismes',
    descriptionEn: 'Heat treatment process to eliminate microorganisms',
    detailedFr: `Louis Pasteur a développé la pasteurisation, un procédé de chauffage qui élimine les micro-organismes nuisibles dans les liquides. Cette découverte révolutionnaire a transformé l'industrie alimentaire et pharmacologique en rendant les produits plus sûrs et plus durables. La pasteurisation est devenue applicable à divers produits comme le lait, le vin, la bière et les produits pharmaceutiques. Cette invention a sauvé d'innombrables vies en prévenant les maladies d'origine alimentaire et a établi les fondations de la microbiologie moderne.`,
    detailedEn: `Louis Pasteur developed pasteurization, a heating process that eliminates harmful microorganisms in liquids. This revolutionary discovery transformed the food and pharmaceutical industries by making products safer and longer-lasting. Pasteurization became applicable to various products such as milk, wine, beer, and pharmaceuticals. This invention saved countless lives by preventing foodborne illnesses and established the foundations of modern microbiology.`,
    inventor: 'Louis Pasteur',
    category: 'medicine',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'
  },
  {
    id: 'photography',
    year: 1822,
    titleFr: 'Photographie',
    titleEn: 'Photography',
    descriptionFr: 'Capture permanente d\'images par procédé optique et chimique',
    descriptionEn: 'Permanent capture of images through optical and chemical process',
    detailedFr: `Nicéphore Niépce et Louis-Jacques-Mandé Daguerre ont révolutionné la façon de capturer la réalité avec l'invention de la photographie. En 1822, Niépce a créé la première image permanente, et en 1839, Daguerre a présenté le daguerréotype, un procédé qui rendait la photographie pratique et accessible. Cette invention a transformé non seulement l'art, la science et le journalisme, mais a également changé la façon dont les humains documentent et se souviennent de leurs vies. La photographie est devenue l'une des plus grandes inventions de l'humanité.`,
    detailedEn: `Nicéphore Niépce and Louis-Jacques-Mandé Daguerre revolutionized the way reality was captured with the invention of photography. In 1822, Niépce created the first permanent image, and in 1839, Daguerre presented the daguerreotype, a process that made photography practical and accessible. This invention transformed not only art, science, and journalism, but also changed how humans document and remember their lives. Photography became one of humanity's greatest inventions.`,
    inventor: 'Nicéphore Niépce & Louis Daguerre',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800'
  },
  {
    id: 'bicycle',
    year: 1860,
    titleFr: 'Bicyclette',
    titleEn: 'Bicycle',
    descriptionFr: 'Développement de la bicyclette avec pédales',
    descriptionEn: 'Development of the pedal-powered bicycle',
    detailedFr: `La bicyclette moderne a été développée en France au 19ème siècle. Bien que les origines de la bicyclette soient complexes, c'est la bicyclette à pédales directe, inventée par Pierre Michaux en 1860, qui a marqué le véritable début de la bicyclette moderne. Cette invention a révolutionné le transport personnel, offrant une mobilité indépendante et inexpensive. La bicyclette s'est rapidement propagée dans le monde entier et reste l'une des inventions les plus importantes pour le transport durable et la mobilité urbaine.`,
    detailedEn: `The modern bicycle was developed in France during the 19th century. While the origins of the bicycle are complex, it was Pierre Michaux's pedal-powered bicycle, invented in 1860, that marked the true beginning of the modern bicycle. This invention revolutionized personal transportation, offering independent and inexpensive mobility. The bicycle quickly spread across the world and remains one of the most important inventions for sustainable transportation and urban mobility.`,
    inventor: 'Pierre Michaux',
    category: 'transport',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800'
  },
  {
    id: 'cinematograph',
    year: 1895,
    titleFr: 'Cinématographe',
    titleEn: 'Cinematograph',
    descriptionFr: 'Machine pour filmer et projeter des images animées',
    descriptionEn: 'Machine for filming and projecting moving images',
    detailedFr: `Les frères Lumière, Auguste Marie Louis Nicolas Lumière et Louis Jean Lumière, ont inventé le cinématographe en 1895. C'était une caméra portable, une imprimante et un projecteur en un seul appareil. Le 28 décembre 1895, ils ont organisé la première projection publique de films au Grand Café de Paris, marquant l'origine du cinéma commercial. Le cinématographe a eu un impact profond sur la culture, l'art et la communication mondiale, créant une nouvelle forme d'expression et de divertissement.`,
    detailedEn: `The Lumière brothers, Auguste Marie Louis Nicolas Lumière and Louis Jean Lumière, invented the Cinematograph in 1895. It was a portable camera, printer, and projector in one device. On December 28, 1895, they organized the first public film screening at the Grand Café in Paris, marking the origin of commercial cinema. The Cinematograph had a profound impact on world culture, art, and communication, creating a new form of expression and entertainment.`,
    inventor: 'Auguste et Louis Lumière',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800'
  },
  {
    id: 'stethoscope',
    year: 1816,
    titleFr: 'Stéthoscope',
    titleEn: 'Stethoscope',
    descriptionFr: 'Instrument pour écouter les sons internes du corps',
    descriptionEn: 'Instrument for listening to internal body sounds',
    detailedFr: `René Théophile Hyacinthe Laënnec a inventé le stéthoscope en 1816, révolutionnant le diagnostic médical. Cette invention simple mais ingénieuse a permis aux médecins d'écouter les bruits du cœur, des poumons et d'autres organes internes sans contact direct. Le stéthoscope est devenu un élément indispensable de l'équipement médical et a considérablement amélioré la précision des diagnostics. L'invention de Laënnec a jeté les bases de l'examen physique moderne et a contribué de manière significative à l'avancement de la médecine.`,
    detailedEn: `René Théophile Hyacinthe Laënnec invented the stethoscope in 1816, revolutionizing medical diagnosis. This simple yet ingenious invention allowed doctors to listen to the sounds of the heart, lungs, and other internal organs without direct contact. The stethoscope became an indispensable part of medical equipment and significantly improved diagnostic accuracy. Laënnec's invention laid the foundation for modern physical examination and contributed significantly to the advancement of medicine.`,
    inventor: 'René Théophile Hyacinthe Laënnec',
    category: 'medicine',
    image: 'https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=800'
  },
  {
    id: 'metric-system',
    year: 1790,
    titleFr: 'Système Métrique',
    titleEn: 'Metric System',
    descriptionFr: 'Système de mesure décimal standardisé',
    descriptionEn: 'Standardized decimal measurement system',
    detailedFr: `Le système métrique a été créé en France pendant la Révolution française, remplaçant les divers systèmes de mesure locaux par un système unifié et décimalisé. C'était un acte révolutionnaire qui a standardisé les poids et mesures, facilitant le commerce et la communication scientifique. Le mètre, basé sur une fraction de la circonférence terrestre, et le kilogramme, basé sur la masse d'un litre d'eau, sont devenus les unités fondamentales. Le système métrique a été adopté par de nombreux pays et est devenu la norme internationale pour la science et l'industrie.`,
    detailedEn: `The metric system was created in France during the French Revolution, replacing various local measurement systems with a unified and decimalized system. It was a revolutionary act that standardized weights and measures, facilitating commerce and scientific communication. The meter, based on a fraction of Earth's circumference, and the kilogram, based on the mass of a liter of water, became the fundamental units. The metric system was adopted by many countries and became the international standard for science and industry.`,
    inventor: 'Gabriel Mouton & Académie Française',
    category: 'science',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
  },
  {
    id: 'color-photography',
    year: 1903,
    titleFr: 'Photographie Couleur - Autochrome',
    titleEn: 'Color Photography - Autochrome',
    descriptionFr: 'Procédé de photographie en couleur',
    descriptionEn: 'Color photography process',
    detailedFr: `Les frères Lumière ont également contribué à la photographie en créant l'autochrome, un procédé révolutionnaire de photographie en couleur en 1903. C'était la première technique de photographie couleur pratique et efficace, utilisant une plaque de verre revêtue de grains de fécule de pomme de terre colorés. L'autochrome a permis aux photographes de capturer des images en couleur vive, transformant à nouveau la photographie. Bien que d'autres techniques aient depuis remplacé l'autochrome, cette invention représente l'innovation continue française dans le domaine de la photographie.`,
    detailedEn: `The Lumière brothers also contributed to photography by creating the Autochrome, a revolutionary color photography process in 1903. It was the first practical and efficient color photography technique, using glass plates coated with grains of colored potato starch. The Autochrome allowed photographers to capture images in vibrant color, transforming photography once again. Although other techniques have since replaced the Autochrome, this invention represents France's continued innovation in photography.`,
    inventor: 'Auguste et Louis Lumière',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98d995a2e?w=800'
  },
  {
    id: 'vaccine-rabies',
    year: 1885,
    titleFr: 'Vaccin contre la Rage',
    titleEn: 'Rabies Vaccine',
    descriptionFr: 'Premier vaccin contre une maladie virale',
    descriptionEn: 'First vaccine against a viral disease',
    detailedFr: `Louis Pasteur a créé le premier vaccin contre la rage en 1885, une réalisation monumentale en médecine. Le vaccin a été testé avec succès sur un jeune garçon français nommé Joseph Meister qui avait été mordu par un chien enragé. Cette vaccination a sauvé la vie de l'enfant et a marqué la première utilisation réussie d'un vaccin pour traiter une maladie après exposition. Cette découverte a ouvert la voie au développement d'autres vaccins et a jeté les fondations de l'immunologie moderne.`,
    detailedEn: `Louis Pasteur created the first rabies vaccine in 1885, a monumental achievement in medicine. The vaccine was successfully tested on a young French boy named Joseph Meister who had been bitten by a rabid dog. This vaccination saved the child's life and marked the first successful use of a vaccine to treat a disease after exposure. This discovery opened the way for the development of other vaccines and laid the foundations of modern immunology.`,
    inventor: 'Louis Pasteur',
    category: 'medicine',
    image: 'https://images.unsplash.com/photo-1532187863109-14011f916d63?w=800'
  },
  {
    id: 'electric-light',
    year: 1878,
    titleFr: 'Lampe à Incandescence Améliorée',
    titleEn: 'Improved Incandescent Lamp',
    descriptionFr: 'Développement pratique de l\'ampoule électrique',
    descriptionEn: 'Practical development of the electric light bulb',
    detailedFr: `Bien que plusieurs inventeurs aient contribué au développement de l'ampoule électrique, c'est Joseph Swan en Angleterre et Thomas Edison aux États-Unis qui sont souvent crédités, mais le scientifique français Léon Foucault et d'autres chercheurs français ont fait des contributions significatives. En 1878, le français Hippolyte Fontaine a travaillé sur l'amélioration des lampes électriques. Cette période a vu l'électrification progressive de la France, avec les scientifiques français jouant un rôle important dans le développement de la technologie électrique et de l'illumination.`,
    detailedEn: `While several inventors contributed to the development of the electric light bulb, Joseph Swan in England and Thomas Edison in the United States are often credited. However, French scientist Léon Foucault and other French researchers made significant contributions. In 1878, Frenchman Hippolyte Fontaine worked on improving electric lamps. This period saw the progressive electrification of France, with French scientists playing an important role in the development of electrical technology and illumination.`,
    inventor: 'Hippolyte Fontaine & autres',
    category: 'technology',
    image: 'https://images.unsplash.com/photo-1565636192335-14c8ee8ee4e4?w=800'
  },
  {
    id: 'x-ray',
    year: 1895,
    titleFr: 'Rayons X',
    titleEn: 'X-rays',
    descriptionFr: 'Découverte des radiations électromagnétiques',
    descriptionEn: 'Discovery of electromagnetic radiation',
    detailedFr: `Bien que Wilhelm Röntgen ait découvert les rayons X en Allemagne en 1895, la France a joué un rôle important dans le développement ultérieur de cette technologie. Pierre Curie et Marie Curie (d'origine polonaise mais travaillant en France) ont mené des recherches révolutionnaires sur la radioactivité et ont isolé le polonium et le radium. Leurs travaux ont ouvert de nouveaux horizons en physique et en médecine. La France a été à la forefront du développement des applications médicales des rayons X et de la radioactivité.`,
    detailedEn: `While Wilhelm Röntgen discovered X-rays in Germany in 1895, France played an important role in the subsequent development of this technology. Pierre Curie and Marie Curie (of Polish origin but working in France) conducted revolutionary research on radioactivity and isolated polonium and radium. Their work opened new horizons in physics and medicine. France was at the forefront in developing medical applications of X-rays and radioactivity.`,
    inventor: 'Pierre & Marie Curie',
    category: 'science',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800'
  }
];
