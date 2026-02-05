import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Built with */}
          <p className="text-sm text-muted-foreground mb-3">
            {t('Được xây dựng với', 'Built with')}{' '}
            <Heart className="inline-block w-4 h-4 text-accent mx-1" fill="currentColor" />
            {t('sử dụng React & Tailwind CSS', 'using React & Tailwind CSS')}
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground mb-3">
            © {currentYear} Lê Tuấn Thông. {t('Bảo lưu mọi quyền.', 'All rights reserved.')}
          </p>

          {/* Designed by */}
          <p className="text-xs text-muted-foreground/60 mb-6 font-mono">
            {t('Thiết kế & Phát triển bởi', 'Designed & Developed by')}{' '}
            <a
              href="#home"
              className="text-primary hover:underline"
            >
              Lê Tuấn Thông
            </a>
          </p>

          {/* Social Links - at the very bottom */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:letuanthong350@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
