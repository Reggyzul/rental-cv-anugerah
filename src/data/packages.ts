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
  {
    id: 'tour-bangka-belitung',
    title: 'TOUR BANGKA - BELITUNG',
    duration: '10 Hari',
    route: ['Bangka', 'Belitung', 'Palembang'],
    routeDisplay: 'Bangka - Belitung - Palembang',
    image: '/dest_belitung.jpg',
    badge: '10 Hari Bahari & Laskar Pelangi',
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
  {
    id: 'tour-batam-bintan',
    title: 'TOUR BATAM - BINTAN',
    duration: '10 Hari',
    route: ['P. Batam', 'P. Bintan', 'Pekanbaru'],
    routeDisplay: 'P. Batam - P. Bintan - Pekanbaru',
    image: '/dest_batam.jpg',
    badge: '10 Hari Kepri Landmark',
    minPrice: 'Rp 2.875.000',
    tiers: [
      {
        busType: 'Big Bus Eksekutif',
        capacity: 'Isi 43 Orang',
        pricePerPerson: 'Rp 2.875.000',
        hotelDetails: 'Hotel 2 Malam di Batam, 2 Malam di Tanjung Pinang',
        notes: 'Tidak termasuk Biaya masuk wisata & Biaya makan selama tour'
      },
      {
        busType: 'Big Bus Legrest V.I.P',
        capacity: 'Isi 33 Orang',
        pricePerPerson: 'Rp 3.875.000',
        hotelDetails: 'Hotel 2 Malam di Batam, 2 Malam di Tanjung Pinang',
        notes: 'Tidak termasuk biaya masuk wisata & Biaya Makan'
      }
    ],
    highlights: [
      'Jembatan Barelang & Wisata Belanja Nagoya Batam',
      'Resort Lagoi Bay & Treasure Bay Kolam Terbesar Bintan',
      'Gurun Pasir Telaga Biru Bintan & Tanjung Pinang',
      'Masjid Agung An-Nur & Wisata Melayu Pekanbaru'
    ],
    includes: [
      'Transportasi Big Bus AC Pariwisata (Eksekutif 43 / VIP Legrest 33)',
      'Penginapan Hotel 2 Malam Batam & 2 Malam Tanjung Pinang',
      'Driver Ramah, BBM, Parkir & Penyeberangan Roro/Feri',
      'Layanan Pendamping Rombongan'
    ],
    excludes: [
      'Biaya Tiket Masuk Objek Wisata',
      'Biaya Makan Selama Tour',
      'Pengeluaran Pribadi'
    ]
  },
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
