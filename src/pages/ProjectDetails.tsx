import { motion } from 'framer-motion';
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
                <div key={screenshot} className="overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-64 w-full object-cover"
                  />
                </div>
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
      </div>
    </div>
  );
};

export default ProjectDetails;
