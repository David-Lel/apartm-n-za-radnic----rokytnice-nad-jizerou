import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = ({ t, language }) => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("./fotky/background.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
          {t('hero.badge')}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, 'booking')}
            className="px-8 py-4 bg-brand-gold hover:brightness-110 text-brand-dark font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {t('hero.cta_booking')}
          </a>
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold rounded-lg transition-all"
          >
            {t('hero.cta_about')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};

window.Hero = Hero;