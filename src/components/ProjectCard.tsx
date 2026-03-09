import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Project } from '@data/projects';
import { ANIMATION_TIMINGS } from '@constants/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = memo(({ project, index, onClick }: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: ANIMATION_TIMINGS.duration.card, delay: index * ANIMATION_TIMINGS.stagger.short }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="glass-effect rounded-xl p-6 cursor-pointer group"
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35 }}
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover"
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border border-white/20 px-6 py-3 font-semibold tracking-wide text-primary/80"
          >
            PROJECT
          </motion.div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {project.shortDescription}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-2 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold glow-button"
      >
        {t('projects.viewDetails')}
      </motion.button>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
