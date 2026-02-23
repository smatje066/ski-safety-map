import { useState } from 'react';
import { motion } from 'framer-motion';
import { incidentDetails } from '../data/skiData';
import IncidentDetail from './IncidentDetail';

export default function Mountain({ resort }) {
  const [selectedIncident, setSelectedIncident] = useState(null);
  
  const incidents = resort && incidentDetails[resort.name] ? incidentDetails[resort.name] : [];

  return (
    <>
      <div className="mountain-container">
        <svg 
          className="mountain-svg" 
          viewBox="0 0 600 400" 
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="40%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
            
            <linearGradient id="mtnBack" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            
            <linearGradient id="mtnMid" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="60%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            
            <linearGradient id="mtnFront" x1="50%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            
            <linearGradient id="snowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
            
            <linearGradient id="treeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
          </defs>

          {/* Sky */}
          <rect width="600" height="400" fill="url(#skyGradient)" rx="16" />

          {/* Back Mountain */}
          <motion.g
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <path d="M 150 350 L 300 120 L 450 350 Z" fill="url(#mtnBack)" />
            <path d="M 300 120 L 270 170 L 300 155 L 330 170 Z" fill="url(#snowGrad)" />
          </motion.g>

          {/* Middle Mountain */}
          <motion.g
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <path d="M 50 380 L 200 160 L 350 380 Z" fill="url(#mtnMid)" />
            <path d="M 200 160 L 170 200 L 200 188 L 230 200 Z" fill="url(#snowGrad)" />
          </motion.g>

          {/* Front Mountain */}
          <motion.g
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            filter="url(#softShadow)"
          >
            <path d="M 100 400 L 280 140 L 460 400 Z" fill="url(#mtnFront)" />
            <path d="M 280 140 L 250 180 L 280 170 L 305 175 L 310 185 Z" fill="url(#snowGrad)" />
            <ellipse cx="220" cy="280" rx="25" ry="15" fill="white" opacity="0.4" />
            <ellipse cx="340" cy="300" rx="20" ry="12" fill="white" opacity="0.4" />
          </motion.g>

          {/* Trees */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            {[
              {x: 80, y: 380, size: 1},
              {x: 120, y: 390, size: 0.8},
              {x: 450, y: 385, size: 1.2},
              {x: 500, y: 395, size: 0.7}
            ].map((tree, i) => (
              <g key={i} transform={`translate(${tree.x}, ${tree.y}) scale(${tree.size})`}>
                <polygon points="0,-40 15,0 -15,0" fill="url(#treeGrad)" />
                <polygon points="0,-60 12,-25 -12,-25" fill="url(#treeGrad)" />
                <polygon points="0,-75 8,-45 -8,-45" fill="url(#treeGrad)" />
                <rect x="-3" y="0" width="6" height="15" fill="#3d230f" />
              </g>
            ))}
          </motion.g>

          {/* Sun */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <circle cx="520" cy="60" r="25" fill="#fbbf24" opacity="0.9" />
            <circle cx="520" cy="60" r="35" fill="#fbbf24" opacity="0.3" />
          </motion.g>

          {/* Clouds */}
          <motion.g
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <ellipse cx="100" cy="70" rx="35" ry="18" fill="white" opacity="0.9" />
            <ellipse cx="130" cy="75" rx="28" ry="14" fill="white" opacity="0.9" />
            <ellipse cx="75" cy="78" rx="22" ry="11" fill="white" opacity="0.7" />
          </motion.g>
        </svg>

        {/* Incident Markers */}
        {incidents.length > 0 && (
          <div className="incident-markers-overlay">
            {incidents.map((incident, i) => {
              const positions = [
                { bottom: '160px', left: '35%' },
                { bottom: '200px', left: '55%' },
                { bottom: '140px', left: '70%' },
              ];
              const pos = positions[i % positions.length];
              return (
                <motion.button
                  key={incident.id}
                  className="incident-marker-btn"
                  style={{ bottom: pos.bottom, left: pos.left }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.2, type: 'spring' }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIncident(incident)}
                  title={`Klik voor details`}
                >
                  <span className="marker-icon">!</span>
                  <span className="marker-pulse"></span>
                </motion.button>
              );
            })}
          </div>
        )}

        {incidents.length > 0 && (
          <div className="markers-legend">
            <span className="legend-dot"></span>
            <span>Klik voor incident details</span>
          </div>
        )}
      </div>

      <IncidentDetail 
        incident={selectedIncident} 
        resortName={resort?.name}
        onClose={() => setSelectedIncident(null)} 
      />
    </>
  );
}
