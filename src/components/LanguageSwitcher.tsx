import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const options = [
    { code: 'vi' as const, label: 'VI', name: 'Tiếng Việt' },
    { code: 'en' as const, label: 'EN', name: 'English' },
  ];

  return (
    <div className="flex border border-paper-light/30" role="group" aria-label="Language">
      {options.map((option) => (
        <button
          key={option.code}
          onClick={() => setLanguage(option.code)}
          aria-pressed={language === option.code}
          title={option.name}
          className={`px-3 py-1.5 font-display text-sm font-bold tracking-[0.1em] transition-colors ${
            language === option.code
              ? 'bg-paper-light text-ink'
              : 'text-paper-light/60 hover:text-paper-light'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
