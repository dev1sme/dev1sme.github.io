import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile, telHref, ui } from '@/content';

const ContactSection = () => {
  const { l } = useLanguage();

  const contactInfo = [
    { label: l(ui.fields.phone), value: profile.phone, href: telHref(profile.phone) },
    { label: l(ui.fields.address), value: l(profile.address), href: null },
  ];

  return (
    <section id="contact" className="ground-ink py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading section="contact" className="mb-8" />
        <p className="text-lg text-paper-light/65 leading-relaxed max-w-[52ch] mb-14">
          {l(profile.contact.intro)}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-start gap-2 font-display font-extrabold leading-none break-all mb-14 border-b-4 border-paper-light pb-2 transition-opacity hover:opacity-70"
          style={{ fontSize: 'clamp(2rem, 6.5vw, 5.5rem)' }}
        >
          {profile.email}
          <ArrowUpRight className="shrink-0 w-[0.6em] h-[0.6em]" strokeWidth={2.5} aria-hidden />
        </a>

        <div className="grid md:grid-cols-3 gap-10 border-t border-paper-light/15 pt-8">
          {contactInfo.map((info) => (
            <div key={info.label}>
              <p className="text-sm text-paper-light/50 mb-1">{info.label}</p>
              {info.href ? (
                <a href={info.href} className="text-xl font-semibold hover:opacity-70 transition-opacity">
                  {info.value}
                </a>
              ) : (
                <p className="text-xl font-semibold">{info.value}</p>
              )}
            </div>
          ))}
          <div>
            <p className="text-sm text-paper-light/50 mb-2">{l(ui.fields.social)}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {profile.social.map((social) => (
                <li key={social.label}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="dossier-link text-sm">
                    {social.label} <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
