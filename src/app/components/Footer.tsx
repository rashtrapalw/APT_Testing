import { motion } from 'motion/react';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: ['VoltDrive X1', 'Specifications', 'Test Drive', 'Compare'],
    Company: ['About Us', 'Careers', 'Press Kit', 'Blog'],
    Support: ['Help Center', 'Warranty', 'Service Centers', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#F8FAFB] to-[#EBEEF1] dark:from-[#0A0F1C] dark:to-[#1A1F2E] border-t border-[#00C853]/10 dark:border-[#00C853]/20">
      {/* Newsletter Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#00C853]/5 to-[#00E5FF]/5 dark:from-[#00C853]/10 dark:to-[#00E5FF]/10 backdrop-blur-sm border border-[#00C853]/10 dark:border-[#00C853]/20 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-['Poppins'] font-bold text-2xl md:text-3xl text-[#0A0F1C] dark:text-white mb-3">
                Stay Updated
              </h3>
              <p className="font-['Inter'] text-[#0A0F1C]/70 dark:text-white/70">
                Subscribe to our newsletter for the latest updates on EVs, technology, and exclusive offers
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white dark:bg-[#1A1F2E] border border-[#00C853]/20 dark:border-[#00C853]/30 text-[#0A0F1C] dark:text-white placeholder:text-[#0A0F1C]/50 dark:placeholder:text-white/50 focus:outline-none focus:border-[#00C853] transition-colors duration-300 font-['Inter']"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-semibold shadow-lg shadow-[#00C853]/30"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-['Poppins'] font-bold text-xl tracking-tight">
                <span className="text-[#0A0F1C] dark:text-white">Apropos</span>
                <span className="text-[#00C853]">drive</span>
              </span>
            </a>
            <p className="font-['Inter'] text-[#0A0F1C]/60 dark:text-white/70 mb-6 max-w-sm">
              Powering Smarter Electric Mobility. Building sustainable and scalable EV powertrain solutions for a greener India.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@aproposdrive.com" className="flex items-center gap-3 text-[#0A0F1C]/60 dark:text-white/70 hover:text-[#00C853] transition-colors duration-300 font-['Inter'] text-sm">
                <Mail className="w-4 h-4" />
                contact@aproposdrive.com
              </a>
              <a href="https://www.aproposdrive.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0A0F1C]/60 dark:text-white/70 hover:text-[#00C853] transition-colors duration-300 font-['Inter'] text-sm">
                <Phone className="w-4 h-4" />
                www.aproposdrive.com
              </a>
              <div className="flex items-center gap-3 text-[#0A0F1C]/60 dark:text-white/70 font-['Inter'] text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-['Poppins'] font-semibold text-[#0A0F1C] dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-['Inter'] text-sm text-[#0A0F1C]/60 dark:text-white/70 hover:text-[#00C853] transition-colors duration-300 inline-flex items-center group"
                    >
                      {link}
                      <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00C853]/10 dark:border-[#00C853]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="font-['Inter'] text-sm text-[#0A0F1C]/50 dark:text-white/50">
              © 2024 Aproposdrive Technologies Pvt. Ltd. All rights reserved. Powering Smarter Electric Mobility.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white dark:bg-[#1A1F2E] border border-[#00C853]/10 dark:border-[#00C853]/30 flex items-center justify-center text-[#0A0F1C]/60 dark:text-white/70 hover:text-[#00C853] hover:border-[#00C853]/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="px-4 py-2 rounded-full bg-white dark:bg-[#1A1F2E] border border-[#00C853]/10 dark:border-[#00C853]/20 font-['Inter'] text-xs text-[#0A0F1C]/60 dark:text-white/70">
              🇮🇳 Made in India
            </div>
            <div className="px-4 py-2 rounded-full bg-white dark:bg-[#1A1F2E] border border-[#00C853]/10 dark:border-[#00C853]/20 font-['Inter'] text-xs text-[#0A0F1C]/60 dark:text-white/70">
              🌱 100% Eco-Friendly
            </div>
            <div className="px-4 py-2 rounded-full bg-white border border-[#00C853]/10 font-['Inter'] text-xs text-[#0A0F1C]/60">
              ⭐ 5-Star Safety Rating
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}