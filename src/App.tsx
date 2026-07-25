import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import DestinationHighlightsPage from './components/DestinationHighlightsPage';
import PackageTourPage from './components/PackageTourPage';
import TransportRentPage from './components/TransportRentPage';
import GalleryPage from './components/GalleryPage';
import BookingSteps from './components/BookingSteps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Car } from './types';
import { CARS } from './data/cars';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'rentals' | 'destinations' | 'package-tour' | 'gallery'>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (currentPage === 'home') {
        const sections = ['home', 'destinations', 'cars', 'footer-contact'];
        const scrollPosition = window.scrollY + 250;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'about-page' || sectionId === 'about') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    } else if (sectionId === 'cars' || sectionId === 'rentals' || sectionId === 'transport-rent') {
      setCurrentPage('rentals');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('rentals');
    } else if (sectionId === 'destinations-page' || sectionId === 'destinations') {
      setCurrentPage('destinations');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('destinations');
    } else if (sectionId === 'package-tour-page' || sectionId === 'package-tour' || sectionId === 'packages') {
      setCurrentPage('package-tour');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('package-tour');
    } else if (sectionId === 'gallery-page' || sectionId === 'gallery') {
      setCurrentPage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('gallery');
    } else if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      }
    }
  };

  const handleSelectCar = (car: Car) => {
    setSelectedCar(car);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppChat = () => {
    const waNumber = '6281234567890';
    const text = encodeURIComponent('Halo CV. Anugrah Pariwisata, saya ingin berkonsultasi mengenai reservasi tour & rental armada. Mohon bantuan admin.');
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <div 
      className="relative min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans" 
      id="main-app-container"
    >
      
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        lang={lang} 
        setLang={setLang} 
        onBookingClick={() => setSelectedCar(CARS[0])}
      />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <>
            <Hero 
              onExploreClick={() => handleNavClick('destinations')} 
              lang={lang} 
              onBookingClick={() => setSelectedCar(CARS[0])} 
            />

            <Services 
              lang={lang} 
              onViewAllDestinations={() => handleNavClick('destinations-page')}
            />

            <BookingSteps lang={lang} />

            <Testimonials lang={lang} />
          </>
        ) : currentPage === 'about' ? (
          <AboutPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : currentPage === 'destinations' ? (
          <DestinationHighlightsPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : currentPage === 'package-tour' ? (
          <PackageTourPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : currentPage === 'gallery' ? (
          <GalleryPage lang={lang} onNavigateHome={() => handleNavClick('home')} />
        ) : (
          <TransportRentPage 
            onSelectCar={handleSelectCar} 
            lang={lang} 
            onNavigateHome={() => handleNavClick('home')} 
          />
        )}
      </main>

      {/* Footer Contact */}
      <Footer onNavigateSection={handleNavClick} lang={lang} />

      {/* Booking Popup Modal */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang={lang} onCarChange={setSelectedCar} />

      {/* FLOATING ASSISTANT AVATAR WIDGET */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700 mb-1"
              title="Kembali ke atas"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Character Avatar Floater Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleWhatsAppChat}
          className="flex items-center gap-2 cursor-pointer group"
          id="floating-cs-avatar-widget"
        >
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-sans font-black text-[10px] sm:text-xs px-3 py-1.5 rounded-xl shadow-lg border border-amber-300 uppercase tracking-wider flex items-center gap-1 group-hover:scale-105 transition-transform">
            <span>Hi, I am CS ANUGRAH</span>
          </div>

          <div className="w-13 h-13 rounded-full bg-gradient-to-br from-amber-400 via-red-500 to-red-700 p-0.5 shadow-2xl border-2 border-white relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
              alt="CS Anugrah Pariwisata"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="w-3.5 h-3.5 rounded-full bg-green-100 border-2 border-white absolute bottom-0 right-0 shadow-xs" />
          </div>
        </motion.div>

      </div>

    </div>
  );
}


