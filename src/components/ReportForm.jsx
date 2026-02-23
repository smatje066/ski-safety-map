import { useState } from 'react';
import { motion } from 'framer-motion';
import { skiResorts } from '../data/skiData';

export default function ReportForm() {
  const [formData, setFormData] = useState({
    resort: '',
    type: '',
    date: '',
    description: '',
    anonymous: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ resort: '', type: '', date: '', description: '', anonymous: false });
    }, 3000);
  };

  return (
    <motion.div
      className="report-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="report-form-title">🚨 Incident Melden</h3>
      
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label>Skigebied *</label>
          <select
            value={formData.resort}
            onChange={(e) => setFormData({...formData, resort: e.target.value})}
            required
            className="form-select"
          >
            <option value="">Kies een skigebied...</option>
            {Object.entries(skiResorts).flatMap(([country, resorts]) =>
              resorts.map(resort => (
                <option key={resort.name} value={resort.name}>
                  {resort.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="form-group">
          <label>Type Incident *</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            required
            className="form-select"
          >
            <option value="">Selecteer type...</option>
            <option value="avalanche">🏔️ Lawine</option>
            <option value="offpiste">⚠️ Off-piste ongeval</option>
            <option value="other">📋 Anders</option>
          </select>
        </div>

        <div className="form-group">
          <label>Datum *</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Beschrijving *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
            rows="4"
            className="form-textarea"
            placeholder="Beschrijf wat er is gebeurd, locatie, omstandigheden..."
          />
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={formData.anonymous}
              onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
            />
            Anoniem melden (naam wordt niet getoond)
          </label>
        </div>

        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={submitted}
        >
          {submitted ? '✅ Verzonden!' : '📤 Melding verzenden'}
        </motion.button>

        <p className="form-disclaimer">
          ⚠️ Meldingen worden gemodereerd voor publicatie. Serieze incidenten worden doorgegeven aan autoriteiten.
        </p>
      </form>
    </motion.div>
  );
}
