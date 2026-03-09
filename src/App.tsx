import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import ErrorBoundary from '@components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

function App() {
  const cursorX = useMotionValue(-128);
  const cursorY = useMotionValue(-128);
  const glowX = useSpring(cursorX, { stiffness: 280, damping: 36, mass: 0.55 });
  const glowY = useSpring(cursorY, { stiffness: 280, damping: 36, mass: 0.55 });

  useEffect(() => {
    let rafId: number | null = null;
    let nextX = -128;
    let nextY = -128;

    const handlePointerMove = (event: PointerEvent) => {
      nextX = event.clientX - 128;
      nextY = event.clientY - 128;

      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        cursorX.set(nextX);
        cursorY.set(nextY);
        rafId = null;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-10 hidden h-64 w-64 rounded-full bg-primary/15 blur-3xl md:block"
        style={{ x: glowX, y: glowY }}
      />

      <motion.a
        href="https://wa.me/56942886459"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.35 }}
        className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(16,185,129,0.45)] backdrop-blur-lg sm:bottom-7 sm:right-7"
      >
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />
          <svg className="relative h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.64a11.85 11.85 0 0 0 5.79 1.48h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.46Zm-8.44 18.35h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.97 1-3.64-.24-.38a9.87 9.87 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7 2.9a9.85 9.85 0 0 1 2.9 7c0 5.47-4.46 9.93-9.92 9.93Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
          </svg>
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>

      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-background text-gray-300">
            Cargando experiencia...
          </div>
        }
      >
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
