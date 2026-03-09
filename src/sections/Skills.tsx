import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SkillRadarChart from '@components/SkillRadarChart';
import { SKILL_CATEGORIES, getRadarData } from '@constants/skills';
import { ANIMATION_TIMINGS } from '@constants/animations';

const Skills = () => {
  const { t } = useTranslation();
  const radarData = getRadarData();
  
  // Map category titles to translation keys
  const categoryTranslationMap: Record<string, string> = {
    'Backend': 'skills.categories.backend',
    'Frontend': 'skills.categories.frontend',
    'Bases de Datos': 'skills.categories.databases',
    'DevOps / Cloud': 'skills.categories.devops',
    'Herramientas': 'skills.categories.tools',
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="mb-10 min-w-0">
          <SkillRadarChart data={radarData} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * ANIMATION_TIMINGS.stagger.category }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className={`mb-6 inline-block rounded-lg bg-gradient-to-r px-4 py-2 ${category.colorClass}`}>
                <h3 className="text-xl font-bold text-white">
                  {categoryTranslationMap[category.title] ? t(categoryTranslationMap[category.title]) : category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * ANIMATION_TIMINGS.delay.skillCategory + index * ANIMATION_TIMINGS.delay.skillItem }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-white/10 bg-background/50 p-3"
                  >
                    <div className="mb-2 flex items-center justify-between text-sm text-gray-300">
                      <span>{item.name}</span>
                      <span className="font-semibold text-secondary">{item.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: ANIMATION_TIMINGS.duration.slow, delay: ANIMATION_TIMINGS.delay.skillCategory + index * ANIMATION_TIMINGS.delay.skillCategory }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
