import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SECTION_IDS, ui, type SectionId } from '@/content';

const BottomDock = () => {
  const { l } = useLanguage();
  const [current, setCurrent] = useState<SectionId>('home');

  useEffect(() => {
    // A section counts as current once it crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id as SectionId);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const atTop = current === 'home';
  const position = SECTION_IDS.indexOf(current) + 1;

  return (
    <nav
      aria-label={l(ui.dock.ariaLabel)}
      className="fixed bottom-0 inset-x-0 z-40 h-[var(--dock-height)] bg-black/85 backdrop-blur-md text-paper-light border-t border-paper-light/15"
    >
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => scrollTo(atTop ? 'about' : 'home')}
          className="kicker flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          {l(atTop ? ui.dock.scrollDown : ui.dock.backToTop)}
          {atTop ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
        </button>

        <p className="hidden sm:block kicker text-paper-light/50" aria-live="polite">
          <span className="tabular-nums">
            {position}/{SECTION_IDS.length}
          </span>
          <span className="ml-3 text-paper-light/80">{l(ui.sections[current].label)}</span>
        </p>

        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className="dossier-link text-sm"
        >
          {l(ui.dock.contact)} <ArrowUpRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
};

export default BottomDock;
