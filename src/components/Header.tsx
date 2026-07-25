import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, Feather } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals' | 'highlights';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals' | 'highlights') => void;
  onBookingClick: () => void;
}

export default function Header({
  activeSection,
  onNavClick,
  lang,
  setLang,
  currentPage,
  setCurrentPage,
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
          <div className="flex items-center justify-between">
            
            {/* LOGO BRAND */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-3 cursor-pointer group text-left"
              id="header-logo"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
                  <Feather className="w-6 h-6 transform -rotate-45" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#00685f] leading-none uppercase group-hover:text-emerald-700 transition-colors">
                  ANUGRAH <span className="text-emerald-700">PARIWISATA</span>
                </span>
                <span className="font-sans text-[10px] font-extrabold text-orange-600 tracking-wider mt-0.5 uppercase">
                  WISATA HEMAT BERSAMA TRAVEL HEBAT
                </span>
              </div>
            </div>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-sans font-bold text-slate-700" id="desktop-nav">
              
              <button
                onClick={() => handleItemClick('home')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 ${
                  currentPage === 'home' && activeSection === 'home' ? 'text-orange-600 font-extrabold' : ''
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleItemClick('about')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 ${
                  currentPage === 'about' ? 'text-orange-600 font-extrabold' : ''
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleItemClick('services')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 flex items-center gap-0.5 ${
                  currentPage === 'home' && activeSection === 'services' ? 'text-orange-600 font-extrabold' : ''
                }`}
              >
                <span>Destinations</span>
                <span className="text-orange-500 font-extrabold text-xs">+</span>
              </button>

              <button
                onClick={() => handleItemClick('highlights')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 ${
                  currentPage === 'highlights' ? 'text-orange-600 font-extrabold' : ''
                }`}
              >
                Destination Highlights
              </button>

              <button
                onClick={() => handleItemClick('cars')}
                className="hover:text-orange-600 transition-colors cursor-pointer py-1"
              >
                Transport Rent
              </button>

              <button
                onClick={() => handleItemClick('footer-contact')}
                className="hover:text-orange-600 transition-colors cursor-pointer py-1"
              >
                Contact Us
              </button>

              {/* BOOK A TOUR CORAL BUTTON */}
              <button
                onClick={onBookingClick}
                className="bg-[#f94a29] hover:bg-[#e03d1e] text-white font-display font-extrabold text-xs uppercase px-5 py-2.5 rounded-xl shadow-md shadow-orange-600/20 transition-all cursor-pointer tracking-wider"
                id="header-book-tour-btn"
              >
                BOOK A TOUR
              </button>

            </nav>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
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
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                Home
              </button>
              <button
                onClick={() => handleItemClick('about')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                About Us
              </button>
              <button
                onClick={() => handleItemClick('services')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                Destinations
              </button>
              <button
                onClick={() => handleItemClick('highlights')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                Destination Highlights
              </button>
              <button
                onClick={() => handleItemClick('footer-contact')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2"
              >
                Contact Us
              </button>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-[#f94a29] text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
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
