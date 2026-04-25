import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-border"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-[740px] mx-auto px-5 md:px-10 py-4 flex justify-between items-center">
        <a
          href="https://github.com/frtzhahn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm font-medium hover:opacity-70 transition-opacity duration-150"
        >
          frtzhahn
        </a>
        <a
          href="https://github.com/frtzhahn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted text-xs hover:text-text transition-colors duration-150"
        >
          github ↗
        </a>
      </div>
    </motion.header>
  );
}
