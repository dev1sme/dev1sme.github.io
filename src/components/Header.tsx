import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { SECTION_IDS, ui } from '@/content';

// Brand row + nav row; on xl the nav moves inline and the header is one row.
// Heights must match --header-h in index.css.
const Header = () => {
  const { l } = useLanguage();

  const navItems = SECTION_IDS.filter((id) => id !== 'home').map((id) => ({
    label: l(ui.sections[id].label),
    href: `#${id}`,
  }));

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md text-paper-light border-b border-paper-light/15">
      <div className="container mx-auto px-4 sm:px-6 flex flex-wrap xl:flex-nowrap items-center">
        <div className="flex items-center gap-4 min-w-0 h-14 md:h-[4.25rem] xl:h-[4.75rem]">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="font-display text-2xl leading-none tracking-[-0.01em] uppercase"
          >
            <span className="font-black">{ui.brand.strong}</span>
            <span className="font-medium text-paper-light/70">{ui.brand.light}</span>
          </a>
          <span className="hidden sm:block h-5 w-px bg-paper-light/25" aria-hidden />
          <span className="hidden sm:block kicker text-paper-light/60 truncate">{l(ui.brand.tagline)}</span>
        </div>

        <div className="ml-auto xl:order-last xl:ml-10">
          <LanguageSwitcher />
        </div>

        <nav className="order-last xl:order-none w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] xl:w-auto xl:ml-auto -mx-4 px-4 sm:-mx-6 sm:px-6 xl:mx-0 xl:px-0 border-t border-paper-light/15 xl:border-0">
          <ul className="flex md:justify-center gap-7 xl:gap-8 h-10 xl:h-auto items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(90deg,#000_82%,transparent)] md:[mask-image:none]">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="kicker text-[0.8125rem] text-paper-light/70 hover:text-paper-light transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
