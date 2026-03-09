import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const timelineData = [
  { year: '2019' },
  { year: '2025' },
];

const Timeline = () => {
  const { t } = useTranslation();
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('timeline.title')} <span className="gradient-text">{t('timeline.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary"
          />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center z-10 shadow-lg shadow-primary/50"
              >
                <span className="text-sm font-bold">{item.year.slice(-2)}</span>
              </motion.div>

              <div className="ml-8 glass-effect rounded-xl p-6 flex-1">
                <span className="text-primary font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{t(`timeline.events.${item.year}.title`)}</h3>
                <p className="text-gray-400">{t(`timeline.events.${item.year}.institution`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
