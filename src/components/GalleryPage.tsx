import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, Bus, MapPin, Users, Globe, Eye, ZoomIn } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface GalleryPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function GalleryPage({ lang, onNavigateHome }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gathering' | 'armada'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; subtitle: string; location: string } | null>(null);

  const t = TRANSLATIONS[lang];

  const galleryItems = [
    {
      id: 1,
      category: 'gathering',
      title: 'Tour Silaturahmi Sipiso-Piso & Danau Toba',
      subtitle: 'Keluarga Besar Sepakat bersama CV. Anugrah Pariwisata',
      location: 'Air Terjun Sipiso-Piso, Danau Toba, Sumatera Utara',
      image: '/gallery_sipisopiso.jpg',
      badge: 'Danau Toba & Sipiso-Piso'
    },
    {
      id: 2,
      category: 'gathering',
      title: 'Tour Monumen Kapal Apung W.K.B Banda Aceh',
      subtitle: 'Kunjungan Wisata Sejarah & Edukasi Tsunami Aceh',
      location: 'Monumen Kapal Apung PLN, Banda Aceh',
      image: '/gallery_kapal_apung.jpg',
      badge: 'Banda Aceh Tour'
    },
    {
      id: 3,
      category: 'gathering',
      title: 'Wisata Keagamaan Masjid Raya Baiturrahman',
      subtitle: 'Momentum Kebersamaan Peserta Tour Aceh CV. Anugrah Pariwisata',
      location: 'Masjid Raya Baiturrahman, Banda Aceh',
      image: '/gallery_baiturrahman.jpg',
      badge: 'Masjid Baiturrahman'
    },
    {
      id: 4,
      category: 'gathering',
      title: 'Tour Silaturahmi Senggigi View Lombok',
      subtitle: 'Peserta Tour Nusantara di Spot Ikonik Senggigi',
      location: 'Senggigi View Beach, Lombok, NTB',
      image: '/gallery_senggigi.jpg',
      badge: 'Senggigi Lombok'
    },
    {
      id: 5,
      category: 'gathering',
      title: 'Tour Silaturahmi Candi Prambanan Jogja',
      subtitle: 'Keluarga Besar Sepakat Jelajah Heritage Nusantara',
      location: 'Kompleks Candi Prambanan, DI Yogyakarta',
      image: '/gallery_prambanan.jpg',
      badge: 'Candi Prambanan Jogja'
    },
    {
      id: 6,
      category: 'gathering',
      title: 'Tour Tugu Kilometer 0 Indonesia Sabang',
      subtitle: 'Titik Ujung Barat Indonesia bersama Rombongan Keluarga Besar Sepakat',
      location: 'Tugu Kilometer 0 Indonesia, Sabang, Aceh',
      image: '/gallery_sabang.jpg',
      badge: 'Sabang Kilometer 0'
    },
    {
      id: 7,
      category: 'gathering',
      title: 'Tour Wisata Keagamaan Masjid Istiqlal Jakarta',
      subtitle: 'Kunjungan Rombongan Peserta Wisata di Masjid Istiqlal',
      location: 'Masjid Istiqlal, DKI Jakarta',
      image: '/gallery_istiqlal.jpg',
      badge: 'Istiqlal Jakarta'
    },
    {
      id: 8,
      category: 'gathering',
      title: 'Tour Internasional Petronas Twin Towers',
      subtitle: 'Kunjungan Wisata Mancanegara Kuala Lumpur Malaysia',
      location: 'Petronas Twin Towers, Kuala Lumpur, Malaysia',
      image: '/gallery_petronas.jpg',
      badge: 'Kuala Lumpur'
    },
    {
      id: 9,
      category: 'gathering',
      title: 'Tour Mancanegara Bangkok & Thailand',
      subtitle: 'Peserta MT. Sakinah Warahmah BMKT Padang Panjang di Patung Sleeping Buddha',
      location: 'Bangkok & Hat Yai, Thailand',
      image: '/gallery_thailand.jpg',
      badge: 'Thailand Tour'
    },
    {
      id: 10,
      category: 'gathering',
      title: 'Tour HeHa Sky View & Jogja bersama Bus Zivanes',
      subtitle: 'Kebersamaan Rombongan Anugrah Pariwisata & Team Zivanes Bus',
      location: 'HeHa Sky View, Gunungkidul, Yogyakarta',
      image: '/gallery_heha.jpg',
      badge: 'HeHa Jogja Tour'
    },
    {
      id: 11,
      category: 'gathering',
      title: 'Tour Jeep Offroad Gunung Bromo & Pasir Berbisik',
      subtitle: 'Petualangan Seru Peserta Rombongan CV. Anugrah Pariwisata di Bromo',
      location: 'Kawasan Wisata Gunung Bromo, Jawa Timur',
      image: '/gallery_bromo.jpg',
      badge: 'Bromo Offroad'
    },
    {
      id: 12,
      category: 'gathering',
      title: 'Tour Silaturahmi Jam Gadang Bukittinggi',
      subtitle: 'Keluarga Besar Bagindo bersama Team CV. Anugrah Pariwisata',
      location: 'Taman Jam Gadang, Bukittinggi, Sumatera Barat',
      image: '/gallery_jam_gadang.jpg',
      badge: 'Jam Gadang Bukittinggi'
    },
    {
      id: 13,
      category: 'armada',
      title: 'Big Bus Eksekutif Zivanes Legrest',
      subtitle: 'Jetbus 3+ Voyager Full AC, Toilet & Sound Karaoke',
      location: 'Armada Utama CV. Anugrah Pariwisata',
      image: '/zivanes.jpg',
      badge: 'Big Bus Zivanes'
    },
    {
      id: 14,
      category: 'armada',
      title: 'Big Bus Pariwisata Nyaman Holiday',
      subtitle: 'Fasilitas Komplit & Kursi Nyaman Reclining',
      location: 'Armada Pariwisata Sumatera & Jawa',
      image: '/nyaman_holiday.jpg',
      badge: 'Nyaman Holiday'
    },
    {
      id: 15,
      category: 'armada',
      title: 'Big Bus Luxury Miyor Holiday',
      subtitle: 'Jetbus 5 Mercedes-Benz Eksekutif Legrest',
      location: 'Armada Luxury Tour Nusantara',
      image: '/miyor.jpg',
      badge: 'Miyor Holiday'
    },
    {
      id: 16,
      category: 'armada',
      title: 'Big Bus Eksekutif KYM Trans',
      subtitle: 'Jetbus 5 Pariwisata Terawat & Tangguh',
      location: 'Armada Wisata Antar Provinsi',
      image: '/kym.jpg',
      badge: 'KYM Trans'
    },
    {
      id: 17,
      category: 'armada',
      title: 'Skylander R22 Sutan Raya Bus',
      subtitle: 'Pilihan Mewah Rute Sumatera & Jawa',
      location: 'Armada Bus Sutan Raya',
      image: '/sutan_raya.jpg',
      badge: 'Sutan Raya'
    },
    {
      id: 18,
      category: 'armada',
      title: 'Medium Bus Wulyudza Tourista',
      subtitle: 'Armada Lincah & Ekonomis Rute Sumatera Barat',
      location: 'Medium Bus Wulyudza',
      image: '/wulyudza.jpg',
      badge: 'Wulyudza Tourista'
    },
    {
      id: 19,
      category: 'armada',
      title: 'Toyota Alphard HEV & Hiace Premio VIP',
      subtitle: 'Layanan VIP Transfer & Tour Minibus Eksekutif',
      location: 'Armada VIP Minibus',
      image: '/alphard.jpg',
      badge: 'Alphard VIP'
    }
  ];

  const filteredPhotos = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="bg-slate-50 text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER (Bayu Buana Style Header with Real Tour Photo Background) */}
      <div className="relative w-full h-[250px] sm:h-[320px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/gallery_sipisopiso.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/95" />

        <div className="relative z-10 text-center space-y-3 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-600/90 text-white font-extrabold text-[11px] uppercase tracking-widest mb-1 shadow-lg"
          >
            <Camera className="w-4 h-4 text-amber-300" />
            <span>GALERI DOKUMENTASI RESMI CV. ANUGRAH PARIWISATA</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight uppercase drop-shadow-lg"
          >
            Moment & Tour Gallery
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest"
          >
            <span onClick={onNavigateHome} className="hover:text-orange-400 cursor-pointer transition-colors">HOME</span> / GALLERY DOKUMENTASI
          </motion.p>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Subtitle Description */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37]">
            Dokumentasi Perjalanan & Keandalan Armada
          </h2>
          <div className="w-20 h-1 bg-[#f94a29] mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Momen kebersamaan peserta rombongan tour silaturahmi CV. Anugrah Pariwisata di berbagai destinasi favorit domestik & mancanegara (Sabang, Danau Toba, Bromo, Jam Gadang, Jakarta, Jogja, Lombok, Malaysia, Thailand) serta keandalan armada terawat.
          </p>
        </div>

        {/* Filter Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-2xl font-display font-extrabold text-xs uppercase transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#f94a29] text-white shadow-lg shadow-orange-600/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Semua Dokumentasi ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveFilter('gathering')}
            className={`px-6 py-3 rounded-2xl font-display font-extrabold text-xs uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeFilter === 'gathering'
                ? 'bg-[#f94a29] text-white shadow-lg shadow-orange-600/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Users className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Tour & Silaturahmi ({galleryItems.filter(i => i.category === 'gathering').length})</span>
          </button>
          <button
            onClick={() => setActiveFilter('armada')}
            className={`px-6 py-3 rounded-2xl font-display font-extrabold text-xs uppercase transition-all flex items-center gap-2 cursor-pointer ${
              activeFilter === 'armada'
                ? 'bg-[#f94a29] text-white shadow-lg shadow-orange-600/25 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Bus className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Armada Bus & Mobil ({galleryItems.filter(i => i.category === 'armada').length})</span>
          </button>
        </div>

        {/* Gallery Grid: Modern Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              key={item.id}
              onClick={() => setSelectedPhoto({ image: item.image, title: item.title, subtitle: item.subtitle, location: item.location })}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-slate-950 border border-slate-200/60"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Badge Tag */}
              <div className="absolute top-3.5 left-3.5 bg-[#f94a29] text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md z-10">
                {item.badge}
              </div>

              {/* Zoom Icon Floater */}
              <div className="absolute top-3.5 right-3.5 bg-white/90 p-2 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10">
                <ZoomIn className="w-4 h-4 text-[#f94a29]" />
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-1.5 z-10">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                  <span className="truncate">{item.location}</span>
                </div>
                
                <h3 className="font-display font-black text-lg text-white leading-tight group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-slate-300 font-medium line-clamp-2">
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
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-left"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-slate-700 shadow-md"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-slate-900 space-y-2 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="font-display font-black text-xl text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 font-medium">
                  {selectedPhoto.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
