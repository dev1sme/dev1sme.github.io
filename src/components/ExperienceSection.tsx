import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { experience, ui } from '@/content';

const ExperienceSection = () => {
  const { l, formatPeriod } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="ground-paper-light py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading section="experience" className="mb-14 lg:mb-20" />

        <ol className="border-t-2 border-ink">
          {experience.map((exp, index) => {
            const startYear = exp.period.start.slice(-4);
            const isCurrent = exp.period.end === null;
            const hasDetails = exp.responsibilities.length > 0 || exp.techStack.length > 0;
            const isOpen = hasDetails && expandedIndex === index;

            return (
              <li
                key={`${l(exp.company)}-${exp.period.start}`}
                className="grid md:grid-cols-[minmax(10rem,14rem)_1fr] gap-x-10 border-b border-line py-8 md:py-10"
              >
                <div className="mb-4 md:mb-0">
                  <p className="ghost-figure text-[4.5rem] md:text-[6.5rem]" aria-hidden>
                    {startYear}
                  </p>
                  <p className="text-sm text-graphite mt-2">{formatPeriod(exp.period, ui.period.present)}</p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => hasDetails && setExpandedIndex(isOpen ? null : index)}
                    aria-expanded={hasDetails ? isOpen : undefined}
                    disabled={!hasDetails}
                    className="group w-full text-left flex items-start justify-between gap-6 disabled:cursor-default"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase leading-none">
                          {l(exp.company)}
                        </h3>
                        {isCurrent && (
                          <span className="kicker bg-ink text-paper-light px-2 py-0.5 text-xs">
                            {l(ui.experience.current)}
                          </span>
                        )}
                      </div>
                      <p className="font-semibold">
                        {l(exp.title)}
                        <span className="text-graphite font-normal"> / {l(exp.location)}</span>
                      </p>
                    </div>
                    {hasDetails && (
                      <span className="shrink-0 border border-ink p-1.5 transition-colors group-hover:bg-ink group-hover:text-paper-light">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    )}
                  </button>

                  {hasDetails && (
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 grid lg:grid-cols-[1fr_16rem] gap-8">
                        <ul className="space-y-2.5 max-w-[62ch]">
                          {exp.responsibilities.map((resp) => (
                            <li key={l(resp)} className="flex gap-3 text-graphite leading-relaxed">
                              <span className="text-ink" aria-hidden>—</span>
                              <span>{l(resp)}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.techStack.length > 0 && (
                          <div className="lg:border-l lg:border-line lg:pl-6">
                            <p className="kicker text-graphite text-xs mb-2">{l(ui.experience.stack)}</p>
                            <p className="font-display text-xl font-bold uppercase leading-snug">
                              {exp.techStack.join(' / ')}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
