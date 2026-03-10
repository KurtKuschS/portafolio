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
      'public/projects/portafolio/hero.png',
      'public/projects/portafolio/project.png',
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
  {
    id: 'dap-transport-routing-system',
    title: 'Sistema de Gestion de Transporte y Ruteo de Turnos DAP',
    shortDescription:
      'Aplicacion web interna en Laravel para gestionar turnos de traslado, optimizar rutas y generar reportes operativos con visualizacion en mapa.',
    fullDescription: `Aplicacion web interna desarrollada con Laravel para gestionar empleados, direcciones de recogida, lugares comunes y turnos de traslado hacia aeropuerto.

Problema que resuelve:
- Coordinacion compleja de traslados de personal con multiples puntos de recogida y restricciones de llegada.
- Reduccion de errores de planificacion manual y aumento de trazabilidad operativa.
- Estandarizacion de la salida operativa para ejecucion en terreno.

Enfoque tecnico:
- Asignacion estructurada de empleados y direcciones por turno.
- Optimizacion del orden de recogida con distancias reales de red vial.
- Calculo automatico de horarios de paso para cumplir hora objetivo de llegada.
- Exportacion de planificacion en Excel, PDF y PNG, con soporte de visualizacion geografica en mapa.`,
    technologies: [
      'PHP 8.2',
      'Laravel 12',
      'Eloquent ORM',
      'Blade',
      'MySQL/PostgreSQL',
      'JavaScript',
      'Alpine.js',
      'Tailwind CSS',
      'Vite',
      'Leaflet',
      'OpenStreetMap',
      'OSRM',
      'Laravel Excel',
      'Dompdf',
      'Browsershot',
      'Docker',
      'Nginx',
      'PHP-FPM',
    ],
    filters: ['Systems'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'public/projects/dap/map.png',
      'public/projects/dap/dashboard.png',
    ],
    diagram: {
      architecture: [
        'Presentacion: Blade + Componentes UI + Mapa Leaflet',
        'Aplicacion: Controladores (Empleado, Direccion, LugarComun, Turno)',
        'Dominio: RutaOptimizerService + ScheduleCalculatorService',
        'Routing: OSRM Table/Route + Heuristicas de optimizacion',
        'Datos: Modelo relacional (empleados, turnos, rutas, ruta_puntos)',
        'Exportacion: Excel/PDF/PNG para operacion',
      ],
      dataFlow: [
        'El usuario registra o importa empleados y direcciones georreferenciadas.',
        'Define turno con fecha, hora objetivo de llegada y parametros de intervalo.',
        'Selecciona personal participante y ejecuta optimizacion de ruta.',
        'El sistema consulta OSRM, calcula orden de recogida y persiste ruta + ruta_puntos.',
        'Se calculan horarios estimados por punto en funcion de la llegada objetivo.',
        'El usuario visualiza mapa y planilla, ajusta orden manual si lo requiere.',
        'Al guardar ajustes se recalculan horarios y se exporta en Excel, PDF o PNG.',
      ],
    },
    highlights: [
      'Motor de optimizacion custom (TieredNearestNeighborOptimizer) con refinamiento 2-opt y or-opt',
      'Matriz de distancias con OSRM y fallback automatico a Haversine ante fallos de API',
      'Persistencia de geometria por tramo en ruta_puntos.geometry para renderizado inmediato en mapa',
      'Recalculo automatico de horarios al optimizar o reordenar manualmente puntos',
      'Modelo de turnos flexible con intervalos fijo/dinamico segun distancia',
      'Manejo de lugares comunes sin perder coherencia temporal de la ruta',
      'Pipeline operativo completo: alta/import, optimizacion, visualizacion y exportacion',
      'Arquitectura MVC desacoplada y preparada para evolucion funcional',
    ],
  },
  {
    id: 'lash-kingdom-booking-platform',
    title: 'Lash Kingdom - Plataforma de Reservas para Salon de Belleza',
    shortDescription:
      'Plataforma web en Django para reservas online, gestion operativa y control de disponibilidad con proteccion contra dobles reservas.',
    fullDescription: `Lash Kingdom es una plataforma web de gestion de citas desarrollada con Django para un salon especializado en extensiones de pestanas y tratamientos de belleza.

Problema que resuelve:
- Elimina la gestion manual por mensajeria o llamadas que genera dobles reservas y perdida de trazabilidad.
- Permite que clientas reserven de forma autonoma en tiempo real.
- Entrega visibilidad operativa completa del estado de cada cita.
- Garantiza a nivel de base de datos que un horario no puede reservarse dos veces.

Enfoque tecnico:
- Control de concurrencia con transacciones atomicas y select_for_update().
- Integridad de datos con UniqueConstraint en reservas y slots de disponibilidad.
- Seguridad transversal con middleware de rate limiting y security headers.
- Operacion productiva con configuracion multi-entorno (SQLite en desarrollo y PostgreSQL en produccion).`,
    technologies: [
      'Python 3',
      'Django 5.2',
      'Django ORM',
      'PostgreSQL',
      'SQLite',
      'Tailwind CSS',
      'Gunicorn',
      'WhiteNoise',
      'Pillow',
      'python-dotenv',
      'Docker',
      'Render',
    ],
    filters: ['Systems'],
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'public/projects/lash/hero.png',
      'public/projects/lash/reserva.png',
    ],
    diagram: {
      architecture: [
        'core: configuracion global, middleware de seguridad y ruteo raiz',
        'accounts: autenticacion, registro y ClientProfile',
        'services: catalogo de servicios y AvailabilitySlot',
        'bookings: creacion de Booking y dashboard administrativo',
        'pages: contenido publico editable (sobre nosotros y galeria)',
        'ORM Django: acceso exclusivo a datos con modelo relacional',
      ],
      dataFlow: [
        'La clienta se registra y se crea su ClientProfile asociado al usuario.',
        'Selecciona servicio, fecha y consulta slots activos no reservados.',
        'Al confirmar, el sistema abre transaction.atomic() y bloquea slot con select_for_update().',
        'Si el slot sigue libre, se persiste Booking en estado pending; si no, se informa conflicto.',
        'La administracion gestiona estados (pending, confirmed, completed, cancelled).',
        'Middlewares aplican rate limit, security headers y auditoria de eventos criticos.',
      ],
    },
    highlights: [
      'Control de concurrencia con SELECT FOR UPDATE para eliminar race conditions',
      'UniqueConstraint en Booking y AvailabilitySlot para evitar dobles reservas en BD',
      'Rate limiting por IP en login, registro y creacion de reservas con respuesta HTTP 429',
      'Middleware de seguridad con HSTS, CSP, X-Frame-Options y X-Content-Type-Options',
      'Logging estructurado de eventos criticos (registro, reserva, limite excedido, conflictos)',
      'Configuracion production-ready con DEBUG=False, SECRET_KEY por entorno y ALLOWED_HOSTS dinamico',
      'Arquitectura modular por apps de dominio sin dependencias circulares',
      'Despliegue containerizado con Docker + Render para entorno estable de produccion',
    ],
  },
  {
    id: 'sales-inventory-admin-system',
    title: 'Sistema Administrativo de Ventas e Inventario',
    shortDescription:
      'Sistema web empresarial para gestionar inventario, ventas, entradas de proveedores, clientes y reportes con auditoria y control por roles.',
    fullDescription: `Sistema web de administracion empresarial desarrollado como proyecto de tesis universitaria.

Problema que resuelve:
- Reemplaza gestion manual en hojas de calculo con una plataforma centralizada y multiusuario.
- Evita inconsistencias de stock y falta de trazabilidad en operaciones comerciales.
- Provee control de acceso por roles, integridad de datos y auditoria transversal.

Enfoque tecnico:
- Gestion integral del ciclo operativo: productos, pedidos, entradas, clientes y reportes.
- Operaciones criticas en transacciones atomicas para preservar consistencia del inventario.
- Endpoint de reportes con filtros dinamicos y joins complejos para analisis comercial.
- Hardening de seguridad HTTP y registro automatico de actividad por usuario y modelo.`,
    technologies: [
      'PHP 8.x',
      'Laravel 11',
      'Eloquent ORM',
      'MySQL',
      'Blade',
      'Tailwind CSS',
      'Vite',
      'JavaScript',
      'Spatie Laravel Permission',
      'bepsvpt/secure-headers',
      'SweetAlert2',
      'Font Awesome',
      'Carbon',
    ],
    filters: ['Systems'],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fm=webp&fit=crop&w=1100&q=72',
    screenshots: [
      'public/projects/kenopet/dashboard.png',
      'public/projects/kenopet/pedido.png',
    ],
    diagram: {
      architecture: [
        'Modelos Eloquent: User, Producto, Categoria, Marca, Cliente, Pedido, Entrada, HistorialActividad',
        'Controladores por modulo: productos, pedidos, entradas, reportes, usuarios y roles',
        'Vistas Blade por dominio con layout compartido para UI consistente',
        'Autorizacion RBAC con middleware auth + Spatie Laravel Permission',
        'Capa transversal de auditoria con Trait RegistraActividad sobre eventos Eloquent',
        'Capa de seguridad HTTP con secure-headers alineada a OWASP',
      ],
      dataFlow: [
        'El usuario inicia sesion y el sistema habilita acciones segun rol (Admin, Gestor, Vendedor).',
        'Desde dashboard se consumen indicadores de ventas, clientes, pedidos y notificaciones.',
        'Al crear pedido, se agregan productos y cantidades; una transaccion actualiza stock y totales con IVA.',
        'Al registrar entrada, se asocia proveedor-producto y se actualiza inventario con trazabilidad.',
        'El modulo de reportes ejecuta consultas con joins y filtros por fecha, marca y categoria.',
        'Las vistas consumen endpoint JSON para analitica dinamica de ventas por producto.',
        'Cada operacion CRUD dispara auditoria automatica con usuario, IP y cambios previos/nuevos.',
      ],
    },
    highlights: [
      'Trait reutilizable RegistraActividad para auditoria automatica (created, updated, deleted)',
      'RBAC con tres niveles (Admin, Gestor, Vendedor) y permisos granulares por accion',
      'DB::transaction() en creacion de pedidos para atomicidad de stock y totales',
      'Relacion M:N Pedido-Producto con pivote pedido_producto (cantidad, regalo)',
      'Endpoint JSON /reportes/ventas-productos-data con joins, filtros condicionales y agrupacion',
      'Listados con paginacion y filtros combinados sin recarga completa de pagina',
      'Hardening HTTP con CSP, HSTS, X-Frame-Options y X-Content-Type-Options',
      'Arquitectura MVC escalable con separacion clara de responsabilidades',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
