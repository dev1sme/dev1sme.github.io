import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection = () => {
  const { t } = useLanguage();
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
      title: 'Full-time International Student',
      company: t('Chương trình trao đổi sinh viên', 'International student exchange programs'),
      period: '06/2024 - 12/2024',
      location: t('Trung - Hàn', 'China - Korea'),
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
    <section id="experience" className="ground-paper-light py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          kicker={t('Kinh nghiệm', 'Experience')}
          title={t('Dòng thời gian', 'Timeline')}
          className="mb-14 lg:mb-20"
        />

        <ol className="border-t-2 border-ink">
          {experienceData.map((exp, index) => {
            const startYear = exp.period.match(/\d{4}/)?.[0];
            const hasDetails = exp.responsibilities.length > 0 || exp.techStack.length > 0;
            const isOpen = hasDetails && expandedIndex === index;

            return (
              <li
                key={exp.key}
                className="grid md:grid-cols-[minmax(10rem,14rem)_1fr] gap-x-10 border-b border-line py-8 md:py-10"
              >
                <div className="mb-4 md:mb-0">
                  <p className="ghost-figure text-[4.5rem] md:text-[6.5rem]" aria-hidden>
                    {startYear}
                  </p>
                  <p className="text-sm text-graphite mt-2">{exp.period}</p>
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
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="kicker bg-ink text-paper-light px-2 py-0.5 text-xs">
                            {t('Hiện tại', 'Current')}
                          </span>
                        )}
                      </div>
                      <p className="font-semibold">
                        {exp.title}
                        <span className="text-graphite font-normal"> / {exp.location}</span>
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
                            <li key={resp} className="flex gap-3 text-graphite leading-relaxed">
                              <span className="text-ink" aria-hidden>—</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.techStack.length > 0 && (
                          <div className="lg:border-l lg:border-line lg:pl-6">
                            <p className="kicker text-graphite text-xs mb-2">{t('Công nghệ', 'Stack')}</p>
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
