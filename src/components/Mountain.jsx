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
        </defs>

        <rect width="500" height="400" fill="url(#skyGradient)" rx="16" />

        <motion.polygon
          points="100,400 250,120 400,400"
          fill="url(#mountainGradient3)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.polygon
          points="190,215 250,120 310,215"
          fill="url(#snowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        <motion.polygon
          points="50,400 200,150 350,400"
          fill="url(#mountainGradient2)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.polygon
          points="150,233 200,150 250,233"
          fill="url(#snowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        <motion.polygon
          points="0,400 180,180 360,400"
          fill="url(#mountainGradient1)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.polygon
          points="125,266 180,180 235,266"
          fill="url(#snowGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <polygon points="40,400 50,360 60,400" fill="#0f766e" />
          <polygon points="45,380 50,350 55,380" fill="#0f766e" />
          <polygon points="300,400 315,340 330,400" fill="#0f766e" />
          <polygon points="305,370 315,330 325,370" fill="#0f766e" />
          <polygon points="400,400 410,370 420,400" fill="#0f766e" />
        </motion.g>

        <motion.g 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ellipse cx="80" cy="60" rx="30" ry="15" fill="white" />
          <ellipse cx="100" cy="65" rx="25" ry="12" fill="white" />
        </motion.g>

        <motion.circle
          cx="450"
          cy="50"
          r="25"
          fill="#fbbf24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {incidents > 0 && (
          <g>
            {[...Array(Math.min(incidents, 3))].map((_, i) => {
              const positions = [
                { x: 180, y: 220 },
                { x: 200, y: 170 },
                { x: 150, y: 290 },
              ];
              const pos = positions[i];
              return (
                <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 + i * 0.3 }}>
                  <circle cx={pos.x} cy={pos.y} r="15" fill="#ef4444" stroke="white" strokeWidth="3" />
                  <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">!</text>
                </motion.g>
              );
            })}
          </g>
        )}
      </svg>
    </div>
  );
}
