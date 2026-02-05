import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experienceData = [
    {
      key: 1,
      title: 'Software Engineer',
      company: 'CYBiDGE CORPORATION',
      period: t('12/2025 - Hiện tại', '12/2025 - Present'),
      location: t('TP. Hồ Chí Minh', 'Ho Chi Minh City'),
      current: true,
      responsibilities: [
        t('Phát triển và bảo trì các ứng dụng enterprise-level', 'Developing and maintaining enterprise-level applications'),
        t('Thiết kế kiến trúc hệ thống và microservices', 'Designing system architecture and microservices'),
        t('Tối ưu hóa hiệu suất và khả năng mở rộng của hệ thống', 'Optimizing system performance and scalability'),
        t('Phối hợp với team quốc tế trong môi trường đa văn hóa', 'Collaborating with international teams in multicultural environment'),
        t('Áp dụng best practices và design patterns trong phát triển phần mềm', 'Applying best practices and design patterns in software development'),
      ],
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      key: 2,
      title: 'Software Engineer',
      company: t('Công ty cổ phần Én Việt', 'En Viet Joint Stock Company'),
      period: '01/2025 - 11/2025',
      location: t('TP. Hồ Chí Minh', 'Ho Chi Minh City'),
      current: false,
      responsibilities: [
        t('Phát triển backend với Java và Spring Boot', 'Developing backend with Java and Spring Boot'),
        t('Thiết kế và tối ưu hóa API/web service', 'Designing and optimizing API/web services'),
        t('Làm việc với cơ sở dữ liệu MySQL và PostgreSQL', 'Working with MySQL and PostgreSQL databases'),
        t('Triển khai Docker container và CI/CD pipelines', 'Deploying Docker containers and CI/CD pipelines'),
        t('Code review và mentoring cho team members', 'Code review and mentoring team members'),
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Docker', 'Redis'],
    },
    {
      key: 3,
      title: 'Full-time International Student - Information Technology',
      company: t('Chương trình trao đổi sinh viên', 'International student exchange programs'),
      period: '06/2024 - 12/2024',
      location: t('Trung Quốc - Hàn Quốc', 'China - Korea'),
      current: false,
      responsibilities: [
        // t('Quản lý dự án phát triển web và mobile', 'Managing web and mobile development projects'),
        // t('Phát triển backend với Java và Spring Boot', 'Developing backend with Java and Spring Boot'),
        // t('Thiết kế và tối ưu hóa API/web service', 'Designing and optimizing API/web services'),
        // t('Làm việc với cơ sở dữ liệu MySQL và PostgreSQL', 'Working with MySQL and PostgreSQL databases'),
      ],
      techStack: [],
    },
    {
      key: 4,
      title: 'Software Engineer',
      company: t('Công ty cổ phần Én Việt', 'En Viet Joint Stock Company'),
      period: '04/2024 - 06/2024',
      location: t('TP. Hồ Chí Minh', 'Ho Chi Minh City'),
      current: false,
      responsibilities: [
        t('Quản lý dự án phát triển web và mobile', 'Managing web and mobile development projects'),
        t('Phát triển backend với Java và Spring Boot', 'Developing backend with Java and Spring Boot'),
        t('Thiết kế và tối ưu hóa API/web service', 'Designing and optimizing API/web services'),
        t('Làm việc với cơ sở dữ liệu MySQL và PostgreSQL', 'Working with MySQL and PostgreSQL databases'),
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Docker'],
    },
    {
      key: 5,
      title: 'Software Engineer',
      company: 'AhaMove',
      period: '10/2023 - 03/2024',
      location: t('TP. Hồ Chí Minh', 'Ho Chi Minh City'),
      current: false,
      responsibilities: [
        t('Phát triển các tính năng backend cho nền tảng giao hàng', 'Developing backend features for delivery platform'),
        t('Tối ưu hóa performance của API services', 'Optimizing API services performance'),
        t('Xử lý dữ liệu lớn và real-time processing', 'Processing big data and real-time processing'),
        t('Làm việc trong môi trường Agile/Scrum', 'Working in Agile/Scrum environment'),
        t('Viết unit tests và integration tests', 'Writing unit tests and integration tests'),
      ],
      techStack: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'AWS', 'Microservices'],
    },
  ];

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary font-mono text-lg font-normal">02.</span>{' '}
            {t('Kinh nghiệm', 'Experience')}
          </h2>
          <p className="section-subheading">{t('Hành trình nghề nghiệp của tôi', 'My professional journey')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-glass overflow-hidden"
            >
              {/* Header - Always visible */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left hover:bg-muted/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-medium whitespace-nowrap">
                            {t('Hiện tại', 'Current')}
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="p-2">
                      {expandedIndex === index ? (
                        <ChevronUp size={20} className="text-primary" />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-border/50">
                  {/* Responsibilities */}
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      {t('Trách nhiệm chính', 'Key Responsibilities')}
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      {t('Công nghệ sử dụng', 'Technologies Used')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
