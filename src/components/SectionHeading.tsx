import { useLanguage } from '@/contexts/LanguageContext';
import { ui, type SectionId } from '@/content';

interface SectionHeadingProps {
  section: Exclude<SectionId, 'home'>;
  className?: string;
}

const SectionHeading = ({ section, className = '' }: SectionHeadingProps) => {
  const { l } = useLanguage();
  const { label, title } = ui.sections[section];

  return (
    <header className={className}>
      <p className="kicker opacity-60 mb-5">{l(label)}</p>
      {/* Titles may contain "\n" for a deliberate line break */}
      <h2 className="display-title whitespace-pre-line">{l(title ?? label)}</h2>
    </header>
  );
};

export default SectionHeading;
