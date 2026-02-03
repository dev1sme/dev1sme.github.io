import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Server, Cloud, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Ngôn ngữ lập trình',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'C#', level: 70 },
      { name: 'C++', level: 60 },
      { name: 'JavaScript', level: 65 },
      { name: 'Python', level: 55 },
    ],
  },
  {
    icon: Server,
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
    icon: Database,
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
    icon: Cloud,
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
    icon: Wrench,
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Jira', level: 70 },
      { name: 'Postman', level: 80 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'VS Code', level: 80 },
    ],
  },
  {
    icon: Globe,
    title: 'Soft Skills',
    skills: [
      { name: 'Teamwork', level: 85 },
      { name: 'Problem Solving', level: 80 },
      { name: 'Communication', level: 75 },
      { name: 'Time Management', level: 70 },
      { name: 'English', level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, hsl(185 100% 50%), hsl(200 100% 60%))',
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary font-mono text-lg font-normal">04.</span>{' '}
            Kỹ năng
          </h2>
          <p className="section-subheading">Những gì tôi có thể làm</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card-glass p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex + skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">Các công nghệ khác tôi đã sử dụng:</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Kafka', 'RabbitMQ', 'Elasticsearch', 'GraphQL', 'REST API', 'Microservices', 'Design Patterns', 'Agile/Scrum'].map(
              (tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
