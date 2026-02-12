import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const educationData = [
    {
      period: t('01/2025 - Hiện tại', '01/2025 - Present'),
      school: t('Tự học & Luyện tập Online', 'Self-study & Online Practice'),
      location: 'Online',
      degree: t('Học tập liên tục', 'Continuous Learning'),
      major: t('Cập nhật kiến thức mới mỗi ngày', 'Updating new knowledge every day'),
      gpa: '',
      description: t(
        'Không ngừng học hỏi và rèn luyện kỹ năng thông qua các nền tảng như Udemy, Coursera, LeetCode, và các dự án cá nhân.',
        'Continuously learning and practicing skills through platforms like Udemy, Coursera, LeetCode, and personal projects.'
      ),
      flag: '🌐',
    },
    {
      period: '09/2024 - 12/2024',
      school: t('Đại học Công Nghệ Jeonju', 'Jeonju University'),
      location: t('Hàn Quốc', 'South Korea'),
      degree: t('Chương trình trao đổi', 'Exchange Program'),
      major: 'Cloud & AI',
      gpa: '3.5/4.0',
      description: t(
        'Nghiên cứu về điện toán đám mây và ứng dụng AI trong thực tiễn.',
        'Researched cloud computing and practical AI applications.'
      ),
      flag: '🇰🇷',
    },
    {
      period: '06/2024 - 09/2024',
      school: t('Đại học Công Nghệ Hoa Nam', 'South China University of Technology'),
      location: t('Trung Quốc', 'China'),
      degree: t('Chương trình trao đổi', 'Exchange Program'),
      major: 'AI & Machine Learning',
      gpa: '9/10',
      description: t(
        'Tham gia chương trình trao đổi quốc tế, nghiên cứu về trí tuệ nhân tạo và học máy.',
        'Participated in international exchange program, researching artificial intelligence and machine learning.'
      ),
      flag: '🇨🇳',
    },
    {
      period: '2019 - 2023',
      school: t('Đại học Tôn Đức Thắng', 'Ton Duc Thang University'),
      location: t('TP. Hồ Chí Minh, Việt Nam', 'Ho Chi Minh City, Vietnam'),
      degree: t('Cử nhân Công nghệ thông tin', 'Bachelor of Information Technology'),
      major: t('Chuyên ngành: Mạng máy tính', 'Major: Computer Networks'),
      gpa: '7.60/10',
      description: t(
        'Hoàn thành chương trình đại học với kiến thức vững chắc về lập trình, cơ sở dữ liệu và mạng máy tính.',
        'Completed university program with solid knowledge in programming, databases and computer networks.'
      ),
      flag: '🇻🇳',
    },
  ];

  return (
    <section id="education" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary font-mono text-lg font-normal">04.</span>{' '}
            {t('Học vấn', 'Education')}
          </h2>
          <p className="section-subheading">{t('Quá trình học tập của tôi', 'My educational journey')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 glow-effect" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="card-glass p-6 hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="text-3xl">{edu.flag}</span>
                    <div className="flex items-center gap-2 text-primary text-sm font-mono">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* School info */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {edu.school}
                  </h3>
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>

                  {/* Degree details */}
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <GraduationCap size={16} className="text-primary" />
                      <span className="text-foreground font-medium">{edu.degree}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.major}</p>
                  </div>

                  {/* GPA */}
                  {edu.gpa && (
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Award size={16} className="text-accent" />
                      <span className="text-accent font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
