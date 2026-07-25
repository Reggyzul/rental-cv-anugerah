import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  // CATEGORY 1: BIG BUS & BUS MEDIUM
  {
    id: 'bus-zivanes',
    name: 'Bus Eksekutif Zivanes',
    category: 'Big Bus Legrest',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Harga Terbaik',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    seats: 48,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: ['Full AC', 'Toilet Bersih', 'Full Karaoke & Audio', 'Selimut & Bantal', 'Bisa Reclining Seats Legrest', 'Kru & Tour Leader Ramah'],
    description: 'Armada Big Bus Eksekutif Zivanes pilihan utama perjalanan pariwisata jarak jauh dengan kenyamanan tempat duduk Legrest dan fasilitas hiburan lengkap.',
    rating: 4.9,
    reviewsCount: 128,
    specifications: [
      { label: 'Kapasitas', value: '45 - 48 Kursi Legrest' },
      { label: 'Fasilitas Bus', value: 'Full AC, Toilet, Karaoke, Charger, Selimut & Bantal' },
      { label: 'Pelayanan', value: 'Termasuk Driver Profesional & Kru Tour Leader' }
    ]
  },
  {
    id: 'bus-nyaman-holiday',
    name: 'Nyaman Holiday Bus',
    category: 'Big Bus Pariwisata',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Harga Terbaik',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    seats: 50,
    transmission: 'Manual',
    fuel: 'Diesel High Power',
    includeList: ['Full AC Multi-Zone', 'Toilet Higienis', 'Audio System & Karaoke', 'Bantal & Selimut', 'Tour Leader Berpengalaman'],
    description: 'Bus Pariwisata Nyaman Holiday menghadirkan suasana wisata yang hangat dan menyenangkan bagi rombongan sekolah, instansi, maupun keluarga besar.',
    rating: 4.9,
    reviewsCount: 115,
    specifications: [
      { label: 'Kapasitas', value: '48 - 50 Kursi Penumpang' },
      { label: 'Fasilitas Bus', value: 'Full AC, Toilet, Full Sound System, USB Charger' },
      { label: 'Pelayanan', value: 'Driver Berpengalaman & Kru Tour Ramah' }
    ]
  },
  {
    id: 'bus-miyor',
    name: 'Bus Eksekutif Miyor',
    category: 'Big Bus Luxury',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Harga Terbaik',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    seats: 45,
    transmission: 'Manual',
    fuel: 'Diesel Euro 4',
    includeList: ['Full AC', 'Toilet Bersih', 'Full Karaoke & Smart TV', 'Bantal & Selimut', 'Reclining Seats', 'Dispenser Air Minum'],
    description: 'Pilihan bus mewah Miyor dengan desain interior eksekutif kelas atas untuk wisata luar provinsi dan mancanegara.',
    rating: 5.0,
    reviewsCount: 142,
    specifications: [
      { label: 'Kapasitas', value: '35 - 45 Kursi Penumpang' },
      { label: 'Fasilitas Bus', value: 'Full AC, Toilet, Smart TV Karaoke, Bantal Selimut' },
      { label: 'Pelayanan', value: 'Driver Utama & Co-Driver Berlisensi Tour' }
    ]
  },
  {
    id: 'bus-kym',
    name: 'Bus Pariwisata KYM',
    category: 'Big Bus Eksekutif',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Harga Terbaik',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    seats: 48,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Full AC', 'Toilet', 'Audio Karaoke', 'Selimut & Bantal', 'Bagasi Ekstra Luas', 'Kru Tour Ramah'],
    description: 'Armada bus KYM yang terkenal tangguh dan nyaman melintasi rute Sumatera, Jawa, Bali, hingga antar provinsi.',
    rating: 4.8,
    reviewsCount: 98,
    specifications: [
      { label: 'Kapasitas', value: '48 Kursi Penumpang' },
      { label: 'Fasilitas Bus', value: 'Full AC, Toilet, Karaoke, Bagasi Bawah Luas' },
      { label: 'Pelayanan', value: 'Termasuk Kru Tour & BBM' }
    ]
  },
  {
    id: 'bus-sutan-raya',
    name: 'Bus Sutan Raya',
    category: 'Medium & Big Bus',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Harga Terbaik',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    seats: 35,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Full AC', 'Audio System', 'Reclining Seats', 'Kabin Bersih & Harum', 'Tour Leader Berpengalaman'],
    description: 'Bus Sutan Raya sangat cocok untuk rombongan kelas medium yang membutuhkan kelincahan di jalan perbukitan dan destinasi favorit.',
    rating: 4.9,
    reviewsCount: 86,
    specifications: [
      { label: 'Kapasitas', value: '31 - 35 Kursi Penumpang' },
      { label: 'Fasilitas Bus', value: 'Full AC, Sound System, Reclining Seats' },
      { label: 'Pelayanan', value: 'Driver Khusus Spesialis Tour Sumatera & Jawa' }
    ]
  },
  {
    id: 'bus-wulyudza',
    name: 'Bus Wulyudza',
    category: 'Medium Bus Pariwisata',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Harga Terbaik',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    seats: 33,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Full AC', 'Audio Karaoke', 'Kabin Steril', 'Kursi Reclining', 'Kru Pendamping'],
    description: 'Armada Medium Bus Wulyudza yang ekonomis, terawat, dan lincah untuk kunjungan wisata Sumatera Barat maupun luar daerah.',
    rating: 4.8,
    reviewsCount: 74,
    specifications: [
      { label: 'Kapasitas', value: '30 - 33 Kursi Penumpang' },
      { label: 'Fasilitas Bus', value: 'Full AC, Audio System, Charger Port' },
      { label: 'Pelayanan', value: 'Driver Ramah & Sopan' }
    ]
  },

  // CATEGORY 2: MOBIL HIACE RENTAL
  {
    id: 'hiace-premio',
    name: 'Toyota Hiace Premio',
    category: 'Minibus VIP',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/hiace_premio.png',
    seats: 12,
    transmission: 'Manual',
    fuel: 'Diesel Euro 4',
    includeList: ['Full AC Multi-Zone', 'Reclining Seats VIP', 'Audio Bluetooth & USB', 'Kabin Kedap Suara', 'Driver Profesional'],
    description: 'Minibus mewah Toyota Hiace Premio dengan tampilan elegan, tempat duduk lega, dan kedap suara untuk kenyamanan eksklusif.',
    rating: 4.9,
    reviewsCount: 110,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '11 - 12 Kursi VIP' },
      { label: 'Fasilitas Utama', value: 'AC Multi-Zone, Reclining Seats, Cabin Clean' },
      { label: 'Pelayanan', value: 'Driver Handal & Paham Rute Wisata' }
    ]
  },
  {
    id: 'hiace-commuter',
    name: 'Toyota Hiace Commuter',
    category: 'Minibus Pariwisata',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/hiace.avif',
    seats: 15,
    transmission: 'Manual',
    fuel: 'Diesel',
    includeList: ['Full AC Double Blower', 'Kabin Luas & Steril', 'Audio System Bluetooth', 'Reclining Seats', 'Driver Berpengalaman'],
    description: 'Pilihan paling favorit untuk rombongan keluarga atau tour grup sedang dengan kapasitas hingga 15 orang penumpang.',
    rating: 4.8,
    reviewsCount: 95,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '14 - 15 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Musikal Bluetooth, Charger HP' },
      { label: 'Pelayanan', value: 'Driver Ramah & Profesional' }
    ]
  },

  // CATEGORY 3: MOBIL MINI BUS & MPV RENTAL
  {
    id: 'alphard',
    name: 'Toyota Alphard',
    category: 'Luxury Executive VIP',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran VIP',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin Premium',
    includeList: ['Captain Seats Leather', 'Sunroof & Moonroof', 'Full AC Climate Control', 'Pilot Seats Massage', 'Driver VIP Khusus'],
    description: 'Mobil MPV Mewah nomor satu untuk tamu kehormatan, pejabat, pernikahan, dan perjalanan bisnis kelas atas.',
    rating: 5.0,
    reviewsCount: 88,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '6 - 7 Kursi Captain Seat' },
      { label: 'Fasilitas Utama', value: 'Pilot Seats, Dual Sunroof, Rear Entertainment' },
      { label: 'Pelayanan', value: 'Driver Berpakaian Rapi & Pelayanan VIP' }
    ]
  },
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn / Zenix',
    category: 'Premium MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Terbaik',
    image: '/innova3.avif',
    seats: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Diesel / Bensin',
    includeList: ['AC Double Blower', 'Suspensi Empuk & Stabil', 'Audio Touchscreen Bluetooth', 'Kabin Harum & Bersih', 'Driver Berpengalaman'],
    description: 'Mobil keluarga kelas premium dengan kenyamanan suspensi ekstra lembut dan kabin lapang untuk seluruh anggota keluarga.',
    rating: 4.9,
    reviewsCount: 135,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Climate Control, Audio Screen, Rear Charging' },
      { label: 'Pelayanan', value: 'Driver Berpengalaman Rute Sumatera & Jawa' }
    ]
  },
  {
    id: 'avanza',
    name: 'Toyota Avanza',
    category: 'Family MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Ekonomis',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin Irit',
    includeList: ['Full AC Double Blower', 'Kabin Bersih & Harum', 'Audio Bluetooth', 'Bagasi Fleksibel', 'Driver Ramah'],
    description: 'Mobil MPV paling populer dan ekonomis untuk perjalanan tour keluarga keliling Sumatera Barat maupun luar kota.',
    rating: 4.8,
    reviewsCount: 120,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '6 - 7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Audio System, Charger' },
      { label: 'Pelayanan', value: 'Driver Ramah & Tepat Waktu' }
    ]
  },
  {
    id: 'xenia',
    name: 'Daihatsu Xenia',
    category: 'Family MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Ekonomis',
    image: '/xenia.avif',
    seats: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin Irit',
    includeList: ['AC Double Blower', 'Kabin Steril', 'Audio Bluetooth', 'Driver Profesional'],
    description: 'Pilihan kendaraan praktis, lincah, dan hemat untuk kebutuhan wisata hemat bersama keluarga.',
    rating: 4.8,
    reviewsCount: 78,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '6 - 7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Double Blower, Audio System' },
      { label: 'Pelayanan', value: 'Driver Berpengalaman' }
    ]
  },
  {
    id: 'calya',
    name: 'Toyota Calya',
    category: 'Compact MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Ekonomis',
    image: '/calya.avif',
    seats: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin Sangat Irit',
    includeList: ['AC Rear Air Circulator', 'Kabin Harum & Steril', 'Audio Bluetooth', 'Driver Terpercaya'],
    description: 'Mobil rental hemat energi yang sangat efisien untuk antar-jemput bandara dan tour singkat.',
    rating: 4.8,
    reviewsCount: 65,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '6 - 7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Air Circulator, System Audio' },
      { label: 'Pelayanan', value: 'Driver Ramah & Tepat Waktu' }
    ]
  },
  {
    id: 'sigra',
    name: 'Daihatsu Sigra',
    category: 'Compact MPV',
    pricePerDay: 0,
    priceDisplay: 'Hubungi untuk Penawaran Ekonomis',
    image: '/sigra.avif',
    seats: 7,
    transmission: 'Manual / Automatic',
    fuel: 'Bensin Irit',
    includeList: ['AC Air Circulator', 'Kabin Harum', 'Audio System', 'Driver Berpengalaman'],
    description: 'Mobil rental kompak dan fleksibel dengan harga ramah kantong untuk rombongan kecil.',
    rating: 4.8,
    reviewsCount: 58,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '6 - 7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Air Circulator, Audio' },
      { label: 'Pelayanan', value: 'Driver Sopan & Terpercaya' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Hj. Syamsul Bahri',
    role: 'Ketua Rombongan Tour Bukittinggi & Sabang',
    text: 'Sangat puas menggunakan jasa CV. Anugrah Pariwisata! Bus Big Bus nya sangat nyaman, AC dingin, ada toilet bersih, karaoke, selimut bantal lengkap. Tour Leader mas Anton sangat ramah memandu kami sepanjang jalan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModel: 'Bus Eksekutif Zivanes',
    date: '2026-07-15'
  },
  {
    id: '2',
    name: 'Dra. Endang Rahayu',
    role: 'Panitia Wisata Dinas Padang Timur',
    text: 'Kami sewa 2 unit Toyota Hiace Premio untuk kunjungan dinas dan wisata Padang - Pesisir Selatan. Pelayanannya sangat berkelas, driver tepat waktu, dan penginapan hotel restoran yang disediakan amat memuaskan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Hiace Premio',
    date: '2026-07-10'
  },
  {
    id: '3',
    name: 'dr. H. Hendra Wijaya',
    role: 'Peserta Tour Internasional Singapura & Malaysia',
    text: 'Wisata hemat bersahaja namun fasilitasnya beneran hebat! Penangan tour internasional ke Malaysia Singapura dari CV. Anugrah Pariwisata luar biasa rapi. Tempat wisatanya cantik-cantik!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModel: 'Tour Internasional Singapura-Malaysia',
    date: '2026-07-02'
  }
];
