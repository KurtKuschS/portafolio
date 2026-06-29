import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { useReducedMotion } from 'framer-motion';

let engineInitPromise: Promise<void> | null = null;

const AnimatedBackground = () => {
  const [isReady, setIsReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let mounted = true;

    const init = () => {
      if (!engineInitPromise) {
        engineInitPromise = initParticlesEngine(async (engine: Engine) => {
          await loadSlim(engine);
        });
      }
      engineInitPromise.then(() => {
        if (mounted) setIsReady(true);
      });
    };

    // Init only when the browser has spare capacity
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(init, { timeout: 3000 });
      return () => {
        mounted = false;
        window.cancelIdleCallback(id);
      };
    } else {
      const id = setTimeout(init, 2000);
      return () => {
        mounted = false;
        clearTimeout(id);
      };
    }
  }, [reduceMotion]);

  const particleOptions = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: 24,
      detectRetina: false,
      interactivity: {
        events: {
          // No hover effects — scanning particles on every mousemove is expensive
          onHover: { enable: false },
          resize: { enable: true },
        },
      },
      particles: {
        number: {
          value: 15,
          density: { enable: true, area: 800 },
        },
        shape: { type: 'circle' },
        color: { value: ['#6366f1', '#06b6d4', '#8b5cf6'] },
        links: {
          enable: true,
          color: '#6366f1',
          opacity: 0.2,
          distance: 160,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.3,
          outModes: { default: 'out' },
        },
        // Static opacity and size — no per-particle animation loop
        opacity: { value: 0.3 },
        size: { value: { min: 1, max: 2.5 } },
      },
      pauseOnOutsideViewport: true,
    }),
    []
  );

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99, 102, 241, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.18) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />

      {isReady && (
        <Particles
          id="hero-particles"
          className="absolute inset-0"
          options={particleOptions}
          particlesLoaded={particlesLoaded}
        />
      )}
    </div>
  );
};

export default AnimatedBackground;
