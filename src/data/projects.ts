export const PROJECT_FILTERS = ['All', 'C', 'React', 'Systems'] as const;
export type ProjectFilter = Exclude<(typeof PROJECT_FILTERS)[number], 'All'>;

export interface ProjectDiagram {
  architecture: string[];
  dataFlow: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  filters: ProjectFilter[];
  diagram: ProjectDiagram;
  screenshots: string[];
  image?: string;
  github?: string;
  demo?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'git-simulator',
    title: 'Simulador de Git en C',
    shortDescription: 'Implementación de comandos init, add, commit, log y checkout utilizando estructuras de datos y manejo de archivos.',
    fullDescription: `Sistema completo que simula el funcionamiento interno de Git, implementando los comandos fundamentales del sistema de control de versiones.
    
Este proyecto demuestra un profundo entendimiento de:
- Estructuras de datos complejas
- Manejo de archivos en C
- Algoritmos de hash y gestión de estados
- Diseño de sistemas de versionado

El simulador permite crear repositorios, rastrear cambios, realizar commits y navegar entre diferentes versiones del código, replicando el comportamiento core de Git.`,
    technologies: ['C', 'Estructuras de Datos', 'Manejo de Archivos', 'Algoritmos'],
    filters: ['C', 'Systems'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'https://placehold.co/1200x720/0a0a0a/7dd3fc?text=Git+Simulator+Architecture',
      'https://placehold.co/1200x720/0a0a0a/a78bfa?text=Git+Simulator+Console+Flow',
    ],
    diagram: {
      architecture: ['CLI Interface', 'Command Parser', 'File Index', 'Commit Objects'],
      dataFlow: [
        'El usuario ejecuta un comando en la CLI.',
        'El parser interpreta argumentos y valida reglas.',
        'El motor actualiza index y objetos de commit en disco.',
        'El estado del repositorio se refleja en log y checkout.',
      ],
    },
    highlights: [
      'Implementación completa de init, add, commit, log y checkout',
      'Sistema de hash para identificación de commits',
      'Gestión eficiente de memoria',
      'Manejo de archivos binarios y texto',
    ],
  },
  {
    id: 'order-taking-app',
    title: 'Aplicación de Toma de Pedidos',
    shortDescription: 'Sistema para registrar pedidos en terreno para vendedores de una distribuidora de alimentos.',
    fullDescription: `Aplicación móvil/web diseñada para optimizar el proceso de toma de pedidos en terreno para distribuidoras de alimentos.
    
Características principales:
- Interfaz intuitiva para vendedores en terreno
- Catálogo de productos con búsqueda rápida
- Gestión de clientes y ruteros
- Sincronización de datos offline/online
- Generación de reportes y estadísticas

La aplicación mejora significativamente la eficiencia de los vendedores, reduce errores en pedidos y facilita la gestión centralizada de ventas.`,
    technologies: ['JavaScript', 'React', 'Node.js', 'REST API', 'Git'],
    filters: ['React', 'Systems'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'https://placehold.co/1200x720/0a0a0a/60a5fa?text=Order+App+Dashboard',
      'https://placehold.co/1200x720/0a0a0a/22d3ee?text=Order+Sync+Workflow',
    ],
    diagram: {
      architecture: ['Mobile UI', 'REST API', 'Sync Service', 'SQL Database'],
      dataFlow: [
        'El vendedor registra pedidos desde la interfaz mobile.',
        'La app valida stock y cliente localmente para respuesta inmediata.',
        'El servicio de sincronización envía cambios a la API REST.',
        'La base SQL persiste pedidos y publica estado para reporting.',
      ],
    },
    highlights: [
      'Interfaz responsive optimizada para tablets',
      'Modo offline con sincronización automática',
      'Validación de inventarios en tiempo real',
      'Sistema de notificaciones para actualizaciones',
    ],
  },
  {
    id: 'portfolio-website',
    title: 'Portafolio Personal',
    shortDescription: 'SPA profesional para presentar perfil, stack y proyectos con arquitectura modular, SEO técnico y optimización de rendimiento.',
    fullDescription: `Sistema web tipo SPA, diseñado para comunicar experiencia en ingeniería de software mediante una interfaz moderna y mantenible.

Problema que resuelve:
- Centralizar experiencia, stack y evidencia técnica en una plataforma.
- Presentar proyectos con contexto arquitectónico y flujo de funcionamiento.
- Mejorar visibilidad profesional.

Enfoque técnico:
- Arquitectura modular por capas (pages, sections, components, data, constants, config).
- Renderizado optimizado con lazy loading, code splitting y memoización de componentes.
- Experiencia interactiva con animaciones controladas y soporte para reduced motion.
- Integración de contacto con EmailJS y validaciones anti-spam en frontend.`,
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'React Router DOM',
      'Recharts',
      'tsParticles',
      'EmailJS',
    ],
    filters: ['React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'https://placehold.co/1200x720/0a0a0a/818cf8?text=Portfolio+Hero+Scene',
      'https://placehold.co/1200x720/0a0a0a/06b6d4?text=Portfolio+Project+Dashboard',
    ],
    diagram: {
      architecture: [
        'Capa de Presentación (Pages + Sections)',
        'Componentes Reutilizables (UI + Motion)',
        'Capa de Datos Tipada (projects.ts)',
        'Capa de Configuración (env + constants)',
        'Servicios Externos (EmailJS + Vercel Analytics)',
      ],
      dataFlow: [
        'El usuario entra a la SPA y el router carga Home con secciones composables.',
        'En Projects, el sistema aplica filtros tipados y renderiza tarjetas optimizadas.',
        'Al abrir un proyecto, se consulta por id en el data layer y se construye la vista técnica.',
        'En Contact, se validan campos y anti-spam; luego se envía el payload a EmailJS.',
        'Se reportan métricas de uso con Vercel Analytics y Speed Insights.',
      ],
    },
    highlights: [
      'Arquitectura modular escalable con separación clara de responsabilidades',
      'Bundle splitting manual en Vite para mejorar caching y tiempo de carga inicial',
      'ErrorBoundary, lazy loading y fallback UI para mayor resiliencia en producción',
      'Formulario de contacto con validaciones tipadas, honeypot y rate limiting',
      'Accesibilidad aplicada (skip link, labels asociadas, atributos ARIA clave)',
      'SEO técnico completo: Open Graph, Twitter Cards, canonical y JSON-LD',
      'Uso de TypeScript estricto para reducir errores y mejorar mantenibilidad',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
