import { motion } from 'framer-motion';

const dummyReports = [
  {
    id: 1,
    resort: 'Chamonix',
    country: 'Frankrijk',
    type: 'avalanche',
    typeLabel: '🏔️ Lawine',
    date: '2025-02-20',
    timeAgo: '2 dagen geleden',
    description: 'Lawine gemeld buiten de gemarkeerde route nabij Aiguille du Midi.',
    status: 'Geverifieerd',
  },
  {
    id: 2,
    resort: 'Zermatt',
    country: 'Zwitserland',
    type: 'offpiste',
    typeLabel: '⚠️ Off-piste',
    date: '2025-02-19',
    timeAgo: '3 dagen geleden',
    description: 'Skiër geraakt buiten de piste, helikopter ingezet.',
    status: 'Onderzoek',
  },
  {
    id: 3,
    resort: 'St. Anton',
    country: 'Oostenrijk',
    type: 'avalanche',
    typeLabel: '🏔️ Lawine',
    date: '2025-02-18',
    timeAgo: '4 dagen geleden',
    description: 'Plaat lawine in het Valluga gebied. Risico niveau was 4/5.',
    status: 'Geverifieerd',
  },
];

export default function RecentReports() {
  return (
    <motion.div
      className="recent-reports"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="recent-title">📰 Recente Meldingen</h3>
      <div className="reports-list">
        {dummyReports.map((report, index) => (
          <motion.div
            key={report.id}
            className="report-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="report-header">
              <span className={`report-type ${report.type}`}>{report.typeLabel}</span>
              <span className="report-time">{report.timeAgo}</span>
            </div>
            <h4>🏔️ {report.resort}, {report.country}</h4>
            <p>{report.description}</p>
            <div className="report-footer">
              <span className={`status-badge ${report.status === 'Geverifieerd' ? 'verified' : 'pending'}`}>
                {report.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
