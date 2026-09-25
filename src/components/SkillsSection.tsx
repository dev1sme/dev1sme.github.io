import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { skills, ui } from '@/content';

const SkillsSection = () => {
  const { l } = useLanguage();

  return (
    <section id="skills" className="ground-ink py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading section="skills" className="mb-14 lg:mb-20" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {skills.categories.map((category) => (
            <div key={l(category.title)}>
              <h3 className="font-display text-2xl font-extrabold uppercase border-t-2 border-paper-light pt-3 mb-4">
                {l(category.title)}
              </h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={l(skill.name)} className="py-2.5 border-b border-paper-light/15">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <span className="text-paper-light/85">{l(skill.name)}</span>
                      <span className="font-display text-lg font-bold tabular-nums text-paper-light/60">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-0.5 bg-paper-light/15" aria-hidden>
                      <div className="h-full bg-paper-light" style={{ width: `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-paper-light/15 pt-8 grid md:grid-cols-[14rem_1fr] gap-4">
          <p className="text-paper-light/60">{l(ui.skills.others)}</p>
          <p className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight">
            {skills.others.join(' / ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
