import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeUp, stagger } from '../lib/variants';
import { projects, type Category } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const tabs = ['all', 'school project', 'config', 'tool'] as const;

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20">
      <p className="text-muted text-xs mb-6">// projects</p>

      <div className="flex gap-1 flex-wrap mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveFilter(tab);
              setExpandedId(null);
            }}
            className={`relative px-3 py-1.5 text-xs cursor-pointer select-none transition-colors duration-150
              ${activeFilter === tab ? 'text-accent' : 'text-muted hover:text-text'}`}
          >
            {activeFilter === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-sm"
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      <motion.div
        key={activeFilter}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        {filtered.map((project) => (
          <motion.div key={project.name} variants={fadeUp}>
            <ProjectCard
              {...project}
              isExpanded={expandedId === project.name}
              onToggle={() =>
                setExpandedId(expandedId === project.name ? null : project.name)
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
