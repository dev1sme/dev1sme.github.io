import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const experienceData = [
  {
    title: 'Backend Engineer',
    company: 'Công ty cổ phần Én Việt',
    period: '04/2024 - Hiện tại',
    location: 'TP. Hồ Chí Minh',
    current: true,
    responsibilities: [
      'Quản lý dự án phát triển web và mobile',
      'Phát triển backend với Java và Spring Boot',
      'Thiết kế và tối ưu hóa API/web service',
      'Làm việc với cơ sở dữ liệu MySQL và PostgreSQL',
      'Triển khai Docker container và CI/CD pipelines',
      'Code review và mentoring cho team members',
    ],
    techStack: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    title: 'Backend Engineer',
    company: 'AhaMove',
    period: '10/2023 - 03/2024',
    location: 'TP. Hồ Chí Minh',
    current: false,
    responsibilities: [
      'Phát triển các tính năng backend cho nền tảng giao hàng',
      'Tối ưu hóa performance của API services',
      'Xử lý dữ liệu lớn và real-time processing',
      'Làm việc trong môi trường Agile/Scrum',
      'Viết unit tests và integration tests',
    ],
    techStack: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'AWS', 'Microservices'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
            <span className="text-primary font-mono text-lg font-normal">03.</span>{' '}
            Kinh nghiệm
          </h2>
          <p className="section-subheading">Hành trình nghề nghiệp của tôi</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
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
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary font-medium">
                            Hiện tại
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
                      Trách nhiệm chính
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
                      Công nghệ sử dụng
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
