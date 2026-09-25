import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('Giới thiệu', 'About'), href: '#about' },
    { label: t('Kinh nghiệm', 'Experience'), href: '#experience' },
    { label: t('Kỹ năng', 'Skills'), href: '#skills' },
    { label: t('Học vấn', 'Education'), href: '#education' },
    { label: t('Dự án', 'Projects'), href: '#projects' },
    { label: t('Liên hệ', 'Contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md text-paper-light">
      <div className="container mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4 border-b border-paper-light/15">
        <div className="flex items-center gap-4 min-w-0">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="font-display text-2xl leading-none tracking-[-0.01em] uppercase"
          >
            <span className="font-black">Dev1</span>
            <span className="font-medium text-paper-light/70">sme</span>
          </a>
          <span className="hidden sm:block h-5 w-px bg-paper-light/25" aria-hidden />
          <span className="hidden sm:block kicker text-paper-light/60 truncate">
            {t('Hồ sơ kỹ sư', 'Engineer profile')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t('Mở menu', 'Toggle menu')}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop section nav */}
      <nav className="hidden lg:block border-b border-paper-light/15">
        <ul className="container mx-auto flex justify-center gap-10 h-10 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="kicker text-paper-light/70 hover:text-paper-light transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile section nav */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden border-b border-paper-light/15 bg-black">
          <ul className="container mx-auto px-4 sm:px-6 py-2">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-paper-light/10 last:border-0">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block py-3 font-display text-2xl font-bold uppercase"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
