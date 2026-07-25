import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Compass, Award, ShieldCheck } from 'lucide-react';
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
  currentPage,
  setCurrentPage,
  onBookingClick
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: 'Profil & Visi Misi', id: 'about', type: 'section', sectionId: 'about' },
    { label: 'Destinasi Tour', id: 'services', type: 'section', sectionId: 'services' },
    { label: 'Armada Bus & Mobil', id: 'cars', type: 'section', sectionId: 'cars' },
    { label: t.nav_contact, id: 'footer-contact', type: 'section', sectionId: 'footer-contact' }
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.type === 'page') {
      setCurrentPage(item.pageId as 'home' | 'about' | 'tours' | 'rentals');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.type === 'section') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(item.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm">
      
      {/* 1. Top Bar */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6 overflow-hidden">
            <div className="flex items-center gap-1.5 text-slate-300 truncate">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="truncate">Kantor Pusat: Salido Painan, Pesisir Selatan | Cabang: Padang Timur</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span className="font-semibold text-white">WA Fast Response: 0812-3456-7890</span>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5 text-amber-400 font-extrabold">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Wisata Hemat dengan Travel Hebat</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-1.5 border-b border-slate-200/80 shadow-md'
            : 'bg-white py-2 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo Brand */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center gap-3 cursor-pointer group"
              id="header-logo"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 flex items-center justify-center text-white font-black font-display text-lg shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
                AP
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#0f172a] leading-none group-hover:text-orange-600 transition-colors">
                  CV. ANUGRAH <span className="text-orange-600">PARIWISATA</span>
                </span>
                <span className="font-sans text-[10px] font-extrabold text-orange-600 tracking-wider mt-0.5">
                  WISATA HEMAT BERSAMA TRAVEL HEBAT
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-display text-xs sm:text-sm font-extrabold transition-colors cursor-pointer relative py-2 px-1 ${
                      isItemActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                    }`}
                  >
                    {item.label}
                    {isItemActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Booking Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-display font-bold text-xs uppercase px-5 py-2.5 rounded-full shadow-md shadow-orange-600/20 transition-all flex items-center gap-2 cursor-pointer"
                id="header-booking-btn"
              >
                <Compass className="w-4 h-4" />
                <span>Konsultasi Tour</span>
              </button>
            </div>

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
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
            id="mobile-menu-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 text-left">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-orange-600 py-2 border-b border-slate-100"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
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
