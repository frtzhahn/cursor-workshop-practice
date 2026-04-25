import { motion } from 'framer-motion';

export default function Background() {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
      animate={{ opacity: [0.35, 0.65, 0.35] }}
      transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
    />
  );
}
