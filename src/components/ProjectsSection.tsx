import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, ui } from '@/content';

const ProjectLinks = ({ github, demo }: { github: string | null; demo: string | null }) => (
  <div className="flex flex-wrap gap-6">
    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer" className="dossier-link">
        GitHub <ArrowUpRight size={16} strokeWidth={2.5} />
      </a>
    )}
    {demo && (
      <a href={demo} target="_blank" rel="noopener noreferrer" className="dossier-link">
        Demo <ArrowUpRight size={16} strokeWidth={2.5} />
      </a>
    )}
  </div>
);

const ProjectsSection = () => {
  const { l } = useLanguage();

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="ground-paper-light py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading section="projects" className="mb-14 lg:mb-20" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-20">
          {featuredProjects.map((project) => (
            <article key={l(project.title)} className="border-t-2 border-ink pt-6 flex flex-col">
              <p className="kicker text-graphite mb-4">{l(ui.projects.featured)}</p>
              <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-[0.9] mb-5">
                {l(project.title)}
              </h3>
              <p className="text-lg leading-relaxed text-graphite max-w-[52ch] mb-6">{l(project.description)}</p>
              <p className="font-display text-lg font-bold uppercase mb-8">{project.technologies.join(' / ')}</p>
              <div className="mt-auto">
                <ProjectLinks github={project.github} demo={project.demo} />
              </div>
            </article>
          ))}
        </div>

        <h3 className="font-display text-2xl font-extrabold uppercase mb-4">
          {l(ui.projects.others)}
        </h3>
        <ul className="border-t-2 border-ink">
          {otherProjects.map((project) => (
            <li
              key={l(project.title)}
              className="grid gap-y-3 gap-x-10 border-b border-line py-6 md:grid-cols-[1fr_1.4fr] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_14rem_10rem] lg:items-baseline"
            >
              <h4 className="font-display text-2xl font-bold uppercase leading-tight">{l(project.title)}</h4>
              <p className="text-graphite leading-relaxed max-w-[60ch]">{l(project.description)}</p>
              <p className="text-sm font-medium md:col-start-2 lg:col-start-auto">
                {project.technologies.join(' / ')}
              </p>
              <div className="md:col-start-2 lg:col-start-auto">
                <ProjectLinks github={project.github} demo={project.demo} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
