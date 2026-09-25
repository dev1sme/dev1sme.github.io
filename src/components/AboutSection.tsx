import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile, telHref, ui } from '@/content';

const AboutSection = () => {
  const { l } = useLanguage();

  const personalInfo = [
    { label: l(ui.fields.birthDate), value: profile.birthDate },
    { label: l(ui.fields.address), value: l(profile.address) },
    { label: l(ui.fields.email), value: profile.email, href: `mailto:${profile.email}` },
    { label: l(ui.fields.phone), value: profile.phone, href: telHref(profile.phone) },
  ];

  const stats = [
    { value: profile.stats.projectsCompleted, label: l(ui.about.projectsCompleted) },
    { value: profile.stats.countriesStudied, label: l(ui.about.countriesStudied) },
  ];

  return (
    <section id="about" className="ground-paper py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading section="about" className="mb-10" />

          <p className="text-2xl md:text-[1.75rem] font-semibold leading-snug max-w-[34ch] mb-8">
            {l(profile.about.lead)}
          </p>
          <div className="space-y-4 text-graphite leading-relaxed max-w-[62ch]">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={l(paragraph)}>{l(paragraph)}</p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5 lg:mt-24 self-start bg-paper-light border-t-2 border-ink p-6 sm:p-8">
          <p className="kicker text-graphite mb-4">{l(ui.about.profileKicker)}</p>
          <p className="ghost-figure text-[7.5rem] sm:text-[9rem] mb-2">{profile.stats.yearsOfExperience}</p>
          <p className="text-xl font-semibold mb-8">{l(ui.about.yearsCaption)}</p>
          <dl className="border-t border-line">
            {personalInfo.map((info) => (
              <div key={info.label} className="flex justify-between gap-4 py-3 border-b border-line text-sm">
                <dt className="text-graphite">{info.label}</dt>
                <dd className="font-medium text-right">
                  {info.href ? (
                    <a href={info.href} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                      {info.value}
                    </a>
                  ) : (
                    info.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-extrabold leading-none mb-1">{stat.value}</p>
                <p className="text-sm text-graphite">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
