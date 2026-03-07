export type ProjectFilter = 'C' | 'React' | 'Systems';

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
    shortDescription: 'Sitio web profesional moderno con animaciones avanzadas y diseño responsive.',
    fullDescription: `Portafolio web profesional desarrollado con las últimas tecnologías frontend, demostrando habilidades en diseño UI/UX y desarrollo moderno.
    
Este proyecto incorpora:
- Arquitectura de componentes escalable
- Animaciones fluidas con Framer Motion
- Diseño responsive mobile-first
- Optimización de rendimiento
- TypeScript para type safety`,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    filters: ['React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'https://placehold.co/1200x720/0a0a0a/818cf8?text=Portfolio+Hero+Scene',
      'https://placehold.co/1200x720/0a0a0a/06b6d4?text=Portfolio+Project+Dashboard',
    ],
    diagram: {
      architecture: ['React UI', 'Modular Components', 'Static Data Layer'],
      dataFlow: [
        'El router carga vistas por demanda con lazy loading.',
        'Las secciones consumen datos tipados desde el data layer.',
        'Framer Motion orquesta transiciones de entrada y estado.',
      ],
    },
    highlights: [
      'Diseño glassmorphism moderno',
      'Animaciones de scroll interactivas',
      'Tiempo de carga optimizado',
      'SEO optimizado',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
