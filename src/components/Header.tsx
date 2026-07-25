import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  onBookingClick: () => void;
}

export default function Header({
  activeSection,
  onNavClick,
  lang,
  setLang,
  onBookingClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavClick(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* MAIN NAVBAR */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200/90'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* 1. LEFT: LOGO BRAND */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-2 cursor-pointer group shrink-0"
              id="header-logo"
            >
              <img
                src="/logo_original.jpg"
                alt="CV. Anugrah Pariwisata Tour & Travel"
                className="h-14 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-200"
                style={{ maxWidth: '160px' }}
              />
              <div className="flex flex-col leading-snug">
                <span className="font-semibold text-sm sm:text-base uppercase tracking-wide text-red-600 group-hover:text-red-700 transition-colors">
                  CV. ANUGRAH PARIWISATA
                </span>
                <span className="font-medium text-[10px] sm:text-xs uppercase tracking-widest text-red-400 group-hover:text-red-500 transition-colors">
                  Tour &amp; Travel
                </span>
              </div>
            </div>

            {/* 2. CENTER: DESKTOP NAV LINKS (Package Tour Kanan Destinations & Tanpa Contact Us) */}
            <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 text-xs font-sans font-bold text-slate-700 flex-1 px-4" id="desktop-nav">
              
              <button
                onClick={() => handleItemClick('home')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'home' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleItemClick('about')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'about' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleItemClick('destinations')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'destinations' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                Destinations
              </button>

              {/* PACKAGE TOUR (SEBELAH KANAN DESTINATIONS) */}
              <button
                onClick={() => handleItemClick('destinations')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'destinations' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                Package Tour
              </button>

              <button
                onClick={() => handleItemClick('cars')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'cars' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                Transport Rent
              </button>

              <button
                onClick={() => handleItemClick('gallery')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'gallery' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                Gallery
              </button>

            </nav>

            {/* 3. RIGHT: BOOK A TOUR CORAL BUTTON */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={onBookingClick}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-display font-extrabold text-xs uppercase px-5 py-2.5 rounded-xl shadow-md shadow-red-600/20 transition-all cursor-pointer tracking-wider"
                id="header-book-tour-btn"
              >
                BOOK A TOUR
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden text-left"
            id="mobile-menu-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <button
                onClick={() => handleItemClick('home')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                Home
              </button>
              <button
                onClick={() => handleItemClick('about')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                About Us
              </button>
              <button
                onClick={() => handleItemClick('destinations')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                Destinations
              </button>
              <button
                onClick={() => handleItemClick('destinations')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                Package Tour
              </button>
              <button
                onClick={() => handleItemClick('cars')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                Transport Rent
              </button>
              <button
                onClick={() => handleItemClick('gallery')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2"
              >
                Gallery
              </button>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-[#dc2626] text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>BOOK A TOUR</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


