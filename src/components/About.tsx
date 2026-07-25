import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Compass, Award, CheckCircle2, HeartHandshake, Bus, Hotel, Utensils, Music, Tv, Coffee } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Subtle Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-display font-extrabold text-xs tracking-widest uppercase shadow-sm"
          >
            <Compass className="w-4 h-4 text-orange-600" />
            <span>PROFIL & VISI MISI PERUSAHAAN</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight"
          >
            CV. ANUGRAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">PARIWISATA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto"
          >
            "WISATA HEMAT BERSAMA TRAVEL HEBAT" — Penyedia Layanan Tour & Travel Pariwisata No. 1 di Padang, Sumatera Barat & Indonesia.
          </motion.p>
        </div>

        {/* 2-COLUMN VISION & MISSION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: VISI PERUSAHAAN */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-2xl border border-slate-700/60 flex flex-col justify-between relative overflow-hidden text-left"
          >
            <div className="space-y-6 relative z-10">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-400 block">VISI UTAMA</span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    CV. ANUGRAH PARIWISATA
                  </h3>
                </div>
              </div>

              {/* 3 Point Vision */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    Menjadikan perusahaan tour & travel terbaik dibidang pelayanan pariwisata di Indonesia.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    Menjadikan perusahaan tour & travel terbaik yang berskala internasional.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    Menjadikan Perusahaan no 1 di Padang, Sumatera Barat & di Indonesia dalam tour Pariwisata.
                  </p>
                </div>
              </div>

            </div>

            {/* Motto Footnote */}
            <div className="pt-6 mt-6 border-t border-slate-800 text-center relative z-10">
              <span className="font-display font-extrabold text-xs text-orange-400 tracking-wider uppercase block">
                MOTO: Wisata Hemat dengan Travel Hebat
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: MISI PERUSAHAAN (7 POINTS) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 shadow-xl flex flex-col justify-between text-left space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600 block">7 MISI PELAYANAN</span>
                  <h3 className="font-display font-black text-xl text-[#0f172a] uppercase tracking-tight">
                    Komitmen Kualitas Tour
                  </h3>
                </div>
              </div>

              {/* 7 Missions List */}
              <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1. Memberikan Pelayanan yang terbaik dalam tour Pariwisata.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2. Mengutamakan keselamatan & kenyamanan Peserta tour.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3. Memberikan Harga Hemat & Ekonomis untuk tour.</span>
                </div>
                <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200 flex items-center gap-3 font-semibold text-orange-950">
                  <Bus className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>4. Armada/Transportasi tour Fasilitas Lengkap: Bus Full AC, Toilet Bersih, Full Karaoke, Selimut & Bantal.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>5. Memberikan Tour Leader & Kru Tour yang ramah dalam pelayanan ketika tour.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <Hotel className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>6. Memberikan fasilitas lainnya seperti Hotel & Restoran yang terbaik.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>7. Memberikan destinasi-destinasi wisata yang Indah & Cantik di Indonesia & Luar Negeri.</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* FLEET AMENITIES SHOWCASE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 font-bold">
              AC
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#0f172a] block">Bus Full AC</span>
              <span className="text-[10px] text-slate-500 font-medium block">Kabin sejuk merata</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#0f172a] block">Toilet Bersih</span>
              <span className="text-[10px] text-slate-500 font-medium block">Higienis di dalam bus</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#0f172a] block">Full Karaoke</span>
              <span className="text-[10px] text-slate-500 font-medium block">Sound system jernih</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#0f172a] block">Selimut & Bantal</span>
              <span className="text-[10px] text-slate-500 font-medium block">Istirahat hangat & nyaman</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
