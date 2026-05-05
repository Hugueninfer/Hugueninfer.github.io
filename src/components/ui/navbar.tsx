import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { BrandLogo } from '@/components/ui/brand-logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'experience', 'projects', 'education', 'resume'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current ?? '');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.experience, href: '#experience', id: 'experience' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.education, href: '#education', id: 'education' },
    { name: t.nav.resume, href: '#resume', id: 'resume' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-200 ${scrolled ? 'top-2 md:top-4' : ''}`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-2xl">
        <div className="flex items-center gap-2 pl-2 md:pl-0">
          <BrandLogo className="size-8" />
          <span className="text-black dark:text-white font-bold tracking-wide text-lg">
            huguenin.dev
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors duration-150 group ${isActive ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-black dark:bg-white rounded-full transition-[width] duration-150 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center rounded-full border border-black/10 dark:border-white/10 overflow-hidden text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1.5 transition-colors ${
                language === 'en'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('pt')}
              className={`px-2.5 py-1.5 transition-colors ${
                language === 'pt'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              BR
            </button>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-neutral-600 dark:text-neutral-400"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="mailto:hugueninpedro@gmail.com" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
            {t.nav.hireMe}
          </a>

          <button
            type="button"
            className="md:hidden text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 p-4 rounded-3xl bg-white/90 dark:bg-black/80 border border-black/5 dark:border-white/10 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl overflow-hidden"
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.15 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors px-6 py-4 rounded-xl ${isActive ? 'text-black dark:text-white bg-neutral-100 dark:bg-white/10' : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10'}`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <motion.a
              href="mailto:hugueninpedro@gmail.com"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="mt-2 mx-2 px-6 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black text-center text-base font-semibold transition-colors"
            >
              {t.nav.hireMe}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
