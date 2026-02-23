// Dummy data for ski resorts and avalanche incidents
// Note: This is educational dummy data - replace with actual official sources

export const countries = [
  { id: 'fr', name: 'Frankrijk', flag: '🇫🇷', resorts: 15 },
  { id: 'ch', name: 'Zwitserland', flag: '🇨🇭', resorts: 12 },
  { id: 'at', name: 'Oostenrijk', flag: '🇦🇹', resorts: 18 },
  { id: 'it', name: 'Italië', flag: '🇮🇹', resorts: 10 },
  { id: 'de', name: 'Duitsland', flag: '🇩🇪', resorts: 8 },
];

// Detailed incident data per resort
export const incidentDetails = {
  'Chamonix': [
    {
      id: 1,
      date: '15 januari 2025',
      location: 'Aiguille du Midi - Vallee Blanche',
      piste: 'Off-piste route',
      description: 'Lawine buiten de gemarkeerde route. Skiërs hadden geen lawineapparatuur bij zich.',
      victims: 2,
      articleUrl: '#',
      severity: 'Hoog'
    },
    {
      id: 2,
      date: '3 februari 2025',
      location: 'Grands Montets',
      piste: 'Piste hors-piste',
      description: 'Risico 4/5, onervaren skiërs in afgesloten gebied.',
      victims: 1,
      articleUrl: '#',
      severity: 'Middel'
    }
  ],
  'Zermatt': [
    {
      id: 3,
      date: '20 december 2024',
      location: 'Triftj Biel',
      piste: 'Triftj',
      description: 'Tegenwind veroorzaakte harde windpakken op steile helling.',
      victims: 1,
      articleUrl: '#',
      severity: 'Hoog'
    },
    {
      id: 4,
      date: '8 januari 2025',
      location: 'Stockhorn-Trift',
      piste: 'Off-piste tussen pistes',
      description: 'Zware sneeuwfallen hadden unstable sneeuwlaag gecreëerd.',
      victims: 2,
      articleUrl: '#',
      severity: 'Hoog'
    }
  ],
  'St. Anton': [
    {
      id: 5,
      date: '12 januari 2025',
      location: 'Valluga West',
      piste: 'Off-piste naar St. Jakob',
      description: 'Skiërs verlieten pistes ondanks niveau 4 waarschuwing.',
      victims: 3,
      articleUrl: '#',
      severity: 'Hoog'
    },
    {
      id: 6,
      date: '28 januari 2025',
      location: 'Rendl',
      piste: 'Freeride gebied',
      description: 'Professional skier uit Oostenrijk geraakt door opgehoopte sneeuw.',
      victims: 1,
      articleUrl: '#',
      severity: 'Middel'
    }
  ],
  'Verbier': [
    {
      id: 7,
      date: '5 januari 2025',
      location: 'Mont Fort North Face',
      piste: 'Extreme off-piste',
      description: 'Ervaren freeriders, risico 5/5, volledige afdaling gescheiden door lawine.',
      victims: 2,
      articleUrl: '#',
      severity: 'Erg Hoog'
    },
    {
      id: 8,
      date: '18 januari 2025',
      location: 'Chassoure',
      piste: 'Tussen Chassoure en Col des Gentianes',
      description: 'Meerdere skiers geraakt, snelle reddingsactie voorkwam erger.',
      victims: 4,
      articleUrl: '#',
      severity: 'Hoog'
    }
  ],
  'Courmayeur': [
    {
      id: 9,
      date: '10 februari 2025',
      location: 'Vallee Blanche Italian Side',
      piste: 'Off-piste van Punta Helbronner',
      description: 'Groot lawinegebied, meerdere skiërs opgezocht door bergredding.',
      victims: 2,
      articleUrl: '#',
      severity: 'Hoog'
    }
  ],
  'Sölden': [
    {
      id: 10,
      date: '22 januari 2025',
      location: 'Rettenbach Gletsjer',
      piste: 'Freeride area achter Tiefenbachkogl',
      description: 'Warm weer en zon verzwakten sneeuwlaag.',
      victims: 2,
      articleUrl: '#',
      severity: 'Middel'
    }
  ]
};

export const skiResorts = {
  fr: [
    { name: 'Chamonix', elevation: '3,842m', risk: 'Hoog', incidents: 2 },
    { name: 'Val d\'Isère', elevation: '3,456m', risk: 'Middel', incidents: 1 },
    { name: 'Les Deux Alpes', elevation: '3,568m', risk: 'Middel', incidents: 2 },
    { name: 'La Plagne', elevation: '3,250m', risk: 'Laag', incidents: 0 },
    { name: 'Les Arcs', elevation: '3,226m', risk: 'Middel', incidents: 1 },
  ],
  ch: [
    { name: 'Zermatt', elevation: '3,883m', risk: 'Hoog', incidents: 2 },
    { name: 'Verbier', elevation: '3,330m', risk: 'Hoog', incidents: 2 },
    { name: 'St. Moritz', elevation: '3,305m', risk: 'Middel', incidents: 1 },
    { name: 'Davos', elevation: '2,844m', risk: 'Middel', incidents: 1 },
    { name: 'Grindelwald', elevation: '2,500m', risk: 'Middel', incidents: 2 },
  ],
  at: [
    { name: 'Sölden', elevation: '3,340m', risk: 'Middel', incidents: 1 },
    { name: 'St. Anton', elevation: '2,811m', risk: 'Hoog', incidents: 2 },
    { name: 'Kitzbühel', elevation: '2,000m', risk: 'Laag', incidents: 1 },
    { name: 'Ischgl', elevation: '2,866m', risk: 'Middel', incidents: 2 },
    { name: 'Lech am Arlberg', elevation: '2,811m', risk: 'Middel', incidents: 1 },
  ],
  it: [
    { name: 'Cervinia', elevation: '3,480m', risk: 'Middel', incidents: 2 },
    { name: 'Courmayeur', elevation: '2,275m', risk: 'Hoog', incidents: 1 },
    { name: 'Val Gardena', elevation: '2,500m', risk: 'Middel', incidents: 1 },
    { name: 'Livigno', elevation: '3,186m', risk: 'Laag', incidents: 0 },
  ],
  de: [
    { name: 'Garmisch-Partenkirchen', elevation: '2,720m', risk: 'Middel', incidents: 1 },
    { name: 'Oberstdorf', elevation: '2,224m', risk: 'Laag', incidents: 0 },
  ],
};

export const safetyTips = [
  {
    icon: '📱',
    title: 'Check de lawine radar',
    text: 'Bekijk voor vertrek het actuele risico op officiële websites zoals SLF of ANENA',
  },
  {
    icon: '🎒',
    title: 'Draag veiligheidsuitrusting',
    text: 'Lawinepieper, schep en sonde zijn essentieel - en weet hoe je ze gebruikt',
  },
  {
    icon: '👥',
    title: 'Ski nooit alleen',
    text: 'Blijf bij je groep en let op elkaar, vooral buiten de pistes',
  },
  {
    icon: '🏔️',
    title: 'Blijf op de piste',
    text: 'Off-piste skiën verhoogt het risico - alleen met gids en uitrusting',
  },
  {
    icon: '🌨️',
    title: 'Let op sneeuwcondities',
    text: 'Frisse sneeuw na storm kan instabiel zijn, wacht op stabilisatie',
  },
  {
    icon: '📍',
    title: 'Ken je route',
    text: 'Plan je afdaling en ken de vluchtroutes voor noodgevallen',
  },
];

export const avalancheLevels = [
  { level: 1, name: 'Laag', color: '#22c55e', description: 'Veilig - normale voorzichtigheid' },
  { level: 2, name: 'Middel', color: '#eab308', description: 'Matig - voorzichtig buiten piste' },
  { level: 3, name: 'Hoog', color: '#f97316', description: 'Groot - vermijd steile hellingen' },
  { level: 4, name: 'Erg Hoog', color: '#ef4444', description: 'Zeer groot - off-piste vermijden' },
  { level: 5, name: 'Extreem', color: '#7c3aed', description: 'Extreem - binnen piste blijven' },
];
