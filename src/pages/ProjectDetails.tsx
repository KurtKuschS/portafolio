import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProjectsWithTranslations } from '@hooks/useProjectsWithTranslations';
import ArchitectureDiagram from '@components/ArchitectureDiagram';

const ProjectDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useProjectsWithTranslations();
  const project = id ? projects.find(p => p.id === id) : undefined;
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedScreenshot(null);
      }
    };

    if (selectedScreenshot) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedScreenshot]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors"
          >
            {t('projectDetails.backToProjects')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 px-4 py-2 glass-effect rounded-lg hover:bg-white/10 transition-colors"
        >
          ← {t('projectDetails.backToProjects')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {project.title}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
            {project.fullDescription}
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('projectDetails.technologies')}</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.highlights && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('projectDetails.keyHighlights')}</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-secondary mr-3 mt-1">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('projectDetails.screenshots')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.button
                  key={screenshot}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedScreenshot(screenshot)}
                  className="overflow-hidden rounded-xl border border-white/10 text-left transition-colors hover:border-primary/50"
                  aria-label={`${project.title} screenshot ${index + 1}`}
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-64 w-full cursor-zoom-in object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">{t('projectDetails.architecture')} y {t('projectDetails.dataFlow')}</h2>
            <ArchitectureDiagram
              architecture={project.diagram.architecture}
              dataFlow={project.diagram.dataFlow}
            />
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedScreenshot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenshot(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            >
              <motion.button
                type="button"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedScreenshot(null)}
                className="absolute right-5 top-5 rounded-md border border-white/30 bg-black/40 px-3 py-1.5 text-sm text-white hover:bg-black/60"
                aria-label="Close image preview"
              >
                Close
              </motion.button>

              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                onClick={(event) => event.stopPropagation()}
                src={selectedScreenshot}
                alt={`${project.title} full preview`}
                className="max-h-[90vh] w-auto max-w-[95vw] rounded-xl border border-white/20 object-contain shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectDetails;
