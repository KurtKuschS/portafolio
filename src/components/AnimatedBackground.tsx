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

    // Defer until the browser is idle so the initial paint isn't blocked
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(init, { timeout: 2500 });
      return () => {
        mounted = false;
        window.cancelIdleCallback(id);
      };
    } else {
      const id = setTimeout(init, 1800);
      return () => {
        mounted = false;
        clearTimeout(id);
      };
    }
  }, []);

  const particleOptions = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: reduceMotion ? 20 : 40,
      detectRetina: false,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: !reduceMotion, mode: 'connect' },
          resize: { enable: true },
        },
        modes: {
          connect: {
            distance: 130,
            radius: 150,
            links: { opacity: 0.24 },
          },
        },
      },
      particles: {
        number: {
          value: 28,
          density: { enable: true, area: 900 },
        },
        shape: { type: 'circle' },
        color: { value: ['#6366f1', '#06b6d4', '#8b5cf6'] },
        links: {
          enable: true,
          color: '#6366f1',
          opacity: 0.22,
          distance: 150,
          width: 1,
        },
        move: {
          enable: true,
          speed: reduceMotion ? 0.2 : 0.4,
          random: false,
          outModes: { default: 'out' },
        },
        opacity: { value: { min: 0.12, max: 0.4 } },
        size: { value: { min: 1, max: 3 } },
      },
      pauseOnOutsideViewport: true,
    }),
    [reduceMotion]
  );

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static grid — backgroundPosition animation was triggering a full repaint every frame */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/18 via-transparent to-background" />

      {isReady && (
        <Particles
          id="hero-tech-background"
          className="absolute inset-0"
          options={particleOptions}
          particlesLoaded={particlesLoaded}
        />
      )}
    </div>
  );
};

export default AnimatedBackground;
