import { motion } from 'framer-motion';
import { fadeIn } from '../lib/variants';

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeIn}
      className="text-muted text-xs text-center py-12"
    >
      built by frtzhahn · 2025
    </motion.footer>
  );
}
