import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/variants';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const { displayed, done } = useTypewriter('built things.');

  return (
    <section className="pt-24 pb-16">
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className="text-muted text-xs">
          // cs student · bscs 1a · ph
        </motion.p>

        <motion.h1 variants={fadeUp} className="text-text text-4xl font-medium mt-3">
          {displayed}
          <span className={done ? 'animate-pulse' : ''}>|</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-muted text-sm mt-3 leading-relaxed">
          a collection of school projects, tools, and linux configs.
        </motion.p>
      </motion.div>
    </section>
  );
}
