import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Compass, Award, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals') => void;
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
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);

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
    setTourDropdownOpen(false);
    onNavClick(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300">
      
      {/* Main Navigation Bar (Raja-Wisata Inspired Premium Header) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200/90'
            : 'bg-white py-4 border-b border-slate-200/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO BRAND: CV. ANUGRAH PARIWISATA */}
            <div 
              onClick={() => handleItemClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
              id="header-logo"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 flex items-center justify-center text-white font-black font-display text-xl shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
                AP
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl tracking-tight text-[#0f172a] leading-none group-hover:text-orange-600 transition-colors">
                    CV. ANUGRAH <span className="text-orange-600">PARIWISATA</span>
                  </span>
                </div>
                <span className="font-sans text-[10px] font-extrabold text-slate-500 tracking-wider mt-0.5 uppercase">
                  WISATA HEMAT BERSAMA TRAVEL HEBAT
                </span>
              </div>
            </div>

            {/* DESKTOP NAVIGATION MENU ITEMS (Exact Raja-Wisata Style) */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-sans font-bold text-slate-700" id="desktop-nav">
              
              <button
                onClick={() => handleItemClick('home')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'home' ? 'text-orange-600 border-b-2 border-orange-600 font-extrabold' : ''
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleItemClick('about')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'about' ? 'text-orange-600 border-b-2 border-orange-600 font-extrabold' : ''
                }`}
              >
                Corporate Services
              </button>

              {/* Tour Package Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => handleItemClick('services')}
                  onMouseEnter={() => setTourDropdownOpen(true)}
                  className={`hover:text-orange-600 transition-colors cursor-pointer py-1 flex items-center gap-1 ${
                    activeSection === 'services' ? 'text-orange-600 border-b-2 border-orange-600 font-extrabold' : ''
                  }`}
                >
                  <span>Tour Package</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 hidden group-hover:block transition-all">
                  <button
                    onClick={() => handleItemClick('services')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 block"
                  >
                    🇲🇨 Tour In Sumatera Barat
                  </button>
                  <button
                    onClick={() => handleItemClick('services')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 block"
                  >
                    🌋 Tour Out Sumbar (Nusantara)
                  </button>
                  <button
                    onClick={() => handleItemClick('services')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 block"
                  >
                    ✈️ Tour Internasional Mancanegara
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleItemClick('cars')}
                className={`hover:text-orange-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'cars' ? 'text-orange-600 border-b-2 border-orange-600 font-extrabold' : ''
                }`}
              >
                Transport Rent
              </button>

              <button
                onClick={() => handleItemClick('steps')}
                className="hover:text-orange-600 transition-colors cursor-pointer py-1"
              >
                Portofolio
              </button>

              <button
                onClick={() => handleItemClick('footer-contact')}
                className="hover:text-orange-600 transition-colors cursor-pointer py-1"
              >
                Travel Notes
              </button>

              {/* Search Icon button */}
              <button
                onClick={onBookingClick}
                className="text-slate-500 hover:text-orange-600 transition-colors p-1.5 cursor-pointer rounded-full hover:bg-slate-100"
                title="Pencarian / Reservasi Tour"
              >
                <Search className="w-4 h-4" />
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
                About Us
              </button>
              <button
                onClick={() => handleItemClick('about')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                Corporate Services
              </button>
              <button
                onClick={() => handleItemClick('services')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                Tour Package
              </button>
              <button
                onClick={() => handleItemClick('cars')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
              >
                Transport Rent
              </button>
              <button
                onClick={() => handleItemClick('footer-contact')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2"
              >
                Travel Notes
              </button>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Konsultasi Tour WA</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
