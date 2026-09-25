import { useLanguage } from '@/contexts/LanguageContext';
import { profile, ui } from '@/content';

const Footer = () => {
  const { l } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper-light/45 text-sm pt-8 pb-[calc(var(--dock-height)+2rem)]">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-2 border-t border-paper-light/15 pt-6">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p>{l(ui.footer.builtWith)}</p>
      </div>
    </footer>
  );
};

export default Footer;
