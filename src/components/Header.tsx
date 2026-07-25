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

            {/* 2. CENTER: DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 text-xs font-sans font-bold text-slate-700 flex-1 px-4" id="desktop-nav">
              
              <button
                onClick={() => handleItemClick('home')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'home' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_home}
              </button>

              <button
                onClick={() => handleItemClick('about')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'about' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_about}
              </button>

              <button
                onClick={() => handleItemClick('destinations')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'destinations' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_destinations}
              </button>

              <button
                onClick={() => handleItemClick('package-tour')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'package-tour' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_packages}
              </button>

              <button
                onClick={() => handleItemClick('cars')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'cars' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_rentals}
              </button>

              <button
                onClick={() => handleItemClick('gallery')}
                className={`hover:text-red-600 transition-colors cursor-pointer py-1 ${
                  activeSection === 'gallery' ? 'text-red-600 font-extrabold border-b-2 border-red-600' : ''
                }`}
              >
                {t.nav_gallery}
              </button>

            </nav>

            {/* 3. RIGHT: SOCIAL MEDIA + LANGUAGE SWITCHER TOGGLE & BOOK A TOUR BUTTON */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              
              {/* SOCIAL MEDIA QUICK LINKS */}
              <div className="flex items-center gap-1.5 border-r border-slate-200 pr-3">
                <a
                  href="https://www.facebook.com/share/1CvHKVWo8t/"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook Resmi CV. Anugrah Pariwisata"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/wahyudaanggaraanugrah?igsh=MWk1eWE0MTMxeG95MA=="
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram Official @wahyudaanggaraanugrah"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-600 hover:to-purple-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@anugrahpariwisatac?_r=1&_t=ZS-98Jppe9Fy36"
                  target="_blank"
                  rel="noreferrer"
                  title="TikTok Official @anugrahpariwisatac"
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 0 0-5.11 2.5 6.34 6.34 0 0 0 1 8.87 6.34 6.34 0 0 0 8.7-1.39V10.2a8.27 8.27 0 0 0 5.52 2.1V8.85a4.8 4.8 0 0 1-3-2.16z" />
                  </svg>
                </a>
              </div>

              {/* Language Switcher Toggle (ID / EN) */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setLang('ID')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'ID'
                      ? 'bg-red-600 text-white shadow-xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Bahasa Indonesia (Utama)"
                >
                  <span>🇮🇩 ID</span>
                </button>
                <button
                  onClick={() => setLang('EN')}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                    lang === 'EN'
                      ? 'bg-red-600 text-white shadow-xs font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="English Language"
                >
                  <span>🇬🇧 EN</span>
                </button>
              </div>

              <button
                onClick={onBookingClick}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-display font-extrabold text-xs uppercase px-4 py-2.5 rounded-xl shadow-md shadow-red-600/20 transition-all cursor-pointer tracking-wider"
                id="header-book-tour-btn"
              >
                {lang === 'EN' ? 'BOOK A TOUR' : 'PESAN TOUR'}
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
                {t.nav_home}
              </button>
              <button
                onClick={() => handleItemClick('about')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                {t.nav_about}
              </button>
              <button
                onClick={() => handleItemClick('destinations')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                {t.nav_destinations}
              </button>
              <button
                onClick={() => handleItemClick('package-tour')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                {t.nav_packages}
              </button>
              <button
                onClick={() => handleItemClick('cars')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2 border-b border-slate-100"
              >
                {t.nav_rentals}
              </button>
              <button
                onClick={() => handleItemClick('gallery')}
                className="block w-full text-left font-display font-bold text-sm text-slate-800 hover:text-red-600 py-2"
              >
                {t.nav_gallery}
              </button>

              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">Pilih Bahasa / Language:</span>
                <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setLang('ID')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      lang === 'ID'
                        ? 'bg-red-600 text-white font-extrabold'
                        : 'text-slate-600'
                    }`}
                  >
                    🇮🇩 ID
                  </button>
                  <button
                    onClick={() => setLang('EN')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      lang === 'EN'
                        ? 'bg-red-600 text-white font-extrabold'
                        : 'text-slate-600'
                    }`}
                  >
                    🇬🇧 EN
                  </button>
                </div>
              </div>

              {/* Social Media Row in Mobile Drawer */}
              <div className="flex items-center justify-between py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase">Media Sosial:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/share/1CvHKVWo8t/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center"
                    title="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/wahyudaanggaraanugrah?igsh=MWk1eWE0MTMxeG95MA=="
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center"
                    title="Instagram"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@anugrahpariwisatac?_r=1&_t=ZS-98Jppe9Fy36"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center"
                    title="TikTok"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 0 0-5.11 2.5 6.34 6.34 0 0 0 1 8.87 6.34 6.34 0 0 0 8.7-1.39V10.2a8.27 8.27 0 0 0 5.52 2.1V8.85a4.8 4.8 0 0 1-3-2.16z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookingClick();
                  }}
                  className="w-full bg-[#dc2626] text-white font-display font-bold text-xs uppercase py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>{lang === 'EN' ? 'BOOK A TOUR' : 'PESAN TOUR'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


