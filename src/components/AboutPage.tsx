import React from 'react';
import { motion } from 'motion/react';
import { Check, MapPin, Phone, Award, ShieldCheck, Bus } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome: () => void;
}

export default function AboutPage({ lang, onNavigateHome }: AboutPageProps) {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-white text-[#0d1b37] min-h-screen pt-20 text-left">
      
      {/* 1. TOP HEADER BANNER (Exact Bayu Buana Screenshot 1 Style) */}
      <div className="relative w-full h-[220px] sm:h-[280px] bg-slate-950 text-white overflow-hidden flex items-center justify-center">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

        {/* Center Text Overlay */}
        <div className="relative z-10 text-center space-y-2 px-4">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            About Us
          </h1>
          <p className="font-sans text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span onClick={onNavigateHome} className="hover:text-orange-400 cursor-pointer">HOME</span> / ABOUT US
          </p>
        </div>
      </div>

      {/* MAIN CONTAINER CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* SECTION 1: ABOUT OUR COMPANY */}
        <section className="space-y-6">
          <span 
            className="font-serif italic text-2xl sm:text-3xl text-[#ff6b52] block"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            About Our Company
          </span>

          <div className="space-y-3.5 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
            
            {/* Visi Perusahaan */}
            <div className="flex items-start gap-3">
              <span className="text-[#f94a29] font-black text-base shrink-0 mt-0.5">✓</span>
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">Visi Perusahaan:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Menjadikan perusahaan tour & travel terbaik dibidang pelayanan pariwisata di Indonesia.</li>
                  <li>Menjadikan perusahaan tour & travel terbaik yang berskala internasional.</li>
                  <li>Menjadikan Perusahaan no 1 di Padang, Sumatera Barat & di Indonesia dalam tour Pariwisata.</li>
                </ul>
              </div>
            </div>

            {/* Misi Perusahaan */}
            <div className="flex items-start gap-3 pt-2">
              <span className="text-[#f94a29] font-black text-base shrink-0 mt-0.5">✓</span>
              <div className="space-y-1">
                <span className="font-bold text-slate-900 block">Misi Perusahaan:</span>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Memberikan Pelayanan yang terbaik dalam tour Pariwisata.</li>
                  <li>Mengutamakan keselamatan & kenyamanan Peserta tour.</li>
                  <li>Memberikan Harga Hemat & Ekonomis untuk tour.</li>
                  <li>Menyediakan Transportasi tour dengan Fasilitas Lengkap: Bus Full AC, Toilet bersih, Full Karaoke, Selimut & Bantal.</li>
                  <li>Memberikan Tour Leader & Kru Tour yang ramah dalam pelayanan ketika tour.</li>
                  <li>Memberikan fasilitas lainnya seperti Hotel & Restoran yang terbaik.</li>
                  <li>Memberikan tempat-tempat Destinasi wisata yang Indah & Cantik di Indonesia & luar negeri.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: SCOPE OF SERVICES */}
        <section className="space-y-8 border-t border-slate-100 pt-12">
          <span 
            className="font-serif italic text-2xl sm:text-3xl text-[#ff6b52] block"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            Scope of Services
          </span>

          {/* Service Block 1 */}
          <div className="space-y-3 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0d1b37]">
              Layanan Destinasi Tour Pariwisata
            </h3>
            <p>
              CV. Anugrah Pariwisata melayani rute perjalanan pariwisata terlengkap mencakup:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 font-medium">
              <li><strong>Rute In Sumatera Barat:</strong> Padang, Pesisir Selatan, Bukittinggi, Batu Sangkar, Payakumbuh, Alahan Panjang, dll.</li>
              <li><strong>Rute Out Sumatera Barat (Nusantara):</strong> Danau Toba, Titik O Km Sabang Aceh, Pekanbaru, Batam, P. Bintan, P. Bangka, P. Belitung, Lombok, Bali, Malang, G.Bromo, Jogja, Bandung, Jakarta, Sumbawa.</li>
              <li><strong>Rute Internasional:</strong> Singapura, Malaysia, Thailand, Korea, Jepang, Eropa, Amerika.</li>
            </ul>
          </div>

          {/* Service Block 2 */}
          <div className="space-y-3 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed pt-4">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0d1b37]">
              Human Resources & Tour Leader
            </h3>
            <p>
              Seluruh perjalanan tour didampingi oleh Tour Leader & kru tour yang sangat ramah, berpengalaman, serta paham betul karakteristik setiap destinasi wisata. Pengemudi kami berlisensi profesional dan mengutamakan keselamatan peserta tour di setiap perjalanan.
            </p>
          </div>
        </section>

        {/* SECTION 3: NETWORK & FLEET SERVICES */}
        <section className="space-y-8 border-t border-slate-100 pt-12">
          <span 
            className="font-serif italic text-2xl sm:text-3xl text-[#ff6b52] block"
            style={{ fontFamily: "'Great Vibes', cursive, serif" }}
          >
            Network of Service Coverage Both Domestically and Worldwide
          </span>

          <h3 className="font-display font-bold text-xl text-[#0d1b37]">
            Anugrah Pariwisata Network
          </h3>

          <div className="space-y-6 text-xs sm:text-sm font-sans text-slate-700 leading-relaxed">
            
            {/* Travel Document */}
            <div className="space-y-1">
              <h4 className="font-display font-bold text-base text-[#0d1b37]">
                Travel Document Arrangement
              </h4>
              <p className="text-slate-600">
                Konsultasi & bantuan kelengkapan dokumen perjalanan untuk tour domestik maupun luar negeri.
              </p>
            </div>

            {/* Rent Car & Bus */}
            <div className="space-y-1 pt-2">
              <h4 className="font-display font-bold text-base text-[#0d1b37]">
                Transport Rent (Big Bus, Hiace & Mini Bus Rental)
              </h4>
              <p className="text-slate-600">
                Menyediakan armada rental transportasi terawat dengan fasilitas Full AC, Toilet bersih, Full Karaoke, Selimut & Bantal untuk seluruh rute wisata domestik & mancanegara.
              </p>
            </div>

            {/* Reporting System */}
            <div className="space-y-1 pt-2">
              <h4 className="font-display font-bold text-base text-[#0d1b37]">
                Reporting System
              </h4>
              <p className="text-slate-600">
                Sistem rincian itinerary, fasilitas hotel, restoran, dan penawaran transparan untuk perjalanan dinas, instansi, maupun gathering perusahaan.
              </p>
            </div>

            {/* Airport Assistance */}
            <div className="space-y-1 pt-2">
              <h4 className="font-display font-bold text-base text-[#0d1b37]">
                Airport Assistance Arrangement
              </h4>
              <p className="text-slate-600">
                Layanan penjemputan & pengantaran tepat waktu di Bandara Internasional Minangkabau (BIM) Padang maupun bandara di seluruh destinasi.
              </p>
            </div>

            {/* 24-Hour Emergency Services */}
            <div className="space-y-1 pt-2">
              <h4 className="font-display font-bold text-base text-[#0d1b37]">
                24-Hour Emergency Services
              </h4>
              <p className="text-slate-600">
                Layanan fast response WhatsApp official 24 jam untuk reservasi & bantuan perjalanan.
              </p>
            </div>

            {/* Experienced */}
            <div className="space-y-1 pt-2">
              <h4 className="font-display font-bold text-base text-[#0d1b37]">
                Experienced & Trusted
              </h4>
              <p className="text-slate-600">
                Berpengalaman melayani ribuan peserta tour pariwisata di Sumatera Barat, Nusantara, hingga manca negara dengan tingkat kepuasan tinggi.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
