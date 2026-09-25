import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection = () => {
  const { t } = useLanguage();

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
    },
  ];

  return (
    <section id="education" className="ground-paper py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          kicker={t('Học vấn', 'Education')}
          title={t('Nơi đã học', 'Where I studied')}
          className="mb-14 lg:mb-20"
        />

        <ol className="border-t-2 border-ink">
          {educationData.map((edu) => {
            const [score, scale] = edu.gpa.split('/');

            return (
              <li
                key={edu.school}
                className="grid gap-y-4 gap-x-10 border-b border-line py-8 md:grid-cols-[10rem_1fr] lg:grid-cols-[10rem_1fr_1fr_9rem]"
              >
                <p className="text-sm text-graphite md:pt-1.5">{edu.period}</p>

                <div>
                  <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] mb-2">
                    {edu.school}
                  </h3>
                  <p className="text-graphite">{edu.location}</p>
                </div>

                <div className="md:col-start-2 lg:col-start-auto">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-graphite mb-3">{edu.major}</p>
                  <p className="text-sm text-graphite leading-relaxed max-w-[52ch]">{edu.description}</p>
                </div>

                {edu.gpa && (
                  <p className="md:col-start-2 lg:col-start-auto lg:text-right">
                    <span className="ghost-figure text-6xl">{score}</span>
                    <span className="font-display text-lg font-bold text-graphite">/{scale}</span>
                    <span className="block text-xs text-graphite mt-1">GPA</span>
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default EducationSection;
