import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { label: t('Điện thoại', 'Phone'), value: '0938 179 726', href: 'tel:0938179726' },
    { label: t('Địa chỉ', 'Address'), value: t('Nhà Bè, TP. Hồ Chí Minh', 'Nha Be, Ho Chi Minh City'), href: null },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/dev1sme' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dev1sme' },
    { label: 'Facebook', href: 'https://facebook.com/letuanthong.35' },
    { label: 'Instagram', href: 'https://instagram.com/letuanthong' },
    { label: 'X', href: 'https://x.com/dev1sme' },
  ];

  return (
    <section id="contact" className="ground-ink py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          kicker={t('Liên hệ', 'Contact')}
          title={t('Nói chuyện nhé', "Let's talk")}
          className="mb-8"
        />
        <p className="text-lg text-paper-light/65 leading-relaxed max-w-[52ch] mb-14">
          {t(
            'Sẵn sàng nghe về cơ hội mới, dự án thú vị, hoặc chỉ là một cuộc trò chuyện. Email là cách nhanh nhất.',
            'Open to new opportunities, interesting projects, or just a conversation. Email is the fastest way to reach me.'
          )}
        </p>

        <a
          href="mailto:contact@dev1sme.cloud"
          className="group inline-flex items-start gap-2 font-display font-extrabold leading-none break-all mb-14 border-b-4 border-paper-light pb-2 transition-opacity hover:opacity-70"
          style={{ fontSize: 'clamp(2rem, 6.5vw, 5.5rem)' }}
        >
          contact@dev1sme.cloud
          <ArrowUpRight className="shrink-0 w-[0.6em] h-[0.6em]" strokeWidth={2.5} aria-hidden />
        </a>

        <div className="grid md:grid-cols-3 gap-10 border-t border-paper-light/15 pt-8">
          {contactInfo.map((info) => (
            <div key={info.label}>
              <p className="text-sm text-paper-light/50 mb-1">{info.label}</p>
              {info.href ? (
                <a href={info.href} className="text-xl font-semibold hover:opacity-70 transition-opacity">
                  {info.value}
                </a>
              ) : (
                <p className="text-xl font-semibold">{info.value}</p>
              )}
            </div>
          ))}
          <div>
            <p className="text-sm text-paper-light/50 mb-2">{t('Mạng xã hội', 'Elsewhere')}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="dossier-link text-sm">
                    {social.label} <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
