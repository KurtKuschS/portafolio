import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            {t('about.paragraph1')}
          </p>

          <p
            className="text-lg text-gray-400 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }}
          />

          <p className="text-lg text-gray-400 leading-relaxed">
            {t('about.paragraph3')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
