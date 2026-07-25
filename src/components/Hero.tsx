import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Search, ChevronUp, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onExploreClick: () => void;
  lang: 'ID' | 'EN';
  onBookingClick?: () => void;
}

export default function Hero({ onExploreClick, lang, onBookingClick }: HeroProps) {
  const [destinationInput, setDestinationInput] = useState('Padang / Sumatera Barat');
  const [travelDateInput, setTravelDateInput] = useState('');

  const t = TRANSLATIONS[lang];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281234567890';
    const message = `Halo CV. Anugrah Pariwisata, saya ingin mencari & berkonsultasi rute tour: ${destinationInput}${travelDateInput ? ` (Rencana Tanggal: ${travelDateInput})` : ''}. Mohon penawaran harga & paket terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="home" className="relative pt-20 pb-20 bg-white overflow-hidden text-center">
      
      {/* 1. HERO MOUNTAIN SCENIC BANNER (Exact Bayu Buana Travel Screenshot 1 Layout) */}
      <div className="relative w-full min-h-[560px] sm:min-h-[620px] flex flex-col justify-between bg-slate-900 text-white overflow-hidden border-b border-slate-200">
        
        {/* Full-width Scenic Mountain & Hot Air Balloon Background Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920')`
          }}
        />

        {/* Dark Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70" />

        {/* Right Slider Arrow Controls (Exact Screenshot 1) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-20">
          <button 
            onClick={onExploreClick}
            className="w-10 h-10 rounded-full border border-white/40 bg-black/20 hover:bg-white hover:text-slate-900 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
            title="Slide Up"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button 
            onClick={onExploreClick}
            className="w-10 h-10 rounded-full border border-white/40 bg-black/20 hover:bg-white hover:text-slate-900 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
            title="Slide Down"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* CENTERED HERO TEXT CONTENT */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 sm:pt-24 pb-32 space-y-4">
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase"
          >
            Welcome to CV. Anugrah Pariwisata
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-tight drop-shadow-md"
          >
            Let's Explore The World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-100 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm"
          >
            Dapatkan pengalaman liburan yang istimewa dengan harga menarik dan layanan terbaik untuk memuaskan setiap perjalanan! #WisataHematTravelHebat
          </motion.p>

        </div>

        {/* 2. FLOATING SEARCH BOX OVERLAY (Exact Bayu Buana Screenshot 1 Style) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full -mt-20 sm:-mt-16 mb-8">
          <form 
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-200/90 grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-left"
            id="hero-search-box"
          >
            
            {/* Field 1: Destination */}
            <div className="md:col-span-5 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                Destination
              </label>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <select
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-700 focus:outline-none bg-transparent cursor-pointer"
                >
                  <option value="In Sumatera Barat">In Sumatera Barat (Padang, Bukittinggi, Painan, Harau)</option>
                  <option value="Out Sumatera Barat (Nusantara)">Out Sumatera Barat (Danau Toba, Sabang, Bromo, Bali)</option>
                  <option value="Internasional (Singapura, Malaysia, Asia)">Internasional (Singapura, Malaysia, Thailand, Korea, Jepang)</option>
                  <option value="Sewa Big Bus & Transport Rent">Sewa Big Bus Eksekutif, Hiace & Mini Bus</option>
                </select>
              </div>
            </div>

            {/* Field 2: Travel Dates */}
            <div className="md:col-span-4 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
              <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wide">
                Travel Dates
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-orange-500 shrink-0" />
                <input
                  type="text"
                  value={travelDateInput}
                  onChange={(e) => setTravelDateInput(e.target.value)}
                  placeholder="When will you go on tour?"
                  className="w-full text-xs font-semibold text-slate-700 focus:outline-none bg-transparent placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Field 3: Search Tour Button (Coral Red Solid) */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-[#f94a29] hover:bg-[#e03d1e] text-white font-display font-extrabold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer tracking-wider"
              >
                <Search className="w-4 h-4" />
                <span>Search Tour</span>
              </button>
            </div>

          </form>
        </div>

      </div>

    </section>
  );
}
