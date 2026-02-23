import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { countries, skiResorts, safetyTips } from '../data/skiData';
import Mountain from './Mountain';

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
                  {currentResorts.map((resort) => (
                    <motion.div
                      key={resort.name}
                      className={`resort-item ${selectedResort?.name === resort.name ? 'selected' : ''}`}
                      onClick={() => handleResortSelect(resort)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="resort-name">{resort.name}</span>
                      <span className="resort-risk">{resort.risk}</span>
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
              {selectedResort && <span style={{ color: getRiskColor(selectedResort.risk) }}>{selectedResort.risk}</span>}
            </div>

            <Mountain incidents={selectedResort?.incidents || 0} />

            {selectedResort && (
              <div className="resort-info">
                <p><strong>Hoogte:</strong> {selectedResort.elevation}</p>
                <p><strong>Lawine risico:</strong> {selectedResort.risk}</p>
                <p><strong>Incidenten:</strong> {selectedResort.incidents}</p>
              </div>
            )}
          </motion.div>

          <div className="card">
            <h2 className="card-title">🛡️ Veiligheidstips</h2>
            <div className="tips-grid">
              {safetyTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="tip-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="tip-icon">{tip.icon}</div>
                  <div className="tip-title">{tip.title}</div>
                  <div className="tip-text">{tip.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
