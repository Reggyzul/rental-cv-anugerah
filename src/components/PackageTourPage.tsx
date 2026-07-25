import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TOUR_PACKAGES, TourPackage, TourTier } from '../data/packages';
import { MapPin, Calendar, Bus, ArrowRight, X, Check, ShieldCheck, MessageCircle, Sparkles, AlertCircle, Info, ChevronRight } from 'lucide-react';

interface PackageTourPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome?: () => void;
}

export default function PackageTourPage({ lang, onNavigateHome }: PackageTourPageProps) {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedTier, setSelectedTier] = useState<TourTier | null>(null);

  const handleOpenModal = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setSelectedTier(pkg.tiers[0]);
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
    setSelectedTier(null);
  };

  const handleWhatsAppBooking = (pkg: TourPackage, tier: TourTier) => {
    const waNumber = '6281234567890';
    const message = `Halo CV. Anugrah Pariwisata, saya ingin reservasi/konsultasi mengenai paket tour:\n\n📌 *${pkg.title}* (${pkg.duration})\n🚌 *Pilihan Bus*: ${tier.busType} (${tier.capacity})\n💰 *Biaya*: ${tier.pricePerPerson}/org\n🏨 *Hotel*: ${tier.hotelDetails}\n📍 *Rute*: ${pkg.routeDisplay}\n\nMohon informasi ketersediaan jadwal & mekanisme pemesanan. Terima kasih!`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-xl relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paket Tour Perjalanan Resmi</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white drop-shadow-md">
            PAKET TOUR SPESIAL NUSANTARA
          </h1>
          <p className="font-sans text-white/90 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Jelajahi destinasi impian di Indonesia bersama armada Big Bus Eksekutif & VIP Legrest CV. Anugrah Pariwisata dengan akomodasi hotel terbaik.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-black uppercase px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display font-black text-xl tracking-tight uppercase drop-shadow-md">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 text-left">
                  {/* Route Summary */}
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">
                      Rute Utama Perjalanan
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.route.map((city, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3 text-red-600" />
                          <span>{city}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers Preview */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-500">Pilihan Bus:</span>
                      <span className="font-extrabold text-slate-800">Big Bus Eksekutif & VIP</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Mulai Dari:</span>
                      <span className="font-display font-black text-lg text-red-600">
                        {pkg.minPrice} <span className="text-xs font-normal text-slate-500">/ org</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenModal(pkg)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-display font-extrabold text-xs uppercase py-3.5 px-4 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer group-hover:bg-red-600"
                >
                  <span>Lihat Detail Paket & Biaya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BUBBLE DETAIL MODAL */}
      <AnimatePresence>
        {selectedPackage && selectedTier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Glassmorphism Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Bubble Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 text-left max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-slate-900 text-white p-6 sm:p-8 shrink-0">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 pr-10">
                  <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3" />
                    <span>Durasi Tour: {selectedPackage.duration}</span>
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    {selectedPackage.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-white/90 font-medium">
                    <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Rute: {selectedPackage.routeDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body - Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
                
                {/* 1. BUS TIER SELECTION (CARDS BUBBLE) */}
                <div>
                  <h3 className="font-display font-black text-base uppercase text-slate-900 tracking-wide mb-3 flex items-center gap-2">
                    <Bus className="w-5 h-5 text-red-600" />
                    <span>PILIH TIPE ARMADA BUS & AKOMODASI HOTEL</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedPackage.tiers.map((tier, idx) => {
                      const isSelected = selectedTier.busType === tier.busType;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedTier(tier)}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                            isSelected
                              ? 'border-red-600 bg-red-50/60 shadow-md ring-2 ring-red-600/20'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                              Dipilih
                            </span>
                          )}

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs font-bold text-slate-500 uppercase block">Kategori Bus</span>
                              <h4 className="font-display font-black text-lg text-slate-900">
                                {tier.busType}
                              </h4>
                              <span className="inline-block text-xs font-extrabold text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full mt-1">
                                {tier.capacity}
                              </span>
                            </div>

                            <div className="pt-2 border-t border-slate-200/60">
                              <span className="text-[11px] font-bold text-slate-500 uppercase block">Fasilitas Inap / Hotel:</span>
                              <p className="text-xs font-bold text-slate-800 mt-0.5">
                                🏨 {tier.hotelDetails}
                              </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-[11px] text-amber-900 font-medium">
                              <span className="font-bold">⚠️ Catatan:</span> {tier.notes}
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500">Biaya Paket:</span>
                            <span className="font-display font-black text-xl text-red-600">
                              {tier.pricePerPerson} <span className="text-xs font-normal text-slate-500">/org</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. RUTE & SPOT HIGHLIGHTS */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-display font-extrabold text-sm uppercase text-slate-900 tracking-wide flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-600" />
                    <span>Highlight Destinasi & Pengalaman Tour</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                    {selectedPackage.highlights.map((spot, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{spot}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. INCLUDES & EXCLUDES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Includes */}
                  <div className="bg-green-50/70 p-5 rounded-2xl border border-green-200 space-y-2">
                    <h5 className="font-display font-extrabold text-xs uppercase text-green-900 tracking-wide flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span>Fasilitas Termasuk dalam Paket</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-green-900 font-medium">
                      {selectedPackage.includes.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes */}
                  <div className="bg-red-50/70 p-5 rounded-2xl border border-red-200 space-y-2">
                    <h5 className="font-display font-extrabold text-xs uppercase text-red-900 tracking-wide flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span>Belum Termasuk (Exclude)</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-red-900 font-medium">
                      {selectedPackage.excludes.map((exc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">✕</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Modal Footer / WhatsApp Action */}
              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 shrink-0">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Paket & Biaya Dipilih:</span>
                  <div className="font-display font-black text-lg text-amber-400">
                    {selectedTier.busType} — {selectedTier.pricePerPerson}/org
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(selectedPackage, selectedTier)}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-display font-extrabold text-xs uppercase py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan Sekarang via WhatsApp</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
