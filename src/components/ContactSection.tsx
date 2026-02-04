import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(t('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.', 'Thank you for contacting! I will respond as soon as possible.'));
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'letuanthong350@gmail.com',
      href: 'mailto:letuanthong350@gmail.com',
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
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t('Hãy liên hệ với tôi', 'Get in touch')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'Tôi luôn sẵn sàng lắng nghe về các cơ hội mới, dự án thú vị hoặc đơn giản là một cuộc trò chuyện. Đừng ngần ngại liên hệ với tôi qua bất kỳ kênh nào bên dưới.',
                  'I am always ready to hear about new opportunities, interesting projects or simply a conversation. Don\'t hesitate to contact me through any channel below.'
                )}
              </p>
            </div>

            <div className="space-y-4">
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
                      className="flex items-center gap-4 p-4 card-glass hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 card-glass">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium">{info.value}</p>
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
            >
              <p className="text-sm text-muted-foreground mb-4">{t('Theo dõi tôi tại:', 'Follow me at:')}</p>
              <div className="flex gap-4">
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="card-glass p-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                {t('Gửi tin nhắn', 'Send a message')}
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t('Họ và tên', 'Full Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder={t('Nhập họ và tên', 'Enter your name')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t('Tin nhắn', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder={t('Nội dung tin nhắn...', 'Your message...')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    t('Đang gửi...', 'Sending...')
                  ) : (
                    <>
                      <Send size={18} />
                      {t('Gửi tin nhắn', 'Send Message')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
