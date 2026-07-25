import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, Bus, MapPin, Users, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GalleryPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function GalleryPage({ lang, onNavigateHome }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'armada' | 'gathering' | 'destinasi'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      category: 'armada',
      title: 'Big Bus Eksekutif Legrest',
      subtitle: 'Armada Zivanes & Miyor Full AC',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      category: 'gathering',
      title: 'Tour Gathering Mandeh',
      subtitle: 'Keluarga Besar & Instansi Perusahaan',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      category: 'destinasi',
      title: 'Jam Gadang & Ngarai Sianok',
      subtitle: 'Bukittinggi, Sumatera Barat',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      category: 'armada',
      title: 'Toyota Hiace Premio Eksekutif',
      subtitle: 'Unit Nyaman & Kabin Luas',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      category: 'destinasi',
      title: 'Danau Diatas & Danau Dibawah',
      subtitle: 'Alahan Panjang, Solok',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      category: 'gathering',
      title: 'Tour Outbound Bromo & Malang',
      subtitle: 'Peserta Tour Nusantara',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 7,
      category: 'destinasi',
      title: 'Singapura & Malaysia Tour',
      subtitle: 'Perjalanan Mancanegara',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 8,
      category: 'armada',
      title: 'Medium Bus Nyaman Holiday',
      subtitle: 'Armada Pariwisata Terawat',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 9,
      category: 'gathering',
      title: 'Gathering Keluarga di Bali',
      subtitle: 'Momentum Kebersamaan Istimewa',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const filteredPhotos = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER (Bayu Buana Style Header) */}
      <div className="relative w-full h-[230px] sm:h-[290px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-600/90 text-white font-extrabold text-[10px] uppercase tracking-widest mb-1 shadow-md">
            <Camera className="w-3.5 h-3.5 text-amber-300" />
            <span>CV. ANUGRAH PARIWISATA GALLERY</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase">
            Photo & Moment Gallery
          </h1>

          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-orange-400 cursor-pointer">HOME</span> / GALLERY
          </p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Dokumentasi Perjalanan & Armada
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Saksikan momen-momen indah kebersamaan peserta tour & keandalan armada bus eksekutif CV. Anugrah Pariwisata di berbagai rute pariwisata.
          </p>
        </div>

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Semua Foto
          </button>
          <button
            onClick={() => setActiveFilter('armada')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'armada'
                ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Bus className="w-3.5 h-3.5" />
            <span>Armada Bus & Mobil</span>
          </button>
          <button
            onClick={() => setActiveFilter('gathering')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'gathering'
                ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Tour & Gathering</span>
          </button>
          <button
            onClick={() => setActiveFilter('destinasi')}
            className={`px-5 py-2.5 rounded-2xl font-display font-extrabold text-xs uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFilter === 'destinasi'
                ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Destinasi Wisata</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              onClick={() => setSelectedPhoto(item.image)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Camera className="w-4 h-4 text-[#f94a29]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                  {item.category === 'armada' ? 'Armada Rental' : item.category === 'gathering' ? 'Tour Gathering' : 'Spot Destinasi'}
                </span>
                <h3 className="font-display font-black text-lg text-white leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Zoom */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedPhoto}
                alt="Dokumentasi CV. Anugrah Pariwisata"
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
