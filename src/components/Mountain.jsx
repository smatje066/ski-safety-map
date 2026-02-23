import { motion } from 'framer-motion';

export default function Mountain({ incidents = 0 }) {
  return (
    <div className="mountain-container">
      <svg 
        className="mountain-svg" 
        viewBox="0 0 500 400" 
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="50%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#f0f9ff" />
          </linearGradient>
          <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="8" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="500" height="400" fill="url(#skyGradient)" rx="16" />

        {/* Back mountain */}
        <motion.polygon
          points="100,400 250,120 400,400"
          fill="url(#mountainGradient3)"
          filter="url(#shadow)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        {/* Back snow cap */}
        <motion.polygon
          points="190,215 250,120 310,215 280,230 250,210 220,230"
          fill="url(#snowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Middle mountain */}
        <motion.polygon
          points="50,400 200,150 350,400"
          fill="url(#mountainGradient2)"
          filter="url(#shadow)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        {/* Middle snow cap */}
        <motion.polygon
          points="150,233 200,150 250,233"
          fill="url(#snowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        {/* Front mountain */}
        <motion.polygon
          points="0,400 180,180 360,400"
          fill="url(#mountainGradient1)"
          filter="url(#shadow)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        {/* Front snow cap */}
        <motion.polygon
          points="125,266 180,180 235,266 180,240"
          fill="url(#snowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Trees */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {/* Tree 1 */}
          <polygon points="40,400 50,360 60,400" fill="#0f766e" />
          <polygon points="45,380 50,350 55,380" fill="#0f766e" />
          {/* Tree 2 */}
          <polygon points="300,400 315,340 330,400" fill="#0f766e" />
          <polygon points="305,370 315,330 325,370" fill="#0f766e" />
          <polygon points="308,350 315,320 322,350" fill="#0f766e" />
          {/* Tree 3 */}
          <polygon points="400,400 410,370 420,400" fill="#0f766e" />
        </motion.g>

        {/* Clouds */}
        <motion.g 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ellipse cx="80" cy="60" rx="30" ry="15" fill="white" />
          <ellipse cx="100" cy="65" rx="25" ry="12" fill="white" />
          <ellipse cx="60" cy="65" rx="20" ry="10" fill="white" />
        </motion.g>
        <motion.g 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ellipse cx="400" cy="80" rx="35" ry="18" fill="white" />
          <ellipse cx="425" cy="85" rx="28" ry="14" fill="white" />
          <ellipse cx="375" cy="85" rx="22" ry="12" fill="white" />
        </motion.g>

        {/* Sun */}
        <motion.circle
          cx="450"
          cy="50"
          r="25"
          fill="#fbbf24"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.circle
          cx="450"
          cy="50"
          r="35"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeOpacity="0.3"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Incident Markers on mountain */}
        {incidents > 0 && (
          <g>
            {[...Array(Math.min(incidents, 3))].map((_, i) => {
              const positions = [
                { x: 180, y: 220 }, // on front snow
                { x: 200, y: 170 }, // on middle snow
                { x: 150, y: 290 }, // lower on front
              ];
              const pos = positions[i % positions.length];
              const offsetX = i === 1 ? 20 : i === 2 ? -30 : 0;
              return (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.3, type: 'spring' }}
                >
                  <circle
                    cx={pos.x + offsetX}
                    cy={pos.y}
                    r="15"
                    fill="#ef4444"
                    stroke="white"
                    strokeWidth="3"
                    filter="drop-shadow(0 4px 8px rgba(239, 68, 68, 0.5))"
                  />
                  <text
                    x={pos.x + offsetX}
                    y={pos.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    !
                  </text>
                  <motion.circle
                    cx={pos.x + offsetX}
                    cy={pos.y}
                    r="20"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    initial