import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain, Globe } from 'lucide-react';

const Navbar = ({ t, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'cs' ? 'en' : 'cs');
  };

  const navLinks = [
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.location'), id: 'location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Mountain className={`h-8 w-8 ${scrolled ? 'text-brand-gold' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-serif font-bold ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              Apartmán za radnicí 6
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-medium transition-colors hover:text-brand-gold ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all text-xs font-bold ${scrolled
                  ? 'border-gray-200 text-gray-600 hover:border-brand-gold hover:text-brand-gold'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                }`}
            >
              <Globe size={14} />
              {language === 'cs' ? 'EN' : 'CZ'}
            </button>

            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, 'booking')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${scrolled
                ? 'bg-brand-gold text-brand-dark hover:brightness-110'
                : 'bg-white text-brand-dark hover:bg-gray-100'
                }`}
            >
              {t('nav.booking')}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              <span className="text-sm font-bold">{language === 'cs' ? 'EN' : 'CZ'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-gold hover:bg-gray-50 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#booking"
                onClick={(e) => scrollToSection(e, 'booking')}
                className="block w-full text-center px-4 py-3 rounded-lg bg-brand-gold text-brand-dark font-semibold"
              >
                {t('nav.booking')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

window.Navbar = Navbar;