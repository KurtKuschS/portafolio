# Portafolio Profesional - Kurt Dereck Kusch Sepulveda

Portafolio moderno desarrollado con React, TypeScript y Vite, enfocado en experiencia interactiva, rendimiento y arquitectura modular.

## Demo

- Desarrollo local: `http://localhost:5173`

## Stack Tecnologico

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- tsParticles (fondo interactivo)
- Recharts (visualizacion de skills)

## Caracteristicas

- Tema oscuro elegante con estilo glassmorphism
- Hero con fondo tecnologico animado
- Cursor glow interactivo
- Dashboard de proyectos con filtros y animaciones
- Seccion de skills con Radar Chart y barras animadas
- Timeline academico y formulario de contacto
- Pagina de detalle por proyecto con diagrama de arquitectura y flujo de datos
- Boton flotante de WhatsApp
- Lazy loading de rutas para optimizar carga inicial

## Estructura del Proyecto

```text
src/
  components/
    AnimatedBackground.tsx
    ArchitectureDiagram.tsx
    Footer.tsx
    Navbar.tsx
    ProjectCard.tsx
    SkillRadarChart.tsx
    TechBadge.tsx
  data/
    projects.ts
  hooks/
    useScrollAnimation.ts
  pages/
    Home.tsx
    ProjectDetails.tsx
  sections/
    About.tsx
    Contact.tsx
    Hero.tsx
    Philosophy.tsx
    Projects.tsx
    Skills.tsx
    Timeline.tsx
  App.tsx
  main.tsx
```

## Instalacion y Ejecucion

```bash
npm install
npm run dev
```

## Scripts Disponibles

- `npm run dev`: inicia servidor de desarrollo
- `npm run build`: compila TypeScript y genera build de produccion
- `npm run preview`: previsualiza build local
- `npm run lint`: ejecuta ESLint

## Formulario de Contacto con EmailJS

El formulario de contacto puede enviar mensajes reales usando EmailJS.

### 1. Instalar dependencias

Ya incluida en el proyecto:

- `@emailjs/browser`

### 2. Configurar variables de entorno

Crea tu archivo `.env` tomando como base `.env.example`:

```bash
cp .env.example .env
```

Completa con tus valores:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

### 3. Reiniciar entorno de desarrollo

```bash
npm run dev
```

Si las variables no están definidas, el formulario mostrará un mensaje de configuración pendiente.

## Deploy Automatico en Vercel

Este repositorio incluye workflow de GitHub Actions en:

- `.github/workflows/vercel-deploy.yml`

Se ejecuta automaticamente en cada push a `main` y publica en Vercel (produccion).

### 1. Crear proyecto en Vercel

- Importa el repo `KurtKuschS/portafolio` en Vercel.

### 2. Configurar secretos en GitHub

En `GitHub > Settings > Secrets and variables > Actions`, crea:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Para obtener los IDs puedes usar:

```bash
npx vercel login
npx vercel link
cat .vercel/project.json
```

### 3. Activar deploy

- Haz push a `main`.
- GitHub Actions ejecutara build y deploy automaticamente en Vercel.

## Secciones del Portafolio

- `Hero`: presentacion principal con CTA y fondo neural interactivo
- `About`: resumen profesional y proyeccion
- `Skills`: visualizacion avanzada de stack tecnico
- `Philosophy`: principios de ingenieria y desarrollo
- `Projects`: tarjetas interactivas con filtros por tecnologia
- `Timeline`: hitos academicos
- `Contact`: enlaces, formulario y acceso rapido a WhatsApp

## Enlaces Profesionales

- GitHub: `https://github.com/KurtKuschS`
- LinkedIn: `https://www.linkedin.com/in/kurt-dereck-kusch-sep%C3%BAlveda-222bb0129/`
- Email: `kurt.kusch@gmail.com`
- WhatsApp: `https://wa.me/56942886459`

## Performance y UX

- Rutas cargadas con `React.lazy` y `Suspense`
- Cursor glow desacoplado de re-render global
- Fondo de particulas optimizado para interaccion suave
- Soporte para `prefers-reduced-motion`

## Roadmap Propuesto

- Integrar backend para formulario de contacto (EmailJS/Resend)
- Agregar modo bilingue (ES/EN)
- Incluir pruebas E2E para flujo de navegacion

## Autor

Kurt Dereck Kusch Sepulveda
