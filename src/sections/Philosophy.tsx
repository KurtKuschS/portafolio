import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Principle {
  key: string;
  icon: string;
}

const principles: Principle[] = [
  { key: 'cleanCode', icon: '</>' },
  { key: 'modularArchitecture', icon: '[]' },
  { key: 'realOptimization', icon: '>>' },
  { key: 'continuousLearning', icon: '++' },
];

const Philosophy = () => {
  const { t } = useTranslation();
  return (
    <section id="philosophy" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {t('philosophy.title')} <span className="gradient-text">{t('philosophy.titleHighlight')}</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                {principle.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">
                {t(`philosophy.principles.${principle.key}.title`)}
              </h3>
              <p className="text-gray-400">
                {t(`philosophy.principles.${principle.key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
