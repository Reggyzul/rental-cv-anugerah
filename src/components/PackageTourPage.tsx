import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TOUR_PACKAGES, TourPackage, TourTier } from '../data/packages';
import { MapPin, Calendar, Bus, ArrowRight, X, MessageCircle, CheckCircle2, Globe, Plane } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface PackageTourPageProps {
  lang: 'ID' | 'EN';
  onNavigateHome?: () => void;
}

export default function PackageTourPage({ lang, onNavigateHome }: PackageTourPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'domestik' | 'internasional'>('all');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [selectedTier, setSelectedTier] = useState<TourTier | null>(null);
  const t = TRANSLATIONS[lang];

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
    const message = `Halo CV. Anugrah Pariwisata, saya ingin berkonsultasi mengenai reservasi paket tour:\n\nPaket Tour: ${pkg.title} (${pkg.duration})\nPilihan Bus: ${tier.busType} (${tier.capacity})\nBiaya: ${tier.pricePerPerson}/org\nFasilitas Hotel: ${tier.hotelDetails}\nRute Perjalanan: ${pkg.routeDisplay}\n\nMohon informasi ketersediaan jadwal & mekanisme reservasi. Terima kasih.`;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    if (activeCategory === 'all') return true;
    return pkg.categoryKey === activeCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-md relative overflow-hidden mb-10">
        <div className="max-w-6xl mx-auto text-center space-y-3 relative z-10">
          <span className="inline-block bg-white/10 px-3 py-1 rounded-full border border-white/20 text-[11px] font-bold uppercase tracking-widest text-red-200">
            {t.pkg_tag}
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            {t.pkg_title}
          </h1>
          <p className="font-sans text-white/90 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            {t.pkg_subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* CATEGORY SELECTOR TABS BAR (Dalam Negeri vs Luar Negeri) */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-md max-w-3xl mx-auto text-center space-y-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block">
              {t.pkg_filter_heading}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              onClick={() => setActiveCategory('all')}
              className={`py-3 px-4 rounded-xl font-display font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span>{t.pkg_filter_all}</span>
            </button>

            <button
              onClick={() => setActiveCategory('domestik')}
              className={`py-3 px-4 rounded-xl font-display font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'domestik'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0 text-red-500" />
              <span>{t.pkg_filter_domestik}</span>
            </button>

            <button
              onClick={() => setActiveCategory('internasional')}
              className={`py-3 px-4 rounded-xl font-display font-bold text-xs uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeCategory === 'internasional'
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-[1.02]'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Plane className="w-4 h-4 shrink-0 text-blue-500" />
              <span>{t.pkg_filter_internasional}</span>
            </button>
          </div>
        </div>
        
        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-md shadow-sm">
                    {pkg.badge}
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-900/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md border border-slate-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-red-400" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-display font-black text-lg tracking-tight uppercase leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3.5 text-left">
                  {/* Route Summary */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      {t.pkg_route_label}
                    </span>
                    <p className="text-xs font-semibold text-slate-700 leading-snug">
                      {pkg.routeDisplay}
                    </p>
                  </div>

                  {/* Pricing Tiers Preview */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">{t.pkg_starting_from}</span>
                      <span className="font-display font-black text-base text-red-600">
                        {pkg.minPrice} <span className="text-[10px] font-normal text-slate-500">{t.pkg_per_person}</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      Eksekutif &amp; VIP
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleOpenModal(pkg)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-display font-bold text-xs uppercase py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.pkg_detail_btn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PRECISE & PROFESSIONAL DETAIL MODAL */}
      <AnimatePresence>
        {selectedPackage && selectedTier && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 pb-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Precision Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 text-left max-h-[calc(100vh-8rem)] flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-slate-900 text-white p-5 sm:p-6 shrink-0 border-b border-slate-800">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
                  title="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-2 pr-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-red-600 text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow-xs">
                      {t.pkg_modal_duration}: {selectedPackage.duration}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300">
                      {t.pkg_route_label}: {selectedPackage.routeDisplay}
                    </span>
                  </div>
                  <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight">
                    {selectedPackage.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-xs">
                
                {/* 1. TIER SELECTION CARDS */}
                <div>
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500 mb-2.5">
                    {t.pkg_modal_tier_title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPackage.tiers.map((tier, idx) => {
                      const isSelected = selectedTier.busType === tier.busType;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedTier(tier)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'border-red-600 bg-red-50/50 shadow-xs ring-1 ring-red-600'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-display font-extrabold text-sm text-slate-900">
                                  {tier.busType}
                                </h4>
                                <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded mt-0.5 inline-block">
                                  {tier.capacity}
                                </span>
                              </div>
                              {isSelected && (
                                <span className="text-[10px] font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded">
                                  {t.pkg_modal_selected}
                                </span>
                              )}
                            </div>

                            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-700">
                              <span className="font-bold text-slate-900 block">{t.pkg_modal_hotel}:</span>
                              <span>{tier.hotelDetails}</span>
                            </div>

                            <div className="text-[10px] text-slate-500 bg-slate-100/80 p-2 rounded border border-slate-200/60">
                              <span className="font-bold text-slate-700">{t.pkg_modal_notes}:</span> {tier.notes}
                            </div>
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">{t.pkg_starting_from}</span>
                            <span className="font-display font-black text-sm text-red-600">
                              {tier.pricePerPerson} <span className="text-[10px] font-normal text-slate-500">{t.pkg_per_person}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. HIGHLIGHTS & DESTINASI */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-700">
                    {t.pkg_modal_highlights}
                  </h4>
                  <ul className="space-y-1 text-slate-700 text-xs font-medium">
                    {selectedPackage.highlights.map((spot, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                        <span>{spot}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. INCLUDES & EXCLUDES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Includes */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <h5 className="font-display font-bold text-xs uppercase tracking-wide text-slate-800">
                      {t.pkg_modal_includes}
                    </h5>
                    <ul className="space-y-1 text-slate-600 font-medium">
                      {selectedPackage.includes.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 font-bold">•</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                    <h5 className="font-display font-bold text-xs uppercase tracking-wide text-slate-800">
                      {t.pkg_modal_excludes}
                    </h5>
                    <ul className="space-y-1 text-slate-600 font-medium">
                      {selectedPackage.excludes.map((exc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-slate-400 font-bold">•</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between gap-4 border-t border-slate-800 shrink-0">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">{t.pkg_modal_selected}:</span>
                  <span className="font-display font-bold text-xs text-white">
                    {selectedTier.busType} — <span className="text-red-400">{selectedTier.pricePerPerson}{t.pkg_per_person}</span>
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(selectedPackage, selectedTier)}
                  className="bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs uppercase py-2.5 px-5 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.pkg_modal_wa_btn}</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
