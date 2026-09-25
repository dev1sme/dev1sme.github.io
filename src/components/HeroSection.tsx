import { motion, Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile, telHref, ui } from '@/content';
import portrait from '@/assets/portrait.jpg';

const HeroSection = () => {
  const { l } = useLanguage();

  // "Lê Tuấn Thông" -> ["Lê Tuấn", "Thông."]
  const words = profile.name.split(' ');
  const nameLines = [words.slice(0, -1).join(' '), `${words[words.length - 1]}.`].filter(Boolean);

  const sequence: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };

  const rise: Variants = {
    hidden: { y: '105%' },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const fade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-black text-paper-light pt-24 lg:pt-32 pb-[calc(var(--dock-height)+2.5rem)]"
    >
      {/* Portrait is shot on a light backdrop; darken it so it sits in the black ground */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[58%]" aria-hidden>
        <img
          src={portrait}
          alt=""
          className="h-full w-full object-cover object-[60%_18%] grayscale contrast-[1.35] brightness-[0.55] opacity-50 md:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <motion.div
        className="container relative mx-auto px-4 sm:px-6"
        variants={sequence}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={fade} className="kicker flex items-center gap-4 text-paper-light/60 mb-6">
          <span className="h-0.5 w-10 bg-paper-light/60" aria-hidden />
          <span>
            {profile.role} / {l(profile.location)}
          </span>
        </motion.p>

        <h1
          className="font-display font-black uppercase leading-[0.9] tracking-[-0.015em] mb-10"
          style={{ fontSize: 'clamp(3.75rem, min(14vw, 20svh), 12rem)' }}
        >
          {nameLines.map((line) => (
            <span key={line} className="block overflow-hidden pt-[0.08em]">
              <motion.span variants={rise} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div variants={fade} className="max-w-2xl">
          <p className="border-l-4 border-paper-light pl-5 text-xl md:text-2xl font-semibold leading-snug mb-6">
            {l(profile.hero.tagline)}
          </p>
          <p className="text-paper-light/65 leading-relaxed mb-10 max-w-xl">
            {l(profile.hero.summary)}
          </p>
        </motion.div>

        <motion.div variants={fade} className="flex flex-wrap items-stretch gap-3 mb-8">
          <a href="#contact" className="btn-solid">
            <Mail size={20} strokeWidth={2.25} />
            {l(ui.hero.contactButton)}
          </a>
          <div className="flex items-center gap-4 border border-paper-light/30 px-6 py-3">
            <span className="font-display text-5xl font-extrabold leading-none">
              {profile.stats.yearsOfExperience}
            </span>
            <span className="kicker text-paper-light/70 leading-tight whitespace-pre-line">
              {l(ui.hero.yearsLabel)}
            </span>
          </div>
        </motion.div>

        <motion.p variants={fade} className="text-sm text-paper-light/45">
          <a href={`mailto:${profile.email}`} className="hover:text-paper-light transition-colors">
            {profile.email}
          </a>
          <span className="mx-3" aria-hidden>/</span>
          <a href={telHref(profile.phone)} className="hover:text-paper-light transition-colors">
            {profile.phone}
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
