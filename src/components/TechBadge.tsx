import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_TIMINGS } from '../constants/animations';

interface TechBadgeProps {
  name: string;
  index: number;
}

const TechBadge = memo(({ name, index }: TechBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: ANIMATION_TIMINGS.duration.fast, delay: index * ANIMATION_TIMINGS.stagger.short }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-effect px-6 py-3 rounded-lg text-center group cursor-pointer"
    >
      <span className="text-white font-medium group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
});

TechBadge.displayName = 'TechBadge';

export default TechBadge;
