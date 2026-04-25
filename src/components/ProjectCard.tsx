import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  name: string;
  url: string;
  category: string;
  description: string;
  tech: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProjectCard({
  name,
  url,
  category,
  description,
  tech,
  isExpanded,
  onToggle,
}: Props) {
  return (
    <div
      onClick={onToggle}
      className={`
        bg-surface border rounded-sm p-5 cursor-pointer transition-colors duration-150
        ${
          isExpanded
            ? 'border-accent/40 bg-surface-hi'
            : 'border-border hover:border-border-hi hover:bg-surface-hi'
        }
      `}
    >
      <div className="flex justify-between items-center">
        <span className="text-accent text-sm font-medium">{name}</span>
        <div className="flex items-center gap-3">
          <span className="text-muted text-xs border border-border rounded-sm px-2 py-0.5">
            {category}
          </span>
          <span className="text-muted text-xs w-3 text-center">{isExpanded ? '−' : '+'}</span>
        </div>
      </div>

      <p className="text-muted text-xs mt-2 leading-relaxed line-clamp-1">
        {description.split('.')[0]}.
      </p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-muted text-sm leading-relaxed">{description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-muted text-xs border border-border rounded-sm px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="block text-muted text-xs mt-4 hover:text-text transition-colors duration-150"
              >
                {url}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
