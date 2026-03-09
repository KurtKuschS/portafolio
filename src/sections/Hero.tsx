import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'));

const Hero = () => {
  const { t } = useTranslation();
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background" />}>
          <AnimatedBackground />
        </Suspense>
        <div className="absolute inset-0 animated-gradient opacity-[0.14]" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-medium mb-4 tracking-wider uppercase"
          >
            {t('hero.role')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Kurt Dereck<br />
            <span className="gradient-text">Kusch Sepúlveda</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {t('hero.degree')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="glow-button px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              {t('hero.viewProjects')}
            </button>

            <a
              href="/cv.pdf"
              download
              className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {t('hero.downloadCV')}
            </a>

            <a
              href="https://github.com/KurtKuschS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary/50 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kurt-dereck-kusch-sep%C3%BAlveda-222bb0129/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-secondary/50 rounded-lg font-semibold hover:bg-secondary/10 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/56942886459"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-emerald-400/50 rounded-lg font-semibold hover:bg-emerald-400/10 transition-colors"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
