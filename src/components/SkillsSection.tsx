import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('Ngôn ngữ lập trình', 'Programming Languages'),
      skills: [
        { name: 'Java', level: 90 },
        { name: 'C#', level: 70 },
        { name: 'C++', level: 60 },
        { name: 'JavaScript', level: 65 },
        { name: 'Python', level: 55 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Hibernate', level: 75 },
        { name: 'Angular', level: 60 },
        { name: 'React', level: 55 },
        { name: '.NET', level: 50 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Oracle', level: 65 },
        { name: 'MongoDB', level: 60 },
        { name: 'Redis', level: 55 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 50 },
        { name: 'Firebase', level: 65 },
        { name: 'CI/CD', level: 60 },
        { name: 'Linux', level: 70 },
      ],
    },
    {
      title: t('Công cụ & Khác', 'Tools & Others'),
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Jira', level: 70 },
        { name: 'Postman', level: 80 },
        { name: 'IntelliJ IDEA', level: 85 },
        { name: 'VS Code', level: 80 },
      ],
    },
    {
      title: t('Kỹ năng mềm', 'Soft Skills'),
      skills: [
        { name: t('Làm việc nhóm', 'Teamwork'), level: 85 },
        { name: t('Giải quyết vấn đề', 'Problem Solving'), level: 80 },
        { name: t('Giao tiếp', 'Communication'), level: 75 },
        { name: t('Quản lý thời gian', 'Time Management'), level: 70 },
        { name: t('Tiếng Anh', 'English'), level: 65 },
      ],
    },
  ];

  const otherTechs = ['Kafka', 'RabbitMQ', 'Elasticsearch', 'GraphQL', 'REST API', 'Microservices', 'Design Patterns', 'Agile/Scrum'];

  return (
    <section id="skills" className="ground-ink py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          kicker={t('Kỹ năng', 'Skills')}
          title={t('Bộ công cụ', 'Toolkit')}
          className="mb-14 lg:mb-20"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-display text-2xl font-extrabold uppercase border-t-2 border-paper-light pt-3 mb-4">
                {category.title}
              </h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill.name} className="py-2.5 border-b border-paper-light/15">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <span className="text-paper-light/85">{skill.name}</span>
                      <span className="font-display text-lg font-bold tabular-nums text-paper-light/60">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-0.5 bg-paper-light/15" aria-hidden>
                      <div className="h-full bg-paper-light" style={{ width: `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-paper-light/15 pt-8 grid md:grid-cols-[14rem_1fr] gap-4">
          <p className="text-paper-light/60">{t('Công nghệ khác đã dùng', 'Also worked with')}</p>
          <p className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight">
            {otherTechs.join(' / ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
