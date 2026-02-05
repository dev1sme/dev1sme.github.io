import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowDown, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import sampleAvatar from '@/assets/sample-avatar.svg';

const HeroSection = () => {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-lg">
              <AvatarImage src={sampleAvatar} alt="Lê Tuấn Thông" />
              <AvatarFallback className="text-3xl font-heading font-bold bg-primary text-primary-foreground">
                LTT
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-primary font-mono text-lg mb-4"
            variants={itemVariants}
          >
            {t('Xin chào, tôi là', 'Hello, I am')}
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 text-foreground"
            variants={itemVariants}
          >
            Lê Tuấn Thông
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            {t(
              <>Lập trình viên với hơn <span className="text-primary font-semibold">2 năm kinh nghiệm</span> phát triển web. Đam mê xây dựng các hệ thống backend mạnh mẽ, tối ưu và có khả năng mở rộng cao.</>,
              <>Developer with over <span className="text-primary font-semibold">2 years of experience</span> in web development. Passionate about building robust, optimized and highly scalable backend systems.</>
            )}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10 text-sm"
            variants={itemVariants}
          >
            <a
              href="mailto:letuanthong350@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span>letuanthong350@gmail.com</span>
            </a>
            <a
              href="tel:0938179726"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span>0938 179 726</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>{t('TP. Hồ Chí Minh', 'Ho Chi Minh City')}</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a href="#contact" className="btn-primary">
              <Mail size={20} />
              {t('Liên hệ ngay', 'Contact me')}
            </a>
            <a href="#" className="btn-outline">
              <Download size={20} />
              {t('Tải CV', 'Download CV')}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>

          {/* Scroll indicator - below social links */}
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              opacity: { delay: 1.5, duration: 0.5 }
            }}
            className="mt-12 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
