import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Compass, Award, CheckCircle2, Bus, Hotel, Utensils, Music, Coffee, Building2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 bg-slate-50 text-[#0d1b37] overflow-hidden relative border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* SECTION HEADER (Bayu Buana Style) */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="about-heading">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0d1b37] tracking-tight leading-tight">
            About CV. Anugrah Pariwisata
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            "WISATA HEMAT BERSAMA TRAVEL HEBAT" — Perusahaan Tour & Travel Pariwisata No. 1 di Padang, Sumatera Barat & Indonesia.
          </p>
        </div>

        {/* 2-COLUMN VISION & MISSION CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: VISI PERUSAHAAN (3 POINTS) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-8 shadow-xl border border-slate-700/60 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">VISI UTAMA</span>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                    CV. ANUGRAH PARIWISATA
                  </h3>
                </div>
              </div>

              {/* 3 Point Vision */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f94a29] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    Menjadikan perusahaan tour & travel terbaik dibidang pelayanan pariwisata di Indonesia.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f94a29] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    Menjadikan perusahaan tour & travel terbaik yang berskala internasional.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f94a29] text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <p className="font-sans text-xs text-slate-200 leading-relaxed font-medium">
                    Menjadikan Perusahaan no 1 di Padang, Sumatera Barat & di Indonesia dalam tour Pariwisata.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 text-center">
              <span className="font-display font-extrabold text-xs text-amber-400 tracking-wider uppercase block">
                MOTO: Wisata Hemat dengan Travel Hebat
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: MISI UTAMA PERUSAHAAN (7 POINTS) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#f94a29]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f94a29] block">7 MISI UTAMA</span>
                  <h3 className="font-display font-black text-xl text-[#0d1b37] uppercase tracking-tight">
                    Komitmen Pelayanan Pariwisata
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
                  <Bus className="w-4 h-4 text-[#f94a29] shrink-0" />
                  <span>4. Transportasi tour Fasilitas Lengkap: Bus Full AC, Toilet bersih, Full Karaoke, Selimut & Bantal.</span>
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
                  <span>7. Memberikan destinasi-destinasi wisata yang Indah & Cantik di Indonesia & luar negeri.</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
