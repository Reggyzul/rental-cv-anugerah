import React from 'react';
import { motion } from 'motion/react';
import { Route, ArrowRight, MapPin, Globe, Compass, Sparkles, Building2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (routeTitle: string) => {
    const waNumber = '6281234567890';
    const message = `Halo CV. Anugrah Pariwisata, saya berminat konsultasi paket tour untuk rute: ${routeTitle}. Mohon informasi jadwal, fasilitas hotel/restoran & penawaran terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const tourCategories = [
    {
      id: 'in-sumbar',
      title: 'Tour In Sumatera Barat',
      subtitle: 'Destinasi Wisata Ranah Minang',
      badge: 'Rute Domestik Sumbar',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      icon: MapPin,
      destinations: [
        'Padang (Pantai Air Manis, Kota Tua)',
        'Pesisir Selatan (Mandeh & Painan)',
        'Bukittinggi (Jam Gadang & Ngarai Sianok)',
        'Batusangkar (Istana Pasa Basa Pagaruyung)',
        'Payakumbuh (Lembah Harau)',
        'Alahan Panjang (Danau Diatas Dibawah)'
      ],
      description: 'Nikmati keindahan wisata alam, budaya, dan kuliner terpopuler di Sumatera Barat dengan bus pariwisata nyaman.'
    },
    {
      id: 'out-sumbar',
      title: 'Tour Out Sumatera Barat',
      subtitle: 'Destinasi Favorit Nusantara',
      badge: 'Rute Nusantara Domestik',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Compass,
      destinations: [
        'Danau Toba & Samosir',
        'Titik 0 Km Sabang Aceh',
        'Pekanbaru, Batam & P. Bintan',
        'P. Bangka & P. Belitung',
        'G. Bromo & Malang',
        'Bali, Lombok & Sumbawa',
        'Jogja, Bandung & Jakarta'
      ],
      description: 'Jelajahi berbagai keajaiban destinasi wisata unggulan Nusantara dengan bus eksekutif full fasilitas & kru ramah.'
    },
    {
      id: 'internasional',
      title: 'Tour Internasional',
      subtitle: 'Destinasi Mancanegara Popular',
      badge: 'Rute Mancanegara VIP',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Globe,
      destinations: [
        'Singapura (Universal Studio, Marina Bay)',
        'Malaysia (Kuala Lumpur, Genting)',
        'Thailand (Bangkok & Phuket)',
        'Korea Selatan (Seoul & Nami Island)',
        'Jepang (Tokyo & Mt. Fuji)',
        'Eropa & Amerika Serikat'
      ],
      description: 'Layanan tour internasional serba hemat dan praktis, mencakup tiket pesawat, hotel bintang, dan pendampingan Tour Leader.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="services-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Route className="w-4 h-4 text-orange-600" />
            <span>KATEGORI DESTINASI TOUR</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Rute Tour <span className="text-orange-600">CV. Anugrah Pariwisata</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Melayani perjalanan pariwisata In Sumatera Barat, Luar Sumatera Barat (Nusantara), hingga Internasional.
          </p>
        </div>

        {/* 3 Categories Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourCategories.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
              >
                <div className="space-y-5">
                  
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                    <IconComponent className="w-5 h-5 text-orange-600 opacity-80" />
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-[#0f172a] group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-orange-600 font-extrabold uppercase tracking-wide mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  {/* Destination List */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-500 block">Destinasi Populer:</span>
                    <div className="space-y-1.5">
                      {item.destinations.map((dest, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                          <span>{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Button */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <button
                    onClick={() => handleWhatsAppBooking(item.title)}
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Konsultasi Paket WA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
