import React from 'react';

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [language, setLanguage] = React.useState('cs');

  React.useEffect(() => {
    const checkComponents = () => {
      const { Navbar, Hero, Features, ReservationSection, Footer, translations } = window;
      if (Navbar && Hero && Features && ReservationSection && Footer && translations) {
        setIsReady(true);
      } else {
        setTimeout(checkComponents, 50);
      }
    };
    checkComponents();
  }, []);

  const t = (path) => {
    const { translations } = window;
    if (!translations) return path;
    const keys = path.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  if (!isReady) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-brand-dark font-medium animate-pulse">Připravujeme váš zážitek...</p>
      </div>
    );
  }

  const { Navbar, Hero, Features, ReservationSection, Footer } = window;

  const contextProps = { t, language, setLanguage };

  return (
    <div className="antialiased scroll-smooth">
      <Navbar {...contextProps} />
      <main>
        <Hero {...contextProps} />
        <Features {...contextProps} />
        <ReservationSection {...contextProps} />
      </main>
      <Footer {...contextProps} />
    </div>
  );
};

window.App = App;