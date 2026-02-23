import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { countries, skiResorts, safetyTips, avalancheLevels } from '../data/skiData';

export default function SkiSafetyMap() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedResort, setSelectedResort] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedResort(null);
  };

  const handleResortSelect = (resort) => {
    setSelectedResort(resort);
  };

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'Laag': return '#22c55e';
      case 'Middel': return '#eab308';
      case 'Hoog': return '#f97316';
      default: return '#64748b';
    }
  };

  const currentResorts = selectedCountry ? skiResorts[selectedCountry.id] || [] : [];

  return (
    <div className="ski-safety-container">
      <header className="header">
        <motion.h1 
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⛷️ Lawine Veiligheidskaart
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Educatieve kaart van ski-gebieden in Europa met veiligheidstips
        </motion.p>
        <div className="warning-badge">
          ⚠️ Educatief doeleinde - Check altijd officiële bronnen
        </div>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h2 className="card-title">🌍 Kies een land</h2>
            <div className="country-list">
              {countries.map((country, index) => (
                <motion.button
                  key={country.id}
                  className={`country-btn ${selectedCountry?.id === country.id ? 'active' : ''}`}
                  onClick={() => handleCountrySelect(country)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="country-flag">{country.flag}</span>
                  <div className="country-info">
                    <div className="country-name">{country.name}</div>
                    <div className="country-resorts">{country.resorts} skigebieden</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedCountry && (
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="card-title">🏔️ Skigebieden</h2>
                <div className="resort-list">
                  {currentResorts.map((resort, index) => (
                    <motion.div
                      key={resort.name}
                      className={`resort-item ${selectedResort?.name === resort.name ? 'selected' : ''}`}
                      onClick={() => handleResortSelect(resort)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="resort-name">{resort.name}</span>
                      <span 
                        className="resort-risk"
                        style={{ backgroundColor: selectedResort?.name === resort.name ? 'rgba(255,255,255,0.3)' : getRiskColor(resort.risk) + '20', color: selectedResort?.name === resort.name ? '#fff' : getRiskColor(resort.risk) }}
                      >
                        {resort.risk}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>

        <main className="main-display">
          <motion.div 
            className="display-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="display-title">
              <span>🏔️ {selectedResort ? selectedResort.name : 'Selecteer een skigebied'}</span>
              {selectedResort && (
                <span style={{ 
                  backgroundColor: getRiskColor(selectedResort.risk) + '20', 
                  color: getRiskColor(selectedResort.risk),
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.875rem'
                }}>
                  Risico: {selectedResort.risk}
                </span>
              )}
            </div>

            {/* Animated Mountain */}
            <div className="mountain-container">
              <div className="mountain">
                <div className="mountain-base"></div>
                <div className="mountain-peak"></div>
                <div className="mountain-snow"></div>
                
                {/* Incident Markers */}
                {selectedResort && selectedResort.incidents > 0 && (
                  <>
                    {[...Array(Math.min(selectedResort.incidents, 3))].map((_, i) => (
                      <motion.div
                        key={i}
                        className="incident-marker"
                        style={{
                          bottom: `${150 + i * 40}px`,
                          left: `${50 + (i - 1) * 40}px`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.2, type: 'spring' }}
                        whileHover={{ scale: 1.3 }}
                        title={`Incident locatie ${i + 1}`}
                      >
                        ⚠️
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {selectedResort && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '1rem' }}
              >
                <p><strong>Hoogte:</strong> {selectedResort.elevation}</p>
                <p><strong>Lawine risico:</strong> <span style={{ color: getRiskColor(selectedResort.risk) }}>{selectedResort.risk}</span></p>
                <p><strong>Gemelde incidenten (2024):</strong> {selectedResort.incidents}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Safety Tips */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <h2 className="card-title">🛡️ Veiligheidstips</h2>
            <div className="tips-grid">
              {s