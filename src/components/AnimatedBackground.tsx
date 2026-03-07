import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { motion, useReducedMotion } from 'framer-motion';

let engineInitPromise: Promise<void> | null = null;

const AnimatedBackground = () => {
  const [isReady, setIsReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let mounted = true;

    if (!engineInitPromise) {
      engineInitPromise = initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      });
    }

    engineInitPromise.then(() => {
      if (mounted) {
        setIsReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const particleOptions = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: reduceMotion ? 24 : 60,
      detectRetina: true,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: !reduceMotion,
            mode: 'connect',
          },
          resize: true,
        },
        modes: {
          connect: {
            distance: 130,
            radius: 150,
            links: {
              opacity: 0.24,
            },
          },
          grab: {
            distance: 100,
            links: {
              opacity: 0.15,
            },
          },
        },
      },
      particles: {
        number: {
          value: 52,
          density: { enable: true, area: 900 },
        },
        shape: {
          type: 'circle',
        },
        shadow: {
          enable: !reduceMotion,
          color: '#6366f1',
          blur: 8,
        },
        color: {
          value: ['#6366f1', '#06b6d4', '#8b5cf6'],
        },
        links: {
          enable: true,
          color: '#6366f1',
          opacity: 0.22,
          distance: 150,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.03,
          },
        },
        move: {
          enable: true,
          speed: reduceMotion ? 0.2 : 0.45,
          random: false,
          outModes: { default: 'out' },
        },
        opacity: {
          value: { min: 0.12, max: 0.4 },
          animation: {
            enable: !reduceMotion,
            speed: 0.8,
          },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: !reduceMotion,
            speed: 2,
            minimumValue: 0.3,
          },
        },
      },
      pauseOnOutsideViewport: true,
    }),
    [reduceMotion]
  );

  const particlesLoaded = useCallback(async () => {
    return;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
        animate={reduceMotion ? undefined : { backgroundPosition: ['0px 0px', '52px 52px'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
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
