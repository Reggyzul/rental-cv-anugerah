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
  categoryKey: 'domestik' | 'internasional';
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
  // 1. TOUR GUNUNG BROMO (10 HARI) - DOMESTIK
  {
    id: 'tour-open-trip-bromo',
    title: 'TOUR GUNUNG BROMO',
    categoryKey: 'domestik',
    duration: '10 Hari',
    route: ['Gunung Bromo', 'Yogyakarta', 'Bandung', 'Jakarta'],
    routeDisplay: 'Gunung Bromo - Yogyakarta - Bandung - Jakarta',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800',
    badge: '10 Hari (Jadwal Fleksibel)',
    minPrice: 'Rp 2.650.000',
    tiers: [
      {
        busType: 'Big Bus Mercedes Benz Eksekutif',
        capacity: 'Kapasitas 43 Seats (Minibar & Toilet)',
        pricePerPerson: 'Rp 2.650.000',
        hotelDetails: 'Hotel 2 Malam di Yogyakarta & 1 Malam di Bandung',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Custom Schedule Sesuai Dealing Customer)'
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

  // 2. EDISI DANAU TOBA - TITIK NOL SABANG (10 HARI PP) - DOMESTIK
  {
    id: 'tour-danau-toba-sabang',
    title: 'TOUR DANAU TOBA - TITIK NOL SABANG ACEH',
    categoryKey: 'domestik',
    duration: '10 Hari PP',
    route: ['D. Toba', 'P. Samosir', 'Berastagi', 'Banda Aceh', 'P. Sabang', 'Medan', 'Pekanbaru'],
    routeDisplay: 'Danau Toba - Pulau Samosir - Berastagi - Banda Aceh - Pulau Sabang - Medan',
    image: '/gallery_sabang.jpg',
    badge: '10 Hari PP (Jadwal Fleksibel)',
    minPrice: 'Rp 2.750.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.750.000',
        hotelDetails: 'Penginapan Hotel di Danau Toba, Banda Aceh & Sabang',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Bisa Kapan Saja Sesuai Dealing Customer)'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 32 Orang',
        pricePerPerson: 'Rp 3.750.000',
        hotelDetails: 'Penginapan Hotel di Danau Toba, Banda Aceh & Sabang',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Bisa Kapan Saja Sesuai Dealing Customer)'
      }
    ],
    highlights: [
      'Panorama Megah Danau Toba & Pulau Samosir',
      'Tugu Nol Kilometer Indonesia di Pulau Sabang Aceh',
      'Pantai Iboih & Masjid Raya Baiturrahman Banda Aceh',
      'Wisata Kuliner Medan & Riau'
    ],
    includes: [
      'Transportasi Armada Big Bus AC (Eksekutif 43 seat / VIP Legrest 32 seat)',
      'Penginapan Hotel di Danau Toba & Banda Aceh',
      'Penyeberangan Feri Sabang & Danau Toba',
      'Driver Handal & Paham Rute Sumatera-Aceh'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi'
    ]
  },

  // 3. PROMO SPESIAL TOUR 3 NEGARA (MALAYSIA - SINGAPORE - THAILAND) - INTERNASIONAL
  {
    id: 'tour-3-negara-asia',
    title: 'TOUR 3 NEGARA (MALAYSIA - SINGAPORE - THAILAND)',
    categoryKey: 'internasional',
    duration: 'Multi-Durasi (3 s/d 7 Hari)',
    route: ['Malaysia', 'Singapore', 'Thailand (Hatyai)'],
    routeDisplay: 'Malaysia (KL & Genting) - Singapore (Merlion) - Thailand (Hatyai)',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional Asia (Jadwal Custom)',
    minPrice: 'Rp 2.400.000',
    tiers: [
      {
        busType: 'Tour Short Escape (KL - Genting - Melaka)',
        capacity: '3 Hari 2 Malam (All In)',
        pricePerPerson: 'Rp 2.400.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Kuala Lumpur & Melaka (Gratis Cable Car Genting)',
        notes: 'Bebas Tentukan Tanggal Keberangkatan Sesuai Kesepakatan Dealing'
      },
      {
        busType: 'Tour 2 Negara (Malaysia - Singapore)',
        capacity: '4 Hari 3 Malam (All In)',
        pricePerPerson: 'Rp 3.500.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Kuala Lumpur & Singapore',
        notes: 'Bebas Tentukan Tanggal Keberangkatan Sesuai Kesepakatan Dealing'
      },
      {
        busType: 'Tour 3 Negara (Malaysia - Singapore - Thailand Hatyai)',
        capacity: '7 Hari 6 Malam (All In)',
        pricePerPerson: 'Rp 4.750.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Malaysia, Singapore & Hatyai Thailand',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Private Group / Open Trip Flexible)'
      }
    ],
    highlights: [
      'Ikon Petronas Twin Towers Kuala Lumpur & Genting Highlands',
      'Merlion Park & Jewel Changi Airport Singapore',
      'Wisata Kuliner Malam & Belanja Hatyai Thailand',
      'Gratis Tiket Cable Car Genting Highlands'
    ],
    includes: [
      'Transportasi Privat (MPV, Van, / Bus Pariwisata AC)',
      'Penginapan Hotel Bintang 3* & 4*',
      'Konsumsi Makan Sesuai Program & Air Mineral',
      'Tour Leader / Guide Berpengalaman & Pengurusan MDAC/MyICA/TDAC',
      'Asuransi Perjalanan Thailand & Gratis Cable Car Genting'
    ],
    excludes: [
      'Tiket Pesawat PP (Exclude/Optional)',
      'Tipping SE / Guide (Wajib Per Orang)',
      'Pengeluaran Pribadi'
    ]
  },

  // 4. RUSSIA SPESIAL 9D6N & 9D7N (MOSCOW, ST. PETERSBURG & AURORA) - INTERNASIONAL
  {
    id: 'tour-russia-aurora',
    title: 'RUSSIA SPESIAL (MOSCOW & ST. PETERSBURG)',
    categoryKey: 'internasional',
    duration: '9 Hari 6 Malam / 9 Hari 7 Malam',
    route: ['Moscow', 'St. Petersburg', 'Murmansk'],
    routeDisplay: 'Moscow - St. Petersburg - Murmansk (Aurora Hunt)',
    image: 'https://images.unsplash.com/photo-1513326718677-b964603b136d?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional Russia (Jadwal Custom)',
    minPrice: 'Rp 26.990.000',
    tiers: [
      {
        busType: '9D6N Russia Classic (Moscow + St. Petersburg)',
        capacity: 'Jadwal Fleksibel (Private / Group)',
        pricePerPerson: 'Rp 26.990.000',
        hotelDetails: 'Akomodasi Hotel Bintang 4* di Moscow & St. Petersburg',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Flight Emirates, Sapsan Train & Russian Costume)'
      },
      {
        busType: '9D7N Russia Aurora + Murmansk (Northern Lights)',
        capacity: 'Jadwal Fleksibel (Musim Dingin)',
        pricePerPerson: 'Rp 37.500.000',
        hotelDetails: 'Hotel Bintang 4* di Moscow, St. Petersburg & Murmansk',
        notes: 'Bebas Tentukan Tanggal Keberangkatan Sesuai Kesepakatan Dealing Customer'
      }
    ],
    highlights: [
      'Red Square, Kremlin & Saint Basil Cathedral Moscow',
      'Hermitage Museum & Palace Square St. Petersburg',
      'Pengalaman Spesial Memakai Baju Adat Tradisional Rusia (Wearing Russian Costume)',
      'Perjalanan Mewah & Cepat dengan Kereta Sapsan (Moscow - St. Petersburg)',
      'Opsional Berburu Aurora Borealis & Eksplorasi Kutub Utara Murmansk'
    ],
    includes: [
      'Tiket Pesawat Internasional PP by Emirates (EK)',
      'Tiket Kereta Cepat Sapsan (Moscow - St. Petersburg)',
      'Akomodasi Hotel Bintang 4*',
      'Pengalaman Memakai Baju Adat Tradisional Rusia',
      'Transportasi Bus Pariwisata AC & Guide / Tour Leader Profesional'
    ],
    excludes: [
      'Biaya Visa Rusia & Tipping Guide / Driver',
      'Optional Tour & Kelebihan Bagasi',
      'Asuransi Perjalanan & Pengeluaran Pribadi'
    ]
  },

  // 5. TOUR BATAM - BINTAN (10 HARI PP) - DOMESTIK
  {
    id: 'tour-batam-bintan-2026',
    title: 'TOUR BATAM - BINTAN',
    categoryKey: 'domestik',
    duration: '10 Hari PP',
    route: ['Pulau Batam', 'Pulau Bintan', 'Siak', 'Pekanbaru'],
    routeDisplay: 'Pulau Batam - Pulau Bintan - Siak - Pekanbaru',
    image: '/dest_batam.jpg',
    badge: '10 Hari PP (Jadwal Fleksibel)',
    minPrice: 'Rp 2.850.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.850.000',
        hotelDetails: 'Hotel 3 Malam di Batam & Akomodasi Rute Perjalanan',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kebutuhan Rombongan)'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 32 Orang',
        pricePerPerson: 'Rp 3.850.000',
        hotelDetails: 'Hotel 3 Malam di Batam & Akomodasi Rute Perjalanan',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kebutuhan Rombongan)'
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

  // 6. 11D8N WEST EUROPE + VENICE - INTERNASIONAL
  {
    id: 'tour-west-europe-venice',
    title: '11D8N WEST EUROPE + VENICE',
    categoryKey: 'internasional',
    duration: '11 Hari 8 Malam',
    route: ['France', 'Brussels', 'Netherlands', 'Germany', 'Luxembourg', 'Switzerland', 'Italy'],
    routeDisplay: 'France - Brussels - Netherlands - Germany - Luxembourg - Switzerland - Italy',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional Europe (Jadwal Custom)',
    minPrice: 'Rp 29.650.000',
    tiers: [
      {
        busType: 'Flight Etihad + Bus Pariwisata Eropa',
        capacity: 'Paket Standard 3*/4* Hotel',
        pricePerPerson: 'Rp 29.650.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Kota Utama Eropa (8 Malam Inap)',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Custom Schedule Dealing Customer)'
      },
      {
        busType: 'Flight Etihad + Bus Eksekutif Eropa',
        capacity: 'Paket Executive 4* Hotel',
        pricePerPerson: 'Rp 32.500.000',
        hotelDetails: 'Hotel Bintang 4* di Prancis, Swiss & Italia (8 Malam Inap)',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Custom Schedule Dealing Customer)'
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

  // 7. 9D7N WEST USA - INTERNASIONAL
  {
    id: 'tour-west-usa-9d7n',
    title: '9D7N WEST USA (LA, LAS VEGAS, SAN FRANCISCO)',
    categoryKey: 'internasional',
    duration: '9 Hari 7 Malam',
    route: ['Los Angeles', 'Las Vegas', 'San Francisco'],
    routeDisplay: 'Los Angeles - Las Vegas - San Francisco',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&q=80&w=800',
    badge: 'Internasional USA (Jadwal Custom)',
    minPrice: 'Rp 39.050.000',
    tiers: [
      {
        busType: 'Flight STARLUX + Bus Eksekutif USA',
        capacity: 'Minimal 10 Pax (Group Tour)',
        pricePerPerson: 'Rp 39.050.000',
        hotelDetails: 'Hotel Bintang 3* / 4* di Los Angeles, Las Vegas, San Francisco',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kebutuhan Rombongan)'
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

  // 8. TOUR LOMBOK, BALI, BROMO (16 HARI PP) - DOMESTIK
  {
    id: 'tour-lombok-bali',
    title: 'TOUR LOMBOK - BALI - BROMO',
    categoryKey: 'domestik',
    duration: '16 Hari PP',
    route: ['Bali', 'Lombok', 'Gunung Bromo', 'Jogjakarta', 'Bandung', 'Jakarta'],
    routeDisplay: 'Bali - Lombok - Gunung Bromo - Jogjakarta - Bandung - Jakarta',
    image: '/dest_lombok.jpg',
    badge: '16 Hari PP (Jadwal Fleksibel)',
    minPrice: 'Rp 3.875.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 3.875.000',
        hotelDetails: 'Hotel 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kesepakatan Dealing)'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 4.775.000',
        hotelDetails: 'Hotel 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kesepakatan Dealing)'
      }
    ],
    highlights: [
      'Pantai Pandawa & Pura Bersejarah di Pulau Dewata Bali',
      'Keindahan Pantai Gili Khas Lombok',
      'Penanjakan Sunrise & Lautan Pasir Gunung Bromo',
      'Wisata Budaya Yogyakarta, Bandung & Jakarta'
    ],
    includes: [
      'Transportasi Big Bus Legrest AC Pariwisata',
      'Penginapan Hotel di Lombok, Bali, Jogja & Bandung',
      'Guide Lokal & Tour Leader Berpengalaman',
      'Penyeberangan Feri Antar Pulau'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi'
    ]
  },

  // 9. TOUR SUMBAWA - LOMBOK - BALI (16 HARI) - DOMESTIK
  {
    id: 'tour-sumbawa-lombok-bali',
    title: 'TOUR SUMBAWA - LOMBOK - BALI',
    categoryKey: 'domestik',
    duration: '16 Hari',
    route: ['Sumbawa', 'Lombok', 'Bali', 'Jogja', 'Jakarta'],
    routeDisplay: 'Sumbawa - Lombok - Bali - Jogja - Jakarta',
    image: '/dest_sumbawa.jpg',
    badge: '16 Hari Cross Island (Jadwal Fleksibel)',
    minPrice: 'Rp 4.275.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 4.275.000',
        hotelDetails: 'Hotel 2 Malam di Bima, 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kesepakatan Dealing)'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 5.275.000',
        hotelDetails: 'Hotel 2 Malam di Bima, 2 Malam di Lombok, 2 Malam di Bali & 2 Malam di Jogja',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kesepakatan Dealing)'
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

  // 10. TOUR BANGKA - BELITUNG (10 HARI) - DOMESTIK
  {
    id: 'tour-bangka-belitung',
    title: 'TOUR BANGKA - BELITUNG',
    categoryKey: 'domestik',
    duration: '10 Hari',
    route: ['Bangka', 'Belitung', 'Palembang'],
    routeDisplay: 'Bangka - Belitung - Palembang',
    image: '/dest_belitung.jpg',
    badge: '10 Hari (Jadwal Fleksibel)',
    minPrice: 'Rp 2.975.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.975.000',
        hotelDetails: 'Hotel 2 Malam di Bangka, 2 Malam di Belitung',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kesepakatan Dealing)'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 3.975.000',
        hotelDetails: 'Hotel 2 Malam di Bangka, 2 Malam di Belitung',
        notes: 'Bebas Tentukan Tanggal Keberangkatan (Sesuai Kesepakatan Dealing)'
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
  }
];
