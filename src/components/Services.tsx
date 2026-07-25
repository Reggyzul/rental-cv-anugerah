import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowRight, MapPin, Globe, Bus } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (routeTitle: string) => {
    const waNumber = '6281234567890';
    const message = `Halo CV. Anugrah Pariwisata, saya berminat berkonsultasi rute destinasi: ${routeTitle}. Mohon informasi penawaran hotel, restoran & harga terbaik. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const destinationsList = [
    {
      id: 'in-sumbar',
      title: 'In Sumatera Barat',
      sublabel: '7 Destinasi Sumbar',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      destinationsText: 'Padang, Pesisir Selatan, Bukittinggi, Batu Sangkar, Payakumbuh, Alahan Panjang, Dll.'
    },
    {
      id: 'out-sumbar',
      title: 'Out Sumatera Barat',
      sublabel: '15 Destinasi Nusantara',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      destinationsText: 'Danau Toba, Titik O Km Sabang Aceh, Pekanbaru, Batam, P. Bintan, P. Bangka, P. Belitung, Lombok, Bali, Malang, G.Bromo, Jogja, Bandung, Jakarta, Sumbawa.'
    },
    {
      id: 'asia',
      title: 'Internasional (Asia)',
      sublabel: '5 Negara Asia Favorit',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800',
      destinationsText: 'Singapura, Malaysia, Thailand, Korea, Jepang'
    },
    {
      id: 'eropa',
      title: 'Internasional (Eropa & Amerika)',
      sublabel: '2 Benua Mancanegara',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
      destinationsText: 'Eropa & Amerika'
    },
    {
      id: 'bus-rent',
      title: 'Big Bus Eksekutif & Medium',
      sublabel: '6 Armada Bus Pariwisata',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
      destinationsText: 'Zivanes, Nyaman Holiday, Miyor, KYM, Sutan Raya, Wulyudza'
    },
    {
      id: 'car-rent',
      title: 'Hiace & Mobil Mini Bus',
      sublabel: '8 Armada Mobil Rental',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      destinationsText: 'Hiace Premio, Commuter, Alphard, Innova, Avanza, Xenia, Calya, Sigra'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white text-[#0d1b37] overflow-hidden relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER (Exact Bayu Buana Screenshot 2 & 3 Title Style) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3" id="services-heading">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight">
            Destinations
          </h2>

          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Jelajahi beragam destinasi menakjubkan di Sumatera Barat, Nusantara & Mancanegara dan rasakan pesona setiap perjalanan yang tak terlupakan bersama #CVAnugrahPariwisata!
          </p>
        </div>

        {/* DESTINATIONS GRID CARDS (Exact Screenshot 2 & 3 Layout, Gold Underline Bar & Bottom Overlay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationsList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={item.id}
              onClick={() => handleWhatsAppBooking(item.title)}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer aspect-[16/11] bg-slate-900 border border-slate-200/80 text-left"
            >
              {/* Photo Background */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
              />

              {/* Dark Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Card Bottom Text Block (Exact Screenshot 2 & 3 Overlay Style) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 z-10">
                <h3 className="font-display font-black text-2xl text-white tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Gold Accent Underline Bar (Exact Screenshot 2 & 3 Style) */}
                <div className="w-16 h-1 bg-amber-400 rounded-full group-hover:w-28 transition-all duration-500" />

                {/* Sub-label count */}
                <p className="font-sans text-xs font-semibold text-slate-300 tracking-wide pt-0.5">
                  {item.sublabel} • <span className="text-amber-300 font-bold">{item.destinationsText}</span>
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
