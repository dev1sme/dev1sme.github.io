import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { education, ui } from '@/content';

const EducationSection = () => {
  const { l, formatPeriod } = useLanguage();

  return (
    <section id="education" className="ground-paper py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading section="education" className="mb-14 lg:mb-20" />

        <ol className="border-t-2 border-ink">
          {education.map((edu) => {
            const [score, scale] = edu.gpa?.split('/') ?? [];

            return (
              <li
                key={`${l(edu.school)}-${edu.period.start}`}
                className="grid gap-y-4 gap-x-10 border-b border-line py-8 md:grid-cols-[10rem_1fr] lg:grid-cols-[10rem_1fr_1fr_9rem]"
              >
                <p className="text-sm text-graphite md:pt-1.5">{formatPeriod(edu.period, ui.period.present)}</p>

                <div>
                  <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] mb-2">
                    {l(edu.school)}
                  </h3>
                  <p className="text-graphite">{l(edu.location)}</p>
                </div>

                <div className="md:col-start-2 lg:col-start-auto">
                  <p className="font-semibold">{l(edu.degree)}</p>
                  <p className="text-graphite mb-3">{l(edu.major)}</p>
                  <p className="text-sm text-graphite leading-relaxed max-w-[52ch]">{l(edu.description)}</p>
                </div>

                {edu.gpa && (
                  <p className="md:col-start-2 lg:col-start-auto lg:text-right">
                    <span className="ghost-figure text-6xl">{score}</span>
                    {scale && <span className="font-display text-lg font-bold text-graphite">/{scale}</span>}
                    <span className="block text-xs text-graphite mt-1">{l(ui.education.gpa)}</span>
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default EducationSection;
