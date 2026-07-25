import React from 'react';
import { MapPin, Phone, Mail, Compass, Award, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  lang: 'ID' | 'EN';
  onNavigateSection: (sectionId: string) => void;
}

export default function Footer({ lang, onNavigateSection }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="footer-contact" className="bg-slate-950 text-white pt-16 pb-12 overflow-hidden relative border-t border-slate-800">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Box */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/80 shadow-2xl mb-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 text-left space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400 bg-orange-950/80 px-3 py-1 rounded-full border border-orange-800/50">
              KONSULTASI GRATIS 24/7
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Rencanakan Tour Impian Anda Bersama Kami
            </h3>
            <p className="font-sans text-xs text-slate-300 font-medium max-w-xl leading-relaxed">
              Dapatkan penawaran paket tour pariwisata hemat dengan armada bus eksekutif & pelayanan terbaik.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <a
              href="https://api.whatsapp.com/send?phone=6281234567890&text=Halo%20CV.%20Anugrah%20Pariwisata,%20saya%20ingin%20konsultasi%20paket%20tour%20dan%20sewa%20armada"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:to-amber-700 text-white font-sans font-bold text-xs uppercase px-7 py-4 rounded-full shadow-lg shadow-red-600/25 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 0812-3456-7890</span>
            </a>
          </div>
        </div>

        {/* Core Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left border-b border-slate-800/80 pb-12">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white font-black font-display text-xl shadow-lg shadow-red-600/20 shrink-0">
                AP
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white uppercase block">
                  CV. ANUGRAH <span className="text-red-500">PARIWISATA</span>
                </span>
                <span className="font-sans text-[10px] font-bold text-red-400 tracking-wider block mt-0.5">
                  WISATA HEMAT BERSAMA TRAVEL HEBAT
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-md font-medium">
              Perusahaan Tour & Travel Pariwisata No. 1 di Padang, Sumatera Barat & Indonesia. Melayani tour domestik, luar provinsi, dan luar negeri dengan armada bus eksekutif full fasilitas.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] font-extrabold text-red-400 uppercase tracking-wider block">MOTTO PERUSAHAAN</span>
              <p className="font-sans text-xs text-slate-300 italic">
                "Wisata Hemat dengan Travel Hebat"
              </p>
            </div>
          </div>

          {/* Column 2: Official Addresses */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-red-500 tracking-wider">
              Alamat Kantor Resmi
            </h4>

            {/* Kantor Pusat */}
            <div className="space-y-1.5 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Kantor Pusat:</span>
                  <span className="text-slate-400 leading-relaxed block">
                    Jl. Rimbo Panjang, Kampung Laban No. 053, Salido Painan, Kec. IV Jurai, Kab. Pesisir Selatan, Prov. Sumatera Barat
                  </span>
                </div>
              </div>
            </div>

            {/* Kantor Cabang */}
            <div className="space-y-1.5 text-xs text-slate-300 font-medium pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Kantor Cabang:</span>
                  <span className="text-slate-400 leading-relaxed block">
                    Jl. Andalas I No. 48 F, Kec. Padang Timur, Kodya Padang, Prov. Sumatera Barat
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-black text-sm uppercase text-red-500 tracking-wider">
              Navigasi Cepat
            </h4>

            <div className="space-y-2 text-xs text-slate-400 font-medium">
              <button
                onClick={() => onNavigateSection('home')}
                className="block hover:text-red-400 transition-colors text-left"
              >
                ➔ Beranda Utama
              </button>
              <button
                onClick={() => onNavigateSection('about')}
                className="block hover:text-red-400 transition-colors text-left"
              >
                ➔ Profil & Visi Misi
              </button>
              <button
                onClick={() => onNavigateSection('services')}
                className="block hover:text-red-400 transition-colors text-left"
              >
                ➔ Rute Destinasi Tour
              </button>
              <button
                onClick={() => onNavigateSection('package-tour')}
                className="block hover:text-red-400 transition-colors text-left"
              >
                ➔ Paket Tour Perjalanan (5 Tour)
              </button>
              <button
                onClick={() => onNavigateSection('cars')}
                className="block hover:text-red-400 transition-colors text-left"
              >
                ➔ Katalog Armada Bus & Mobil
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <p>© 2026 CV. ANUGRAH PARIWISATA. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Wisata Hemat bersama Travel Hebat</span>
          </p>
        </div>

      </div>
    </footer>
  );
}


