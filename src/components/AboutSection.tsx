import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Mail, Phone, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const personalInfo = [
    { icon: Calendar, label: t('Ngày sinh', 'Date of Birth'), value: '01/01/2001' },
    { icon: MapPin, label: t('Địa chỉ', 'Address'), value: t('Nhà Bè, TP. Hồ Chí Minh', 'Nha Be, Ho Chi Minh City') },
    { icon: Mail, label: 'Email', value: 'letuanthong350@gmail.com' },
    { icon: Phone, label: t('Điện thoại', 'Phone'), value: '0938 179 726' },
  ];

  const stats = [
    { value: '2+', label: t('Năm kinh nghiệm', 'Years of Experience') },
    { value: '5+', label: t('Dự án hoàn thành', 'Projects Completed') },
    { value: '3', label: t('Quốc gia học tập', 'Countries Studied') },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary font-mono text-lg font-normal">01.</span>{' '}
            {t('Giới thiệu', 'About Me')}
          </h2>
          <p className="section-subheading">{t('Về bản thân tôi', 'About myself')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{t('Tổng quan', 'Overview')}</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    <>Là một <span className="text-primary font-medium">Backend Engineer</span> với hơn 2 năm kinh nghiệm, tôi chuyên về phát triển các hệ thống web với công nghệ Java và Spring Boot. Có kinh nghiệm làm việc với các dự án từ startup đến doanh nghiệp lớn.</>,
                    <>As a <span className="text-primary font-medium">Backend Engineer</span> with over 2 years of experience, I specialize in developing web systems with Java and Spring Boot technology. Experienced working with projects from startups to large enterprises.</>
                  )}
                </p>
                <p>
                  {t(
                    'Tôi có nền tảng học vấn vững chắc từ Đại học Tôn Đức Thắng và đã tham gia các chương trình trao đổi quốc tế tại Trung Quốc và Hàn Quốc, mở rộng kiến thức về AI, Machine Learning và Cloud Computing.',
                    'I have a solid educational foundation from Ton Duc Thang University and have participated in international exchange programs in China and South Korea, expanding my knowledge in AI, Machine Learning and Cloud Computing.'
                  )}
                </p>
                <p>
                  {t(
                    'Luôn không ngừng học hỏi và cập nhật các công nghệ mới, với mục tiêu trở thành một kỹ sư phần mềm toàn diện và đóng góp giá trị cho các dự án phức tạp.',
                    'Always continuously learning and updating new technologies, with the goal of becoming a comprehensive software engineer and contributing value to complex projects.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-heading font-semibold mb-6">{t('Thông tin cá nhân', 'Personal Information')}</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="card-glass p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-foreground mt-1">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="card-glass p-5 text-center"
                >
                  <p className="text-3xl font-heading font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
