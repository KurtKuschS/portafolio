import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/20 bg-background/50 p-1">
      <motion.button
        onClick={() => changeLanguage('es')}
        whileTap={{ scale: 0.95 }}
        className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-all ${
          i18n.language === 'es'
            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-sm'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Cambiar a español"
        aria-pressed={i18n.language === 'es'}
      >
        ES
      </motion.button>
      <motion.button
        onClick={() => changeLanguage('en')}
        whileTap={{ scale: 0.95 }}
        className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-all ${
          i18n.language === 'en'
            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-sm'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Switch to English"
        aria-pressed={i18n.language === 'en'}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
