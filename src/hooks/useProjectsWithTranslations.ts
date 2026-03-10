import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { projects as baseProjects } from '@data/projects';
import type { Project } from '@data/projects';

const normalizeAssetPath = (path?: string): string | undefined => {
  if (!path) {
    return path;
  }

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
    return path;
  }

  if (path.startsWith('public/')) {
    return `/${path.slice('public/'.length)}`;
  }

  return `/${path}`;
};

export const useProjectsWithTranslations = (): Project[] => {
  const { t, i18n } = useTranslation();

  return useMemo(() => {
    const projectIds = [
      'git-simulator',
      'portfolio-website',
      'dap-transport-routing-system',
      'lash-kingdom-booking-platform',
      'sales-inventory-admin-system',
    ];

    return projectIds.map((id) => {
      const baseKey = `projectsData.${id}`;
      const staticData = baseProjects.find((project) => project.id === id);
      const screenshots = staticData?.screenshots.map((path) => normalizeAssetPath(path) ?? path) ?? [];

      return {
        id,
        title: t(`${baseKey}.title`),
        shortDescription: t(`${baseKey}.shortDescription`),
        fullDescription: t(`${baseKey}.fullDescription`),
        technologies: t(`${baseKey}.technologies`, { returnObjects: true }) as string[],
        highlights: t(`${baseKey}.highlights`, { returnObjects: true }) as string[],
        diagram: {
          architecture: t(`${baseKey}.diagram.architecture`, { returnObjects: true }) as string[],
          dataFlow: t(`${baseKey}.diagram.dataFlow`, { returnObjects: true }) as string[],
        },
        filters: staticData?.filters ?? [],
        image: normalizeAssetPath(staticData?.image),
        screenshots,
      };
    });
  }, [t, i18n.resolvedLanguage]);
};
