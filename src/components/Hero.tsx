import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, ArrowRight, MessageCircle, Bus, Award, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppClick = () => {
    const waNumber = '6281234567890';
    const message = 'Halo CV. Anugrah Pariwisata, saya ingin bertanya paket gathering/outbound & sewa armada pariwisata. Mohon informasi penawaran harga terbaik. Terima kasih!';
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 bg-white overflow-hidden text-left">
      
      {/* 1. HERO MAIN BANNER (Full-width Outbound & Nature Background - Screenshot 1 Style) */}
      <div className="relative w-full min-h-[500px] sm:min-h-[560px] flex items-center justify-center bg-slate-900 text-white overflow-hidden border-b border-slate-200">
        
        {/* Background Scenic Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1920')`
          }}
        />

        {/* Gradient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 text-center space-y-6">
          
          {/* Top Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/90 border border-orange-400/50 text-white font-sans font-bold text-xs tracking-wider uppercase shadow-md"
          >
            <Award className="w-4 h-4 text-amber-300 shrink-0" />
            <span>CV. ANUGRAH PARIWISATA • WISATA HEMAT BERSAMA TRAVEL HEBAT</span>
          </motion.div>

          {/* Main Headline (Exact Raja-Wisata Style) */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase max-w-4xl mx-auto"
          >
            Gathering & Outbound Seru <br className="hidden sm:block" />
            <span className="text-orange-500">untuk Perusahaan Anda</span>
          </motion.h1>

          {/* Subheadline (Italic & Clean) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-200 text-sm sm:text-lg italic leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Tingkatkan semangat tim dengan pengalaman tak terlupakan di destinasi terbaik Sumatera Barat, Nusantara & Internasional!
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-sans font-bold text-sm uppercase py-4 px-8 rounded-full shadow-xl shadow-orange-600/30 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Konsultasi Paket Tour WA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-sans font-bold text-sm uppercase py-4 px-8 rounded-full transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <Bus className="w-4 h-4 text-orange-400" />
              <span>Transport Rent (Armada Bus & Mobil)</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* 2. VIBRANT ORANGE FLEET BANNER (Screenshot 2 Style - Transport Rent Section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-orange-400/40">
          
          {/* Mosque Silhouette / Landmark Graphic Overlay in Background */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none bg-repeat-x bg-bottom"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" fill="%23000000"><path d="M0,300 L0,200 Q50,150 100,200 T200,200 L200,300 Z M300,300 L300,100 Q350,50 400,100 T500,100 L500,300 Z M600,300 L600,150 Q650,80 700,150 T800,150 L800,300 Z"/></svg>')`,
              backgroundSize: '800px 200px'
            }}
          />

          {/* Left Text Block */}
          <div className="space-y-3 relative z-10 max-w-xl text-left">
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-200 bg-black/20 px-3.5 py-1 rounded-full border border-white/20 inline-block">
              TRANSPORTATION RENT 2026
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              OPERATIONAL & PARIWISATA TRANSPORTATION
            </h2>
            <p className="font-sans text-xs sm:text-sm text-amber-50 font-medium leading-relaxed">
              Sewa Big Bus Eksekutif Legrest (Zivanes, Nyaman Holiday, Miyor, KYM, Sutan Raya, Wulyudza), Hiace Premio, hingga Mini Bus (Alphard, Innova, Avanza, Xenia, Calya, Sigra).
            </p>
          </div>

          {/* Right Fleet Cutout Graphic */}
          <div className="relative z-10 flex items-center justify-center w-full lg:w-auto">
            <div className="relative max-w-md w-full">
              <img
                src="/hiace_premio.png"
                alt="Armada Transport CV. Anugrah Pariwisata"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 right-2 bg-white/95 text-slate-900 font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-lg border border-slate-200">
                Armada Bus & Mobil Full AC
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
