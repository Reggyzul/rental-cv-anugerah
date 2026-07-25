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
    const message = `Halo CV. Anugrah Pariwisata, saya ingin berkonsultasi mengenai rute tour: ${routeTitle}. Mohon informasi penawaran fasilitas hotel, restoran & harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const tourCategories = [
    {
      id: 'in-sumbar',
      title: 'In Sumatera Barat',
      subtitle: 'Destinasi Pariwisata Sumbar',
      badge: 'Rute Domestik Sumbar',
      badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
      icon: MapPin,
      destinations: [
        '1. Padang',
        '2. Pesisir Selatan',
        '3. Bukittinggi',
        '4. Batu Sangkar',
        '5. Payakumbuh',
        '6. Alahan Panjang',
        '7. Dll.'
      ],
      description: 'Menikmati keindahan destinasi wisata alam & sejarah Sumatera Barat bersama fasilitas hotel & restoran terbaik.'
    },
    {
      id: 'out-sumbar',
      title: 'Out Sumatera Barat',
      subtitle: 'Destinasi Favorit Nusantara',
      badge: 'Rute Nusantara Domestik',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Compass,
      destinations: [
        '1. Danau Toba',
        '2. Titik O Km Sabang Aceh',
        '3. Pekanbaru & Batam',
        '4. P. Bintan, P. Bangka & P. Belitung',
        '5. Lombok & Bali',
        '6. Malang & G.Bromo',
        '7. Jogja, Bandung, Jakarta & Sumbawa'
      ],
      description: 'Menyediakan tour perjalanan antar provinsi & pulau terlengkap dengan armada Big Bus Eksekutif & kru ramah.'
    },
    {
      id: 'internasional',
      title: 'Internasional',
      subtitle: 'Destinasi Mancanegara Popular',
      badge: 'Rute Mancanegara VIP',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: Globe,
      destinations: [
        '1. Singapura',
        '2. Malaysia',
        '3. Thailand',
        '4. Korea',
        '5. Jepang',
        '6. Eropa',
        '7. Amerika'
      ],
      description: 'Layanan tour internasional terpercaya berskala global dengan penanganan visa, hotel, dan Tour Leader berpengalaman.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white text-[#0d1b37] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="services-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-wider uppercase shadow-xs">
            <Route className="w-4 h-4 text-orange-600" />
            <span>RUTE TOUR PARIWISATA</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0d1b37] tracking-tight uppercase leading-tight">
            Rute Tour <span className="text-orange-600">CV. Anugrah Pariwisata</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Memberikan tempat-tempat destinasi wisata yang Indah & Cantik di Indonesia maupun luar negeri.
          </p>
        </div>

        {/* 3 Tour Categories Cards */}
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
                    <h3 className="font-display font-black text-2xl text-[#0d1b37] group-hover:text-orange-600 transition-colors">
                      Rute {item.title}
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
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-500 block">Destinasi Pilihan:</span>
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
                    <span>Konsultasi Rute WA</span>
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
