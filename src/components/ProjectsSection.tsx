import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description:
      'Hệ thống thương mại điện tử hoàn chỉnh với quản lý sản phẩm, giỏ hàng, thanh toán và theo dõi đơn hàng. Tích hợp các cổng thanh toán phổ biến.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Docker'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    title: 'Delivery Management System',
    description:
      'Hệ thống quản lý giao hàng với tính năng theo dõi real-time, tối ưu hóa lộ trình và quản lý đội ngũ shipper.',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'AWS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'HR Management System',
    description:
      'Ứng dụng quản lý nhân sự với chức năng chấm công, quản lý lương, đánh giá hiệu suất và báo cáo.',
    technologies: ['Java', 'Hibernate', 'PostgreSQL', 'Angular'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'Chat Application',
    description:
      'Ứng dụng chat real-time với tính năng nhắn tin cá nhân, group chat và chia sẻ file.',
    technologies: ['Spring Boot', 'WebSocket', 'Redis', 'React'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'Task Management API',
    description:
      'RESTful API cho ứng dụng quản lý công việc với authentication, authorization và real-time notifications.',
    technologies: ['Java', 'Spring Security', 'JWT', 'MySQL'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'Machine Learning Project',
    description:
      'Dự án nghiên cứu về ứng dụng Machine Learning trong dự đoán và phân tích dữ liệu.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary font-mono text-lg font-normal">05.</span>{' '}
            Dự án
          </h2>
          <p className="section-subheading">Một số dự án tôi đã thực hiện</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-16 space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image/Placeholder */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border border-border/50">
                    <div className="text-center p-8">
                      <Folder className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">Project Preview</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="card-glass p-6 mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-mono text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-heading font-semibold text-foreground">
            Các dự án khác
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="card-glass p-6 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
