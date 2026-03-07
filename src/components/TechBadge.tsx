import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  index: number;
}

const TechBadge = ({ name, index }: TechBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass-effect px-6 py-3 rounded-lg text-center group cursor-pointer"
    >
      <span className="text-white font-medium group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default TechBadge;
