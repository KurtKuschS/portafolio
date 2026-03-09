import { motion } from 'framer-motion';
import SkillRadarChart from '../components/SkillRadarChart';

const skillCategories = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', level: 78 },
      { name: 'Django', level: 76 },
      { name: 'Django REST Framework', level: 72 },
      { name: 'PHP', level: 70 },
      { name: 'Laravel', level: 68 },
    ],
    colorClass: 'from-primary to-accent',
    aggregate: 73,
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 78 },
      { name: 'TypeScript', level: 74 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML', level: 84 },
      { name: 'CSS', level: 76 },
    ],
    colorClass: 'from-secondary to-primary',
    aggregate: 78,
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'PostgreSQL', level: 76 },
      { name: 'MySQL', level: 74 },
      { name: 'Supabase', level: 66 },
    ],
    colorClass: 'from-accent to-secondary',
    aggregate: 72,
  },
  {
    title: 'DevOps / Cloud',
    items: [
      { name: 'Docker', level: 64 },
      { name: 'Render', level: 70 },
      { name: 'Vercel', level: 82 },
    ],
    colorClass: 'from-primary to-secondary',
    aggregate: 72,
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 84 },
      { name: 'Linux', level: 72 },
      { name: 'Postman', level: 78 },
    ],
    colorClass: 'from-accent to-secondary',
    aggregate: 79,
  },
];

const radarData = skillCategories.map((category) => ({
  category: category.title,
  value: category.aggregate,
}));

const Skills = () => {
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
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="mb-10 min-w-0">
          <SkillRadarChart data={radarData} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className={`mb-6 inline-block rounded-lg bg-gradient-to-r px-4 py-2 ${category.colorClass}`}>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.08 }}
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
                        transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
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
