import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
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
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            className="text-primary font-mono text-lg mb-4"
            variants={itemVariants}
          >
            Xin chào, tôi là
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
            variants={itemVariants}
          >
            <span className="gradient-text">Lê Tuấn Thông</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Backend Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Lập trình viên với hơn <span className="text-primary font-semibold">2 năm kinh nghiệm</span> phát triển web. 
            Đam mê xây dựng các hệ thống backend mạnh mẽ, tối ưu và có khả năng mở rộng cao.
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
              <span>TP. Hồ Chí Minh</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a href="#contact" className="btn-primary">
              <Mail size={20} />
              Liên hệ ngay
            </a>
            <a href="#" className="btn-outline">
              <Download size={20} />
              Tải CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
