import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { SECTION_IDS, ui } from '@/content';

const Header = () => {
  const { l } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = SECTION_IDS.filter((id) => id !== 'home').map((id) => ({
    label: l(ui.sections[id].label),
    href: `#${id}`,
  }));

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
            <span className="font-black">{ui.brand.strong}</span>
            <span className="font-medium text-paper-light/70">{ui.brand.light}</span>
          </a>
          <span className="hidden sm:block h-5 w-px bg-paper-light/25" aria-hidden />
          <span className="hidden sm:block kicker text-paper-light/60 truncate">
            {l(ui.brand.tagline)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={l(ui.header.menuToggle)}
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
