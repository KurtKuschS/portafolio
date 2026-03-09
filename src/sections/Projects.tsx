import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '@components/ProjectCard';
import { projects, type ProjectFilter } from '@data/projects';

const projectFilters = ['All', 'C', 'React', 'Systems'] as const;
type DashboardFilter = (typeof projectFilters)[number];

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<DashboardFilter>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter as ProjectFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas en desarrollo de software,
            arquitectura de sistemas y resolución de problemas complejos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileTap={{ scale: 0.96 }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-primary/60 bg-primary/20 text-primary'
                    : 'border-white/15 bg-surface/40 text-gray-300 hover:border-primary/40 hover:text-white'
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => navigate(`/project/${project.id}`)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
