import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, ArrowRight, MessageCircle, MapPin, Bus, Globe, Award } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onVisiMisiClick?: () => void;
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onVisiMisiClick, onBookingClick }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppClick = () => {
    const waNumber = '6281234567890';
    const message = 'Halo CV. Anugrah Pariwisata, saya berminat konsultasi paket tour & sewa armada pariwisata. Mohon informasi pilihan destinasi dan harga terbaik. Terima kasih!';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-100 text-[#0f172a] overflow-hidden border-b border-slate-200"
    >
      {/* Background Decorative Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="space-y-6 flex flex-col items-center" id="hero-text-container">
          
          {/* Top Badge Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-sans font-extrabold text-xs tracking-wider shadow-xs"
          >
            <Award className="w-4 h-4 text-orange-600 shrink-0" />
            <span>WISATA HEMAT BERSAMA TRAVEL HEBAT</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#0f172a] tracking-tight uppercase leading-none"
          >
            CV. ANUGRAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">PARIWISATA</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Perusahaan Tour & Travel No. 1 di Padang, Sumatera Barat. Menyediakan paket tour pariwisata In Sumbar, Nusantara (Bromo, Bali, Aceh, dll), hingga Internasional (Singapura, Malaysia, Eropa) dengan Big Bus Eksekutif Legrest, Hiace, dan Mobil Mini Bus terlengkap.
          </motion.p>

          {/* Pricing & Service Highlight Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 w-full max-w-3xl shadow-xl shadow-slate-200/50"
          >
            <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">In Sumatera Barat</span>
              <span className="font-display font-black text-sm text-[#0f172a] block mt-0.5">Padang, Bukittinggi, Painan, Payakumbuh</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Out Sumbar (Domestik)</span>
              <span className="font-display font-black text-sm text-[#0f172a] block mt-0.5">Danau Toba, Sabang, Bromo, Bali, Jogja</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">Internasional</span>
              <span className="font-display font-black text-sm text-[#0f172a] block mt-0.5">Singapura, Malaysia, Korea, Eropa</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center gap-3"
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 text-white font-sans font-bold text-sm uppercase py-4 px-8 rounded-full shadow-lg shadow-orange-600/25 transition-all flex items-center gap-2.5 cursor-pointer group"
              id="hero-wa-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasi Tour via WA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-sans font-bold text-sm uppercase py-4 px-7 rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              id="hero-explore-btn"
            >
              <Bus className="w-4 h-4 text-orange-600" />
              <span>Pilihan Bus & Mobil</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
