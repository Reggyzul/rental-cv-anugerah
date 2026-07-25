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
              href="https://api.whatsapp.com/send?phone=6282178284459&text=Halo%20CV.%20Anugrah%20Pariwisata,%20saya%20ingin%20konsultasi%20paket%20tour%20dan%20sewa%20armada"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:to-amber-700 text-white font-sans font-bold text-xs uppercase px-7 py-4 rounded-full shadow-lg shadow-red-600/25 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 0821-7828-4459</span>
            </a>
          </div>
        </div>

        {/* Core Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left border-b border-slate-800/80 pb-12">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo_original.jpg"
                alt="CV. Anugrah Pariwisata Logo"
                className="h-14 w-auto object-contain rounded-lg bg-white p-1 shadow-md shrink-0"
              />
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
                    Jl. Rimbo Panjang, Kampung Laban No. 052, Salido Painan, Kec. IV Jurai, Kab. Pesisir Selatan, Prov. Sumatera Barat
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
                ➔ Paket Tour Perjalanan
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

        {/* VERY BOTTOM COPYRIGHT & SOCIAL MEDIA BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          
          {/* Left: Logo & Copyright Text */}
          <div className="flex items-center gap-3">
            <img
              src="/logo_original.jpg"
              alt="CV. Anugrah Pariwisata"
              className="h-8 w-auto object-contain rounded bg-white p-0.5 shadow-xs shrink-0"
            />
            <span>© 2026 CV. ANUGRAH PARIWISATA. All rights reserved.</span>
          </div>

          {/* Center/Right: OFFICIAL SOCIAL MEDIA BUTTONS IN BOTTOM BAR */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 shrink-0">
              Ikuti Kami:
            </span>

            <div className="flex items-center gap-2">
              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/share/1CvHKVWo8t/"
                target="_blank"
                rel="noreferrer"
                title="Facebook Resmi CV. Anugrah Pariwisata"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-slate-800 hover:border-[#1877F2] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/wahyudaanggaraanugrah?igsh=MWk1eWE0MTMxeG95MA=="
                target="_blank"
                rel="noreferrer"
                title="Instagram Official @wahyudaanggaraanugrah"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-600 hover:to-purple-600 text-slate-300 hover:text-white border border-slate-800 hover:border-pink-500 flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok Button */}
              <a
                href="https://www.tiktok.com/@anugrahpariwisatac?_r=1&_t=ZS-98Jppe9Fy36"
                target="_blank"
                rel="noreferrer"
                title="TikTok Official @anugrahpariwisatac"
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-black text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 0 0-5.11 2.5 6.34 6.34 0 0 0 1 8.87 6.34 6.34 0 0 0 8.7-1.39V10.2a8.27 8.27 0 0 0 5.52 2.1V8.85a4.8 4.8 0 0 1-3-2.16z" />
                </svg>
              </a>
            </div>
          </div>

          <p className="flex items-center gap-1 text-slate-500">
            <span>Wisata Hemat bersama Travel Hebat</span>
          </p>
        </div>

      </div>
    </footer>
  );
}


