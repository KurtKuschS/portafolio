import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '@components/ProjectCard';
import { PROJECT_FILTERS, type ProjectFilter } from '@data/projects';
import { useProjectsWithTranslations } from '@hooks/useProjectsWithTranslations';

type DashboardFilter = (typeof PROJECT_FILTERS)[number];

const Projects = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
    const projects = useProjectsWithTranslations();
  const [activeFilter, setActiveFilter] = useState<DashboardFilter>('All');
  const [itemsPerView, setItemsPerView] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  // Map filter values to translation keys
  const filterTranslationMap: Record<string, string> = {
    'All': 'projects.filters.all',
    'C': 'projects.filters.c',
    'React': 'projects.filters.react',
    'Systems': 'projects.filters.systems',
  };

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 768) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.filters.includes(activeFilter as ProjectFilter));
  }, [activeFilter, projects]);

  useEffect(() => {
    setStartIndex(0);
  }, [activeFilter, itemsPerView]);

  const maxStartIndex = Math.max(0, filteredProjects.length - itemsPerView);
  const canSlide = filteredProjects.length > itemsPerView;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

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
            {t('projects.title')} <span className="gradient-text">{t('projects.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {PROJECT_FILTERS.map((filter) => {
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
                {filterTranslationMap[filter] ? t(filterTranslationMap[filter]) : filter}
              </motion.button>
            );
          })}
        </motion.div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Mostrando {Math.min(itemsPerView, filteredProjects.length)} de {filteredProjects.length} proyectos
          </p>

          {canSlide && (
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Ver proyectos anteriores"
                className="rounded-lg border border-white/20 bg-surface/40 px-3 py-2 text-sm text-white transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex >= maxStartIndex}
                aria-label="Ver proyectos siguientes"
                className="rounded-lg border border-white/20 bg-surface/40 px-3 py-2 text-sm text-white transition-colors hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                →
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${(startIndex * 100) / itemsPerView}%` }}
            transition={{ type: 'spring', stiffness: 260, damping: 32 }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
                className="px-2"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => navigate(`/project/${project.id}`)}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {canSlide && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxStartIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                aria-label={`Ir al grupo ${idx + 1} de proyectos`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === startIndex ? 'w-8 bg-primary' : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
