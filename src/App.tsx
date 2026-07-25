import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ToursList from './components/ToursList';
import CarList from './components/CarList';
import BookingSteps from './components/BookingSteps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Car } from './types';
import { CARS } from './data/cars';
import { ChevronUp, MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from './utils/translations';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tours' | 'rentals'>('home');
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
        const sections = ['home', 'about', 'services', 'cars', 'footer-contact'];
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
    if (sectionId === 'home') {
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

  // WhatsApp click handler for floating widget
  const handleWhatsAppChat = () => {
    const waNumber = '6281234567890';
    const text = encodeURIComponent('Halo CV. Anugrah Pariwisata, Hai, apa yang bisa saya bantu? Saya berminat berkonsultasi mengenai paket tour & rental armada.');
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <div 
      className="relative min-h-screen bg-white text-slate-900 selection:bg-orange-600 selection:text-white font-sans" 
      id="main-app-container"
    >
      
      {/* Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
        lang={lang} 
        setLang={setLang} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBookingClick={() => setSelectedCar(CARS[0])}
      />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        <Hero 
          onExploreClick={() => handleNavClick('cars')} 
          lang={lang} 
          onBookingClick={() => setSelectedCar(CARS[0])} 
        />

        <About lang={lang} />

        <Services lang={lang} />

        <CarList onSelectCar={handleSelectCar} lang={lang} />

        <BookingSteps lang={lang} />

        <Testimonials lang={lang} />
      </main>

      {/* Footer Contact */}
      <Footer onNavigateSection={handleNavClick} lang={lang} />

      {/* Booking Popup Modal */}
      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} lang={lang} onCarChange={setSelectedCar} />

      {/* 🟢 1. FLOATING BOTTOM-LEFT WHATSAPP PILL WIDGET (Exact Raja-Wisata Style) */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={handleWhatsAppChat}
          className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-sans font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-2xl transition-all flex items-center gap-2 cursor-pointer border border-white/20 hover:scale-105"
          id="floating-whatsapp-widget"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>Hai, apa yang bisa saya bantu?</span>
        </button>
      </div>

      {/* 🟠 2. FLOATING BOTTOM-RIGHT TRANSLATE PILL WIDGET (Exact Raja-Wisata Style) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        
        {/* Scroll To Top Pill */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
              title="Kembali ke atas"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Translate Orange Pill */}
        <button
          onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
          className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-sans font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full shadow-2xl transition-all flex items-center gap-1.5 cursor-pointer border border-white/20 hover:scale-105"
          id="floating-translate-widget"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Translate » ({lang})</span>
        </button>

      </div>

    </div>
  );
}
