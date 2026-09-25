import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const personalInfo = [
    { label: t('Ngày sinh', 'Date of birth'), value: '01/01/2001' },
    { label: t('Địa chỉ', 'Address'), value: t('Nhà Bè, TP. Hồ Chí Minh', 'Nha Be, Ho Chi Minh City') },
    { label: 'Email', value: 'contact@dev1sme.cloud', href: 'mailto:contact@dev1sme.cloud' },
    { label: t('Điện thoại', 'Phone'), value: '0938 179 726', href: 'tel:0938179726' },
  ];

  const stats = [
    { value: '5+', label: t('Dự án hoàn thành', 'Projects completed') },
    { value: '3', label: t('Quốc gia học tập', 'Countries studied in') },
  ];

  return (
    <section id="about" className="ground-paper py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading
            kicker={t('Giới thiệu', 'About')}
            title={t(<>Backend cho<br />tải thật</>, <>Backends for<br />real load</>)}
            className="mb-10"
          />

          <p className="text-2xl md:text-[1.75rem] font-semibold leading-snug max-w-[34ch] mb-8">
            {t(
              'Backend Engineer hơn 2 năm kinh nghiệm, chuyên phát triển hệ thống web với Java và Spring Boot, từ startup đến doanh nghiệp lớn.',
              'Backend Engineer with over 2 years of experience, building web systems with Java and Spring Boot for startups and large enterprises.'
            )}
          </p>
          <div className="space-y-4 text-graphite leading-relaxed max-w-[62ch]">
            <p>
              {t(
                'Nền tảng từ Đại học Tôn Đức Thắng, cùng các chương trình trao đổi tại Trung Quốc và Hàn Quốc về AI, Machine Learning và Cloud Computing.',
                'Grounded at Ton Duc Thang University, then broadened through exchange programs in China and South Korea on AI, Machine Learning and Cloud Computing.'
              )}
            </p>
            <p>
              {t(
                'Mục tiêu: trở thành kỹ sư phần mềm toàn diện, đóng góp giá trị cho các dự án phức tạp.',
                'The goal: become a well-rounded software engineer who adds real value to complex projects.'
              )}
            </p>
          </div>
        </div>

        <aside className="lg:col-span-5 lg:mt-24 self-start bg-paper-light border-t-2 border-ink p-6 sm:p-8">
          <p className="kicker text-graphite mb-4">{t('Hồ sơ', 'Profile')}</p>
          <p className="ghost-figure text-[7.5rem] sm:text-[9rem] mb-2">2+</p>
          <p className="text-xl font-semibold mb-8">
            {t('Năm kinh nghiệm phát triển backend.', 'Years of backend development.')}
          </p>

          <dl className="border-t border-line">
            {personalInfo.map((info) => (
              <div key={info.label} className="flex justify-between gap-4 py-3 border-b border-line text-sm">
                <dt className="text-graphite">{info.label}</dt>
                <dd className="font-medium text-right">
                  {info.href ? (
                    <a href={info.href} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                      {info.value}
                    </a>
                  ) : (
                    info.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-5xl font-extrabold leading-none mb-1">{stat.value}</p>
                <p className="text-sm text-graphite">{stat.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
