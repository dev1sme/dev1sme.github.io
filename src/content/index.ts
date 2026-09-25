// Typed entry point for all site content. The JSON files hold the data;
// the `satisfies` checks below make `npm run typecheck` fail when a file
// is missing a field or has the wrong shape.
import profileJson from './profile.json';
import experienceJson from './experience.json';
import educationJson from './education.json';
import skillsJson from './skills.json';
import projectsJson from './projects.json';
import uiJson from './ui.json';

/** Text that is the same in every language, or one value per language. */
export type Localized = string | { vi: string; en: string };

/** "MM/YYYY" or "YYYY". `end: null` means ongoing. */
export interface Period {
  start: string;
  end: string | null;
}

export interface Profile {
  name: string;
  role: string;
  location: Localized;
  address: Localized;
  birthDate: string;
  email: string;
  phone: string;
  social: { label: string; url: string }[];
  stats: {
    yearsOfExperience: string;
    projectsCompleted: string;
    countriesStudied: string;
  };
  hero: { tagline: Localized; summary: Localized };
  about: { lead: Localized; paragraphs: Localized[] };
  contact: { intro: Localized };
}

export interface Experience {
  title: Localized;
  company: Localized;
  period: Period;
  location: Localized;
  responsibilities: Localized[];
  techStack: string[];
}

export interface Education {
  school: Localized;
  period: Period;
  location: Localized;
  degree: Localized;
  major: Localized;
  /** "score/scale", e.g. "3.5/4.0". null hides it. */
  gpa: string | null;
  description: Localized;
}

export interface Skills {
  categories: {
    title: Localized;
    skills: { name: Localized; level: number }[];
  }[];
  others: string[];
}

export interface Project {
  title: Localized;
  description: Localized;
  technologies: string[];
  /** null hides the link. */
  github: string | null;
  demo: string | null;
  featured: boolean;
}

export const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'education', 'projects', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export interface Ui {
  brand: { name: string; tagline: Localized };
  sections: Record<SectionId, { label: Localized; title?: Localized }>;
  fields: Record<'birthDate' | 'address' | 'email' | 'phone' | 'social', Localized>;
  header: { menuToggle: Localized };
  hero: { contactButton: Localized; yearsLabel: Localized };
  about: {
    profileKicker: Localized;
    yearsCaption: Localized;
    projectsCompleted: Localized;
    countriesStudied: Localized;
  };
  period: { present: Localized };
  experience: { current: Localized; stack: Localized };
  skills: { others: Localized };
  education: { gpa: Localized };
  projects: { featured: Localized; others: Localized };
  dock: { ariaLabel: Localized; scrollDown: Localized; backToTop: Localized; contact: Localized };
  footer: { builtWith: Localized };
}

export const profile: Profile = profileJson satisfies Profile;
export const experience: Experience[] = experienceJson satisfies Experience[];
export const education: Education[] = educationJson satisfies Education[];
export const skills: Skills = skillsJson satisfies Skills;
export const projects: Project[] = projectsJson satisfies Project[];
export const ui: Ui = uiJson satisfies Ui;

/** "0938 179 726" -> "tel:0938179726" */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;
