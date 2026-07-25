import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Globe, Star, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface DestinationHighlightsPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function DestinationHighlightsPage({ lang, onNavigateHome }: DestinationHighlightsPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sumbar' | 'nusantara' | 'internasional'>('all');
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (highlightTitle: string) => {
    const waNumber = '6281234567890';
    const message = `Halo CV. Anugrah Pariwisata, saya berminat dengan Destination Highlight: ${highlightTitle}. Mohon informasi jadwal tour, fasilitas hotel/restoran, & penawaran terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const highlights = [
    // SUMATERA BARAT HIGHLIGHTS
    {
      id: 'bukittinggi',
      title: 'Jam Gadang & Ngarai Sianok',
      location: 'Bukittinggi, Sumatera Barat',
      category: 'sumbar',
      rating: 4.9,
      reviews: 142,
      badge: 'Must Visit Sumbar',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      description: 'Pesona Jam Gadang bersejarah dan keindahan tebing terjal Ngarai Sianok yang menakjubkan.'
    },
    {
      id: 'mandeh',
      title: 'Kawasan Wisata Mandeh & Painan',
      location: 'Pesisir Selatan, Sumatera Barat',
      category: 'sumbar',
      rating: 4.9,
      reviews: 128,
      badge: 'Raja Ampat Sumbar',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      description: 'Gugusan pulau eksotis dengan perairan tenang dan pemandangan laut kelas dunia.'
    },
    {
      id: 'pagaruyung',
      title: 'Istana Basa Pagaruyung',
      location: 'Batusangkar, Sumatera Barat',
      category: 'sumbar',
      rating: 4.8,
      reviews: 110,
      badge: 'Wisata Budaya Minang',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800',
      description: 'Rumah gadang kemegahan adat dan sejarah Minangkabau di Batusangkar.'
    },
    {
      id: 'harau',
      title: 'Lembah Harau & Kelok 9',
      location: 'Payakumbuh, Sumatera Barat',
      category: 'sumbar',
      rating: 4.9,
      reviews: 135,
      badge: 'Nature & Landmark',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
      description: 'Lembah tebing granit menjulang tinggi dan jembatan ikonik Kelok 9.'
    },
    {
      id: 'ahan-panjang',
      title: 'Danau Diatas & Danau Dibawah',
      location: 'Alahan Panjang, Sumatera Barat',
      category: 'sumbar',
      rating: 4.8,
      reviews: 95,
      badge: 'Danau Kembar Sejuk',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      description: 'Nikmati suasana pegunungan sejuk ala Swiss di Alahan Panjang dengan dua danau berdampingan.'
    },

    // NUSANTARA HIGHLIGHTS
    {
      id: 'toba',
      title: 'Danau Toba & Pulau Samosir',
      location: 'Sumatera Utara',
      category: 'nusantara',
      rating: 4.9,
      reviews: 150,
      badge: 'Danau Vulkanik Terbesar',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      description: 'Danau vulkanik spektakuler dengan kebudayaan Batak yang kaya di Pulau Samosir.'
    },
    {
      id: 'sabang',
      title: 'Titik 0 Km Sabang Aceh',
      location: 'Sabang, Aceh',
      category: 'nusantara',
      rating: 4.9,
      reviews: 118,
      badge: 'Ujung Barat Indonesia',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      description: 'Tugu ikonik Titik Nol Kilometer Indonesia dengan keindahan bahari Sabang.'
    },
    {
      id: 'bromo',
      title: 'Gunung Bromo & Batu Malang',
      location: 'Jawa Timur',
      category: 'nusantara',
      rating: 5.0,
      reviews: 180,
      badge: 'Sunrise Popular',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
      description: 'Sensasi lautan pasir Bromo, jeep tour, dan udara segar pegunungan Batu Malang.'
    },
    {
      id: 'bali',
      title: 'Pulau Bali & Lombok Sumbawa',
      location: 'Bali & NTB',
      category: 'nusantara',
      rating: 5.0,
      reviews: 210,
      badge: 'World Class Paradise',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      description: 'Pesona pantai pasir putih, pura magis, dan keindahan Gili Trawangan.'
    },

    // INTERNASIONAL HIGHLIGHTS
    {
      id: 'singapura',
      title: 'Singapura & Universal Studio',
      location: 'Singapura',
      category: 'internasional',
      rating: 4.9,
      reviews: 165,
      badge: 'Modern Metropolis',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=800',
      description: 'Jewel Changi, Merlion Park, Marina Bay Sands, & keseruan Universal Studios.'
    },
    {
      id: 'malaysia',
      title: 'Kuala Lumpur & Genting Highlands',
      location: 'Malaysia',
      category: 'internasional',
      rating: 4.8,
      reviews: 140,
      badge: 'Twin Towers & Cable Car',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
      description: 'Menara Kembar Petronas, Batu Caves, & resort dingin Genting Highlands.'
    },
    {
      id: 'jepang',
      title: 'Tokyo & Mt. Fuji Sakura',
      location: 'Jepang',
      category: 'internasional',
      rating: 5.0,
      reviews: 195,
      badge: 'Land of Rising Sun',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
      description: 'Keindahan bunga Sakura, keagungan Gunung Fuji, & modernitas kota Tokyo.'
    }
  ];

  const filteredHighlights = highlights.filter(h => {
    if (activeCategory === 'all') return true;
    return h.category === activeCategory;
  });

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER (Bayu Buana Travel Style) */}
      <div className="relative w-full h-[220px] sm:h-[280px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

        <div className="relative z-10 text-center space-y-2 px-4">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Destination Highlights
          </h1>
          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-orange-400 cursor-pointer">HOME</span> / DESTINATION HIGHLIGHTS
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0d1b37] tracking-tight leading-tight">
            Spot Wisata Pilihan CV. Anugrah Pariwisata
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            Temukan berbagai tempat destinasi wisata impian yang Indah & Cantik di Sumatera Barat, Nusantara & Internasional.
          </p>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Semua Highlights
            </button>
            <button
              onClick={() => setActiveCategory('sumbar')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'sumbar'
                  ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              In Sumatera Barat
            </button>
            <button
              onClick={() => setActiveCategory('nusantara')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'nusantara'
                  ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Out Sumbar (Nusantara)
            </button>
            <button
              onClick={() => setActiveCategory('internasional')}
              className={`px-4 py-2 rounded-full font-display font-extrabold text-xs transition-all cursor-pointer ${
                activeCategory === 'internasional'
                  ? 'bg-[#f94a29] text-white shadow-md shadow-orange-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Internasional
            </button>
          </div>
        </div>

        {/* HIGHLIGHTS GRID CARDS (Bayu Buana Style Cards with Gold Bar & Bottom Overlay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHighlights.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div className="space-y-4">
                
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badge Tag */}
                  <div className="absolute top-3 left-3 bg-[#f94a29] text-white font-display font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 text-slate-900 font-sans text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span>{item.rating} ({item.reviews})</span>
                  </div>

                  {/* Title Overlay on Photo */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-amber-400 rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-5 pt-1 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#f94a29] shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleWhatsAppBooking(item.title)}
                  className="w-full bg-[#f94a29] hover:bg-[#e03d1e] text-white font-sans font-bold text-xs uppercase py-3 px-4 rounded-xl shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Konsultasi Highlight WA</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
