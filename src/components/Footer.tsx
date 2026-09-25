import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper-light/45 text-sm pt-8 pb-[calc(var(--dock-height)+2rem)]">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-2 border-t border-paper-light/15 pt-6">
        <p>© {currentYear} Lê Tuấn Thông</p>
        <p>{t('Xây bằng React và Tailwind CSS', 'Built with React and Tailwind CSS')}</p>
      </div>
    </footer>
  );
};

export default Footer;
