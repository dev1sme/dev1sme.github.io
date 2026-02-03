import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="flex items-center gap-1 p-1 rounded-lg bg-secondary/50 border border-border/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setLanguage('vi')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
          language === 'vi'
            ? 'bg-primary/20 text-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        VI
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary/20 text-primary'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
