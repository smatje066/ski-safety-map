// Dummy data for ski resorts and avalanche incidents
// Note: This is educational dummy data - replace with actual official sources

export const countries = [
  { id: 'fr', name: 'Frankrijk', flag: '🇫🇷', resorts: 15 },
  { id: 'ch', name: 'Zwitserland', flag: '🇨🇭', resorts: 12 },
  { id: 'at', name: 'Oostenrijk', flag: '🇦🇹', resorts: 18 },
  { id: 'it', name: 'Italië', flag: '🇮🇹', resorts: 10 },
  { id: 'de', name: 'Duitsland', flag: '🇩🇪', resorts: 8 },
];

export const skiResorts = {
  fr: [
    { name: 'Chamonix', elevation: '3,842m', risk: 'Hoog', incidents: 3 },
    { name: 'Val d\'Isère', elevation: '3,456m', risk: 'Middel', incidents: 1 },
    { name: 'Les Deux Alpes', elevation: '3,568m', risk: 'Middel', incidents: 2 },
    { name: 'La Plagne', elevation: '3,250m', risk: 'Laag', incidents: 0 },
    { name: 'Les Arcs', elevation: '3,226m', risk: 'Middel', incidents: 1 },
  ],
  ch: [
    { name: 'Zermatt', elevation: '3,883m', risk: 'Hoog', incidents: 2 },
    { name: 'Verbier', elevation: '3,330m', risk: 'Hoog', incidents: 3 },
    { name: 'St. Moritz', elevation: '3,305m', risk: 'Middel', incidents: 1 },
    { name: 'Davos', elevation: '2,844m', risk: 'Middel', incidents: 1 },
    { name: 'Grindelwald', elevation: '2,500m', risk: 'Middel', incidents: 2 },
  ],
  at: [
    { name: 'Sölden', elevation: '3,340m', risk: 'Middel', incidents: 2 },
    { name: 'St. Anton', elevation: '2,811m', risk: 'Hoog', incidents: 3 },
    { name: 'Kitzbühel', elevation: '2,000m', risk: 'Laag', incidents: 1 },
    { name: 'Ischgl', elevation: '2,866m', risk: 'Middel', incidents: 2 },
    { name: 'Lech am Arlberg', elevation: '2,811m', risk: 'Middel', incidents: 1 },
  ],
  it: [
    { name: 'Cervinia', elevation: '3,480m', risk: 'Middel', incidents: 2 },
    { name: 'Courmayeur', elevation: '2,275m', risk: 'Hoog', incidents: 3 },
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
    text: 'Bekijk voor vertrek de actuele lawine risico\'s op officiële websites',
  },
  {
    icon: '🎒',
    title: 'Draag veiligheidsuitrusting',
    text: 'Zorg voor lawinepieper, schep en sonde - en weet hoe je het gebruikt',
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
    text: 'Frisse sneeuw na storm kan instabiel zijn',
  },
  {
    icon: '📍',
    title: 'Ken je route',
    text: 'Plan je afdaling en ken de vluchtroutes',
  },
];

export const avalancheLevels = [
  { level: 1, name: 'Laag', color: '#22c55e', description: 'Veilig - normale voorzichtigheid' },
  { level: 2, name: 'Middel', color: '#eab308', description: 'Matig - voorzichtig buiten piste' },
  { level: 3, name: 'Hoog', color: '#f97316', description: 'Groot - vermijd steile hellingen' },
  { level: 4, name: 'Erg Hoog', color: '#ef4444', description: 'Zeer groot - off-piste vermijden' },
  { level: 5, name: 'Extreem', color: '#7c3aed', description: 'Extreem - binnen piste blijven' },
];
