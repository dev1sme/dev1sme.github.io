import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@dev1sme.cloud',
      href: 'mailto:contact@dev1sme.cloud',
    },
    {
      icon: Phone,
      label: t('Điện thoại', 'Phone'),
      value: '0938 179 726',
      href: 'tel:0938179726',
    },
    {
      icon: MapPin,
      label: t('Địa chỉ', 'Address'),
      value: t('Nhà Bè, TP. Hồ Chí Minh', 'Nha Be, Ho Chi Minh City'),
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/dev1sme' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dev1sme' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/letuanthong.35' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/letuanthong' },
    { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/dev1sme' },
  ];

  return (
    <section id="contact" className="py-24 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary font-mono text-lg font-normal">06.</span>{' '}
            {t('Liên hệ', 'Contact')}
          </h2>
          <p className="section-subheading">{t('Hãy kết nối với tôi', 'Let\'s connect')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 text-center">
                {t('Hãy liên hệ với tôi', 'Get in touch')}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {t(
                  'Tôi luôn sẵn sàng lắng nghe về các cơ hội mới, dự án thú vị hoặc đơn giản là một cuộc trò chuyện. Đừng ngần ngại liên hệ với tôi qua bất kỳ kênh nào bên dưới.',
                  'I am always ready to hear about new opportunities, interesting projects or simply a conversation. Don\'t hesitate to contact me through any channel below.'
                )}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex flex-col items-center gap-3 p-4 card-glass hover:border-primary/50 transition-colors group text-center"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center gap-3 p-4 card-glass text-center">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium text-sm">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">{t('Theo dõi tôi tại', 'Follow me at')}:</p>
              <div className="flex gap-4 justify-center flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
