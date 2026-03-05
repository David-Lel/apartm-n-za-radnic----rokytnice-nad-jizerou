import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ t, language }) => {

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-brand-gold">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-300 font-bold">
                  Mountain Ways s.r.o.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <a href="tel:+420731990087" className="text-gray-300 hover:text-white transition-colors">
                  +420 731 990 087
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <a href="mailto:booking@mountainways.cz" className="text-gray-300 hover:text-white transition-colors">
                  booking@mountainways.cz
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Apartmán za radnicí 6<br />
                  Horní Rokytnice 492<br />
                  512 44 Rokytnice nad Jizerou
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-brand-gold">{t('footer.location')}</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.location_desc')}
            </p>
            <div className="w-full h-48 rounded-lg overflow-hidden relative shadow-inner grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.4410228384954!2d15.4497!3d50.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0f0a0a0a0a0a%3A0x0!2zSG9ybsOtIFJva3l0bmljZSA0OTIsIDUxMiA0NCBSb2t5dG5pY2UgbmFkIEppemVyb3U!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Horní Rokytnice 492"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Horní+Rokytnice+492,+Rokytnice+nad+Jizerou"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center py-2 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold border border-brand-gold/30 rounded-lg transition-all text-sm font-semibold"
            >
              {t('footer.open_maps')}
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Apartmán Za Radnicí, Rokytnice nad Jizerou. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;