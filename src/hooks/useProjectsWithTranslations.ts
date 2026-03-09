import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project, ProjectFilter } from '@data/projects';

export const useProjectsWithTranslations = (): Project[] => {
  const { t, i18n } = useTranslation();

  return useMemo(() => {
    const projectIds = [
      'git-simulator',
      'order-taking-app',
      'portfolio-website',
      'dap-transport-routing-system',
      'lash-kingdom-booking-platform',
      'sales-inventory-admin-system',
    ];

    const projectsData: Record<string, { filters: ProjectFilter[]; image: string; screenshots: string[] }> = {
      'git-simulator': {
        filters: ['C', 'Systems'],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fm=webp&fit=crop&w=1100&q=72',
        screenshots: [
          'https://placehold.co/1200x720/0a0a0a/7dd3fc?text=Git+Simulator+Architecture',
          'https://placehold.co/1200x720/0a0a0a/a78bfa?text=Git+Simulator+Console+Flow',
        ],
      },
      'order-taking-app': {
        filters: ['React', 'Systems'],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fm=webp&fit=crop&w=1100&q=72',
        screenshots: [
          'https://placehold.co/1200x720/0a0a0a/60a5fa?text=Order+App+Dashboard',
          'https://placehold.co/1200x720/0a0a0a/22d3ee?text=Order+Sync+Workflow',
        ],
      },
      'portfolio-website': {
        filters: ['React'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fm=webp&fit=crop&w=1100&q=72',
        screenshots: [
          'https://placehold.co/1200x720/0a0a0a/818cf8?text=Portfolio+Hero+Scene',
          'https://placehold.co/1200x720/0a0a0a/06b6d4?text=Portfolio+Project+Dashboard',
        ],
      },
      'dap-transport-routing-system': {
        filters: ['Systems'],
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fm=webp&fit=crop&w=1100&q=72',
        screenshots: [
          'https://placehold.co/1200x720/0a0a0a/22d3ee?text=DAP+Routing+Dashboard',
          'https://placehold.co/1200x720/0a0a0a/6366f1?text=DAP+Route+Map+And+Schedule',
        ],
      },
      'lash-kingdom-booking-platform': {
        filters: ['Systems'],
        image: 'https://images.unsplash.com/photo-1522337094846-8a818eb186f3?auto=format&fm=webp&fit=crop&w=1100&q=72',
        screenshots: [
          'https://placehold.co/1200x720/0a0a0a/f472b6?text=Lash+Kingdom+Booking+Flow',
          'https://placehold.co/1200x720/0a0a0a/ec4899?text=Lash+Kingdom+Admin+Dashboard',
        ],
      },
      'sales-inventory-admin-system': {
        filters: ['Systems'],
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fm=webp&fit=crop&w=1100&q=72',
        screenshots: [
          'https://placehold.co/1200x720/0a0a0a/f59e0b?text=Sales+Inventory+Dashboard',
          'https://placehold.co/1200x720/0a0a0a/84cc16?text=Orders+And+Reports+Module',
        ],
      },
    };

    return projectIds.map((id) => {
      const baseKey = `projectsData.${id}`;
      const staticData = projectsData[id];

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
        filters: staticData.filters,
        image: staticData.image,
        screenshots: staticData.screenshots,
      };
    });
  }, [t, i18n.resolvedLanguage]);
};
