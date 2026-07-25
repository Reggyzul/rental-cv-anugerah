export interface TourTier {
  busType: string;
  capacity: string;
  pricePerPerson: string;
  hotelDetails: string;
  notes: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  route: string[];
  routeDisplay: string;
  image: string;
  badge: string;
  minPrice: string;
  tiers: TourTier[];
  highlights: string[];
  includes: string[];
  excludes: string[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  // 1. OPEN TRIP GUNUNG BROMO (10 HARI)
  {
    id: 'tour-open-trip-bromo',
    title: 'OPEN TRIP GUNUNG BROMO',
    duration: '10 Hari',
    route: ['Gunung Bromo', 'Yogyakarta', 'Bandung', 'Jakarta'],
    routeDisplay: 'Gunung Bromo - Yogyakarta - Bandung - Jakarta',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800',
    badge: '10 Hari Open Trip',
    minPrice: 'Rp 2.650.000',
    tiers: [
      {
        busType: 'Big Bus Mercedes Benz Eksekutif',
        capacity: 'Kapasitas 43 Seats (Minibar & Toilet)',
        pricePerPerson: 'Rp 2.650.000',
        hotelDetails: 'Hotel 2 Malam di Yogyakarta & 1 Malam di Bandung',
        notes: 'Periode Keberangkatan: 16 - 25 Oktober 2026'
      }
    ],
    highlights: [
      'Menikmati keindahan alam & sunrise Gunung Bromo',
      'Wisata budaya & belanja Malioboro Yogyakarta',
      'City tour & udara sejuk kota Bandung',
      'Penyeberangan kapal Merak - Bakauheni (PP)'
    ],
    includes: [
      'Transportasi Big Bus Mercedes Benz Eksekutif (Full AC, Minibar, Toilet, Karaoke)',
      'Penginapan Hotel 2 Malam di Yogyakarta & 1 Malam di Bandung',
      'Tiket Penyeberangan Kapal Merak - Bakauheni (PP)',
      'Dokumentasi & Guide Pendamping Tour'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Perjalanan',
      'Pengeluaran Pribadi'
    ]
  },

  // 2. TOUR BATAM - BINTAN 2026 (10 HARI PP)
  {
    id: 'tour-batam-bintan-2026',
    title: 'TOUR BATAM - BINTAN 2026',
    duration: '10 Hari PP',
    route: ['Pulau Batam', 'Pulau Bintan', 'Siak', 'Pekanbaru'],
    routeDisplay: 'Pulau Batam - Pulau Bintan - Siak - Pekanbaru',
    image: '/dest_batam.jpg',
    badge: '10 Hari PP (Juni - Des 2026)',
    minPrice: 'Rp 2.850.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.850.000',
        hotelDetails: 'Hotel 3 Malam di Batam & Akomodasi Rute Perjalanan',
        notes: 'Periode Keberangkatan: Juni - Desember 2026'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 32 Orang',
        pricePerPerson: 'Rp 3.850.000',
        hotelDetails: 'Hotel 3 Malam di Batam & Akomodasi Rute Perjalanan',
        notes: 'Periode Keberangkatan: Juni - Desember 2026'
      }
    ],
    highlights: [
      'Jembatan Barelang & Peninggalan Sejarah Galang Batam',
      'Patung Buddha Tidur & Resort Pantai Pulau Bintan',
      'Kunjungan Istana Siak Sri Indrapura',
      'Wisata Belanja & Kuliner Kota Pekanbaru'
    ],
    includes: [
      'Transportasi Armada Big Bus AC (Eksekutif 43 seat / VIP Legrest 32 seat)',
      'Penginapan Hotel 3 Malam di Batam & Hotel Rute',
      'Driver Berpengalaman, BBM, Toll & Feri/Roro',
      'Layanan Pendamping Rombongan'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi'
    ]
  },

  // 3. 11D8N WEST EUROPE + VENICE (INTERNASIONAL)
  {
    id: 'tour-west-europe-venice',
    title: '11D8N WEST EUROPE + VENICE',
    duration: '11 Hari 8 Malam',
    route: ['France', 'Brussels', 'Netherlands', 'Germany', 'Luxembourg', 'Switzerland', 'Italy'],
    routeDisplay: 'France - Brussels - Netherlands - Germany - Luxembourg - Switzerland - Italy',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional Europe',
    minPrice: 'Rp 29.650.000',
    tiers: [
      {
        busType: 'Flight Etihad + Bus Pariwisata Eropa',
        capacity: 'Paket Promo Special (07 - 17 Oct 2025)',
        pricePerPerson: 'Rp 29.650.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Kota Utama Eropa (8 Malam Inap)',
        notes: 'Penerbangan Etihad Airways (EY) dengan Bagasi 35kg'
      },
      {
        busType: 'Flight Etihad + Bus Eksekutif Eropa',
        capacity: 'Paket Regular (Nov - Dec 2026)',
        pricePerPerson: 'Rp 32.500.000',
        hotelDetails: 'Hotel Bintang 4* di Prancis, Swiss & Italia (8 Malam Inap)',
        notes: 'Penerbangan Etihad Airways (EY) dengan Bagasi 35kg'
      }
    ],
    highlights: [
      'Menara Eiffel & Museum Louvre Paris',
      'Kincir Angin Belanda & Kota Tua Brussels',
      'Pemandangan Pegunungan Salju Swiss',
      'Kanal Eksotis Venice & Duomo Milan Italia'
    ],
    includes: [
      'Tiket Penerbangan Internasional PP (Etihad Airways / EY)',
      'Bagasi Kabin 7Kg & Bagasi Terdaftar 35Kg',
      'Akomodasi Hotel Bintang 3* / 4* Selama 8 Malam',
      'Transportasi Bus AC Eropa & Tour Leader Profesional'
    ],
    excludes: [
      'Biaya Visa Schengen & Asuransi Perjalanan',
      'Tipping Guide & Driver Eropa',
      'Pengeluaran Pribadi'
    ]
  },

  // 4. 9D7N WEST USA (INTERNASIONAL)
  {
    id: 'tour-west-usa-9d7n',
    title: '9D7N WEST USA (LA, LAS VEGAS, SAN FRANCISCO)',
    duration: '9 Hari 7 Malam',
    route: ['Los Angeles', 'Las Vegas', 'San Francisco'],
    routeDisplay: 'Los Angeles - Las Vegas - San Francisco',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional USA',
    minPrice: 'Rp 39.050.000',
    tiers: [
      {
        busType: 'Flight STARLUX + Bus Eksekutif USA',
        capacity: 'Minimal 10 Pax (15 Aug & 19 Sep 2025)',
        pricePerPerson: 'Rp 39.050.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Los Angeles, Las Vegas, San Francisco',
        notes: 'Periode Keberangkatan: 15 Aug 2025 & 19 Sep 2025'
      }
    ],
    highlights: [
      'Tanda Ikonik Hollywood Sign & Walk of Fame Los Angeles',
      'Gemerlap Kota Las Vegas & Strip Boulevard',
      'Jembatan Golden Gate & Fisherman Wharf San Francisco'
    ],
    includes: [
      'Tiket Penerbangan Internasional STARLUX Airlines',
      'Bagasi Kabin & Bagasi Terdaftar',
      'Akomodasi Hotel Bintang 3* / 4*',
      'Transportasi Bus AC & Konsumsi Makan Terjadwal'
    ],
    excludes: [
      'Biaya Visa USA & Asuransi Perjalanan',
      'Tipping Guide & Driver',
      'Pengeluaran Pribadi'
    ]
  },

  // 5. TOUR LOMBOK - BALI (16 HARI)
  {
    id: 'tour-lombok-bali',
    title: 'TOUR LOMBOK - BALI',
    duration: '16 Hari',
    route: ['Lombok', 'Bali', 'Bromo', 'Jogja', 'Jakarta'],
    routeDisplay: 'Lombok - Bali - Bromo - Jogja - Jakarta',
    image: '/dest_lombok.jpg',
    badge: '16 Hari Spesial Tour',
    minPrice: 'Rp 3.875.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 3.875.000',
        hotelDetails: 'Hotel 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Tidak termasuk Biaya masuk wisata & Biaya makan selama tour'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 4.875.000',
        hotelDetails: 'Hotel 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Tidak termasuk Biaya Masuk destinasi pariwisata & Biaya Makan'
      }
    ],
    highlights: [
      'Menikmati keindahan pantai & gili eksotis Lombok',
      'Eksplorasi budaya & pantai megah di Bali',
      'Penanjakan Sunrise & Lautan Pasir Gunung Bromo',
      'Wisata sejarah & budaya Keraton Jogja',
      'City Tour Ibu Kota Jakarta & Belanja Souvenir'
    ],
    includes: [
      'Transportasi Armada Big Bus AC (Eksekutif 43 seat / VIP Legrest 33 seat)',
      'Penginapan Hotel sesuai rincian per malam di tiap destinasi',
      'Driver Profesional, Bensin/BBM, Toll & Parkir',
      'Penyeberangan Kapal Feri Antar Pulau'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi & Tips Crew'
    ]
  },

  // 6. TOUR SUMBAWA - LOMBOK - BALI (16 HARI)
  {
    id: 'tour-sumbawa-lombok-bali',
    title: 'TOUR SUMBAWA - LOMBOK - BALI',
    duration: '16 Hari',
    route: ['Sumbawa', 'Lombok', 'Bali', 'Jogja', 'Jakarta'],
    routeDisplay: 'Sumbawa - Lombok - Bali - Jogja - Jakarta',
    image: '/dest_sumbawa.jpg',
    badge: '16 Hari Cross Island',
    minPrice: 'Rp 4.275.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 4.275.000',
        hotelDetails: 'Hotel 2 Malam di Bima, 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Tidak termasuk Biaya masuk wisata & Biaya makan selama tour'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 5.275.000',
        hotelDetails: 'Hotel 2 Malam di Bima, 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Tidak termasuk biaya masuk destinasi wisata & Biaya Makan'
      }
    ],
    highlights: [
      'Jelajah Savana Pulau Kenawa & Pesona Bima Sumbawa',
      'Island Hopping & Wisata Bahari Gili Lombok',
      'Sunset & Pura Bersejarah di Pulau Dewata Bali',
      'Wisata Kuliner Khas & Budaya Yogyakarta',
      'Kunjungan Landmark Metropolitan Jakarta'
    ],
    includes: [
      'Transportasi Armada Big Bus AC (Eksekutif 43 seat / VIP Legrest 33 seat)',
      'Penginapan Hotel sesuai rincian per malam (Bima, Lombok, Bali, Jogja)',
      'Driver Handal, BBM, Parkir & Toll',
      'Tiket Penyeberangan Feri Antar Pulau'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi & Tips Crew'
    ]
  },

  // 7. TOUR BANGKA - BELITUNG (10 HARI)
  {
    id: 'tour-bangka-belitung',
    title: 'TOUR BANGKA - BELITUNG',
    duration: '10 Hari',
    route: ['Bangka', 'Belitung', 'Palembang'],
    routeDisplay: 'Bangka - Belitung - Palembang',
    image: '/dest_belitung.jpg',
    badge: '10 Hari Bahari & Eksotik',
    minPrice: 'Rp 2.975.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.975.000',
        hotelDetails: 'Hotel 2 Malam di Bangka, 2 Malam di Belitung',
        notes: 'Tidak termasuk Biaya masuk wisata & Biaya makan selama tour'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 3.975.000',
        hotelDetails: 'Hotel 2 Malam di Bangka, 2 Malam di Belitung',
        notes: 'Tidak termasuk biaya masuk wisata & Biaya makan selama Tour'
      }
    ],
    highlights: [
      'Pantai Batu Granit Tanjung Tinggi Surga Laskar Pelangi',
      'Mercusuar Bersejarah & Island Hopping Pulau Lengkuas',
      'Danau Kaolin & Wisata Kuliner Khas Bangka',
      'Jembatan Ampera & Wisata Pempek Palembang'
    ],
    includes: [
      'Transportasi Armada Big Bus AC (Eksekutif 43 seat / VIP Legrest 33 seat)',
      'Penginapan Hotel 2 Malam Bangka & 2 Malam Belitung',
      'Driver Berpengalaman, BBM, Toll & Penyeberangan Kapal',
      'Air Mineral & Pelayanan Pariwisata'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi'
    ]
  },

  // 8. TOUR DANAU TOBA - P. SABANG (TITIK 0 KM)
  {
    id: 'tour-danau-toba-sabang',
    title: 'TOUR DANAU TOBA - P. SABANG (TITIK 0 KM)',
    duration: '10 Hari',
    route: ['D. Toba', 'Berastagi', 'P. Sabang', 'Banda Aceh', 'Medan', 'Pekanbaru'],
    routeDisplay: 'D. Toba - Berastagi - P. Sabang - Banda Aceh - Medan - Pekanbaru',
    image: '/gallery_sabang.jpg',
    badge: '10 Hari Ujung Barat Nusantara',
    minPrice: 'Rp 2.850.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.850.000',
        hotelDetails: 'Hotel 1 Malam di D. Toba, 3 Malam di Banda Aceh',
        notes: 'Tidak termasuk Biaya masuk wisata & Biaya makan selama tour'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 3.850.000',
        hotelDetails: 'Hotel 1 Malam di D. Toba, 3 Malam di Banda Aceh',
        notes: 'Tidak termasuk biaya masuk wisata & Biaya Makan'
      }
    ],
    highlights: [
      'Panorama Megah Danau Toba & Air Terjun Sipiso-piso',
      'Tugu Nol Kilometer Indonesia di Pulau Sabang',
      'Pantai Iboih, Pulau Rubiah & Masjid Raya Baiturrahman Banda Aceh',
      'Museum Tsunami Aceh & Kapal Apung PLN',
      'Kota Medan & Transit Riau'
    ],
    includes: [
      'Transportasi Big Bus AC Pariwisata (Eksekutif 43 / VIP Legrest 33)',
      'Penginapan Hotel 1 Malam Danau Toba & 3 Malam Banda Aceh',
      'Penyeberangan Feri Sabang & Danau Toba',
      'Driver Handal & Paham Rute Sumatera-Aceh'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi'
    ]
  }
];
