import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile, telHref, ui } from '@/content';
import portrait from '@/assets/portrait.jpg';

// Layout and photo treatment live in index.css (.hero-*): below 640px the
// portrait is a banner above the copy, from 640px up it sits behind the copy
// on the right and fades into the black ground.
const HeroSection = () => {
  const { l } = useLanguage();

  // "Lê Tuấn Thông" -> ["Lê Tuấn", "Thông."]
  const words = profile.name.split(' ');
  const nameLines = [words.slice(0, -1).join(' '), `${words[words.length - 1]}.`].filter(Boolean);

  return (
    <section id="home" className="hero">
      <div className="hero-photo" aria-hidden>
        <img src={portrait} alt="" />
      </div>

      <div className="hero-inner container mx-auto px-4 sm:px-6">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="h-0.5 w-8 bg-current shrink-0" aria-hidden />
            <span>
              {profile.role} / {l(profile.location)}
            </span>
          </p>

          <h1 className="hero-title">
            {nameLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero-statement">{l(profile.hero.tagline)}</p>
          <p className="hero-description">{l(profile.hero.summary)}</p>

          <div className="hero-actions">
            <a href="#contact" className="hero-button">
              <Mail size={20} strokeWidth={2.25} aria-hidden />
              {l(ui.hero.contactButton)}
            </a>
            <div className="hero-count">
              <strong>{profile.stats.yearsOfExperience}</strong>
              <span className="whitespace-pre-line">{l(ui.hero.yearsLabel)}</span>
            </div>
          </div>

          <p className="hero-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden>/</span>
            <a href={telHref(profile.phone)}>{profile.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
