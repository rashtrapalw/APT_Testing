import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Vision', href: '#vision' },
    // { name: 'Mission', href: '#mission' },
    // { name: 'Journey', href: '#journey' },
    // { name: 'Investors', href: '#investors' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      //   isScrolled
      //     ? 'bg-white/80 backdrop-blur-xl border-b border-[#0A0F1C]/10 shadow-lg'
      //     : 'bg-transparent'
      // }`}

      className="fixed top-0 left-0 right-0 z-50 pt-4  backdrop-blur-none "
    >
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="max-w-7xl mx-auto px-4">
       <div className="bg-white/10 dark:bg-[#0A0F1C]/80 backdrop-blur-sm border border-white/10 dark:border-[#0A0F1C]/20 rounded-full px-2 shadow-lg">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-11 h-10 rounded-full flex items-center justify-center">
              {/* <Zap className="w-6 h-6 text-white" /> */}
              <img
                src="/logo2.png"
                alt="Apropos Drive"
                className="h-10 sm:h-12 object-contain"
              />


            </div>
            <span className="font-['Poppins'] font-bold text-xl tracking-tight">
              <span className="text-[#0A0F1C] dark:text-white">Apropos</span>
              <span className="text-[#00C853]">drive</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-['Inter'] text-lg font-semibold bg-gradient-to-r from-[#00C853] to-[#00E5FF] bg-clip-text text-transparent hover:opacity-80 transition-all duration-300"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00C853] to-[#00E5FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-semibold shadow-lg shadow-[#00C853]/30 hover:shadow-[#00C853]/50 transition-all duration-300 flex items-center gap-2"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              {/* {theme === 'light' ? 'Dark' : 'Light'} */}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0A0F1C] dark:text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
        </div>


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/10 dark:bg-[#0A0F1C]/90 backdrop-blur-md border-t border-[#0A0F1C]/10 dark:border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-['Inter'] text-[#0A0F1C]/70 hover:text-[#00C853] transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00C853] to-[#00E5FF] text-white font-['Inter'] font-semibold shadow-lg">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}