import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
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
          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:letuanthong350@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Built with */}
          <p className="text-sm text-muted-foreground mb-4">
            Built with{' '}
            <Heart className="inline-block w-4 h-4 text-accent mx-1" fill="currentColor" />
            using React & Tailwind CSS
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lê Tuấn Thông. All rights reserved.
          </p>

          {/* Designed by */}
          <p className="text-xs text-muted-foreground/60 mt-4 font-mono">
            Designed & Developed by{' '}
            <a
              href="#home"
              className="text-primary hover:underline"
            >
              Lê Tuấn Thông
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
