import { motion, AnimatePresence } from 'framer-motion';

export default function IncidentDetail({ incident, onClose, resortName }) {
  if (!incident) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="incident-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="incident-modal"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>×</button>
          
          <div className="incident-header">
            <span className="incident-icon">⚠️</span>
            <h3>Incident #{incident.id}</h3>
            <span className={`severity-badge ${incident.severity.toLowerCase().replace(' ', '-')}`}>
              {incident.severity}
            </span>
          </div>

          <div className="resort-name-badge">🏔️ {resortName}</div>

          <div className="incident-details">
            <div className="detail-row">
              <span className="detail-label">📅 Datum</span>
              <span className="detail-value">{incident.date}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">📍 Locatie</span>
              <span className="detail-value">{incident.location}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">🎿 Piste/Gebied</span>
              <span className="detail-value">{incident.piste}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">👥 Slachtoffers</span>
              <span className="detail-value victims">{incident.victims} {incident.victims > 1 ? 'personen' : 'persoon'}</span>
            </div>
          </div>

          <div className="incident-description">
            <h4>📝 Toelichting</h4>
            <p>{incident.description}</p>
          </div>

          {incident.articleUrl && (
            <a 
              href={incident.articleUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="news-link"
            >
              📰 Lees nieuwsartikel →
            </a>
          )}

          <div className="incident-footer">
            <p>⚠️ Dit zijn geanonimiseerde voorbeelden voor educatieve doeleinden</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
