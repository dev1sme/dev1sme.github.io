import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectLinks = ({ github, demo }: { github: string; demo: string | null }) => (
  <div className="flex flex-wrap gap-6">
    <a href={github} target="_blank" rel="noopener noreferrer" className="dossier-link">
      GitHub <ArrowUpRight size={16} strokeWidth={2.5} />
    </a>
    {demo && (
      <a href={demo} target="_blank" rel="noopener noreferrer" className="dossier-link">
        Demo <ArrowUpRight size={16} strokeWidth={2.5} />
      </a>
    )}
  </div>
);

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: t(
        'Hệ thống thương mại điện tử hoàn chỉnh với quản lý sản phẩm, giỏ hàng, thanh toán và theo dõi đơn hàng. Tích hợp các cổng thanh toán phổ biến.',
        'Complete e-commerce system with product management, shopping cart, payment and order tracking. Integration with popular payment gateways.'
      ),
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker'],
      github: 'https://github.com',
      demo: null,
      featured: true,
    },
    {
      title: 'Delivery Management System',
      description: t(
        'Hệ thống quản lý giao hàng với tính năng theo dõi real-time, tối ưu hóa lộ trình và quản lý đội ngũ shipper.',
        'Delivery management system with real-time tracking, route optimization and shipper team management.'
      ),
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
    },
    {
      title: 'HR Management System',
      description: t(
        'Ứng dụng quản lý nhân sự với chức năng chấm công, quản lý lương, đánh giá hiệu suất và báo cáo.',
        'HR management application with attendance, payroll management, performance evaluation and reporting.'
      ),
      technologies: ['Java', 'Hibernate', 'PostgreSQL', 'Angular'],
      github: 'https://github.com',
      demo: null,
      featured: false,
    },
    {
      title: 'Chat Application',
      description: t(
        'Ứng dụng chat real-time với tính năng nhắn tin cá nhân, group chat và chia sẻ file.',
        'Real-time chat application with personal messaging, group chat and file sharing features.'
      ),
      technologies: ['Spring Boot', 'WebSocket', 'Redis', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
    },
    {
      title: 'Task Management API',
      description: t(
        'RESTful API cho ứng dụng quản lý công việc với authentication, authorization và real-time notifications.',
        'RESTful API for task management application with authentication, authorization and real-time notifications.'
      ),
      technologies: ['Java', 'Spring Security', 'JWT', 'MySQL'],
      github: 'https://github.com',
      demo: null,
      featured: false,
    },
    {
      title: 'Machine Learning Project',
      description: t(
        'Dự án nghiên cứu về ứng dụng Machine Learning trong dự đoán và phân tích dữ liệu.',
        'Research project on Machine Learning applications in prediction and data analysis.'
      ),
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
      github: 'https://github.com',
      demo: null,
      featured: false,
    },
  ];

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="ground-paper-light py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          kicker={t('Dự án', 'Projects')}
          title={t('Đã làm', 'Selected work')}
          className="mb-14 lg:mb-20"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-20">
          {featuredProjects.map((project) => (
            <article key={project.title} className="border-t-2 border-ink pt-6 flex flex-col">
              <p className="kicker text-graphite mb-4">{t('Nổi bật', 'Featured')}</p>
              <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-[0.9] mb-5">
                {project.title}
              </h3>
              <p className="text-lg leading-relaxed text-graphite max-w-[52ch] mb-6">{project.description}</p>
              <p className="font-display text-lg font-bold uppercase mb-8">{project.technologies.join(' / ')}</p>
              <div className="mt-auto">
                <ProjectLinks github={project.github} demo={project.demo} />
              </div>
            </article>
          ))}
        </div>

        <h3 className="font-display text-2xl font-extrabold uppercase mb-4">
          {t('Dự án khác', 'Other projects')}
        </h3>
        <ul className="border-t-2 border-ink">
          {otherProjects.map((project) => (
            <li
              key={project.title}
              className="grid gap-y-3 gap-x-10 border-b border-line py-6 md:grid-cols-[1fr_1.4fr] lg:grid-cols-[1fr_1.4fr_14rem_auto] lg:items-baseline"
            >
              <h4 className="font-display text-2xl font-bold uppercase leading-tight">{project.title}</h4>
              <p className="text-graphite leading-relaxed max-w-[60ch]">{project.description}</p>
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
