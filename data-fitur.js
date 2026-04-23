/**
 * DATA FITUR & KONSTANTA KATALOG UNDANGAN DIGITAL
 * File ini berisi semua data statis untuk katalog.
 * Pisahkan file ini agar index.html menjadi bersih dan mudah dimaintenance.
 */

// ============================================================================
// 1. KAMUS IKON (SVG Paths)
// ============================================================================
// Memisahkan SVG agar tidak memenuh-menuhi baris kode di bawahnya.
const ICONS = {
    user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", // guest, speakers
    usersGroup: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // unlimited, parents
    music: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    gallery: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    animasi: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", // rsvp, rundown
    message: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", // wishes
    gift: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
    heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", // love
    clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", // countdown
    calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", // gcal
    book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", // quotes
    map: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    send: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8", // tools
    qr: "M12 4v1m6 11h2m-6 0h-2v4h2v-4zm-6 12v-2m0 0v-2m0 2H4m8-10V4m6 11v-4m-6 4H4m8 0h2m-6 0h2v4H6v-4zm2-6h2v4h-2V9zm-2 0h-2v4h2V9zm-6 0H4v4h2V9zm6-6h2v4h-2V3zm-2 0h-2v4h2V3zm-6 0H4v4h2V3z", // qrcode
    desktop: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", // screen
    download: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", // materials
    star: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", // sponsors
    clothes: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", // dresscode
    warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", // rules
    video: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", // streaming
    refresh: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    currency: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    lightning: "M13 10V3L4 14h7v7l9-11h-7z",
    badgeCheck: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z",
    lock: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    checkCircle: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
};

// ============================================================================
// 2. MASTER DICTIONARY: SEMUA FITUR & ADDON YANG PERNAH ADA
// ============================================================================
// Semua ID fitur unik ada di sini. Tidak perlu meng-hardcode di HTML lagi.
const MASTER_FEATURES = {
    // --- FITUR DASAR (WEDDING/UMUM) ---
    'guest': { title: "Custom Nama Tamu", icon: ICONS.user, desc: "Sebarkan undanganmu lebih personal dengan menulis nama mereka secara otomatis pada cover undangan." },
    'unlimited': { title: "Unlimited Tamu", icon: ICONS.usersGroup, desc: "Kamu bisa kirim undanganmu kepada sebanyak mungkin tamu yang mau kamu undang tanpa biaya tambahan." },
    'music': { title: "Autoplay Musik", icon: ICONS.music, desc: "Lagu favoritmu akan otomatis berputar mengiringi undangan saat dibuka oleh tamu." },
    'gallery': { title: "Galeri Foto/Video", icon: ICONS.gallery, desc: "Bagikan momen bahagiamu dengan menampilkan galeri foto prewedding dan video cinematic." },
    'animasi': { title: "Animasi Gratis", icon: ICONS.animasi, desc: "Kami sediakan ratusan karakter animasi lucu dan menarik yang bisa kamu pakai gratis." },
    'rsvp': { title: "Fitur RSVP", icon: ICONS.clipboard, desc: "Dapatkan kepastian jumlah tamu dengan fitur konfirmasi kehadiran (Hadir/Tidak/Ragu)." },
    'wishes': { title: "Ucapan & Doa", icon: ICONS.message, desc: "Tamu undangan bisa memberikan ucapan selamat dan doa restu langsung di dalam undangan." },
    'gift': { title: "Wedding Gift", icon: ICONS.gift, desc: "Memudahkan tamu mengirimkan hadiah atau angpao digital melalui transfer bank/e-wallet." },
    'love': { title: "Love Story", icon: ICONS.heart, desc: "Ceritakan perjalanan kisah cintamu dengan pasangan dari awal bertemu hingga pelaminan." },
    'countdown': { title: "Countdown", icon: ICONS.clock, desc: "Hitung mundur waktu menuju momen bahagiamu agar tamu selalu ingat tanggalnya." },
    'gcal': { title: "Google Calendar", icon: ICONS.calendar, desc: "Tamu bisa menyimpan jadwal acaramu ke Google Calendar mereka dengan satu klik." },
    'quotes': { title: "Ayat & Quotes", icon: ICONS.book, desc: "Tampilkan ayat suci atau kata-kata mutiara favoritmu sebagai pemanis undangan." },
    'maps': { title: "Peta Navigasi", icon: ICONS.map, desc: "Panduan lokasi acara akurat dengan Google Maps agar tamu mudah menemukan tempatnya." },
    'tools': { title: "Sender Tools", icon: ICONS.send, desc: "Fitur eksklusif untuk mengirim undangan ke banyak kontak WhatsApp secara otomatis & personal." },
    
    // --- FITUR PREMIUM (DWIGITAL/DIAMOND) ---
    'qrcode': { title: "QR Code Check In", icon: ICONS.qr, desc: "Dapatkan Buku Tamu digital sekaligus QR Code otomatis yang akan membantumu mengetahui apakah tamu yang kamu undang hadir beserta waktu check in-nya." },
    'screen': { title: "Layar Sapa", icon: ICONS.desktop, desc: "Layar Sapa Real Time. Saat tamu berhasil check in ke acaramu, maka nama tamu akan ditampilkan di layar sapa yang telah disediakan." },

    // --- OVERRIDES: ACARA ANAK (KIDS) ---
    'music_kids': { title: "Lagu Ceria", icon: ICONS.music, desc: "Musik latar ceria yang disukai anak-anak." },
    'gallery_kids': { title: "Foto Si Kecil", icon: ICONS.gallery, desc: "Kumpulan foto kelucuan dan tumbuh kembang si kecil." },
    'gift_kids': { title: "Kado Ulang Tahun", icon: ICONS.gift, desc: "Kirim hadiah atau angpao digital untuk si kecil." },
    'quotes_kids': { title: "Doa Orang Tua", icon: ICONS.book, desc: "Harapan dan doa terbaik ayah bunda untuk masa depan anak." },
    'parents_kids': { title: "Profil Orang Tua", icon: ICONS.usersGroup, desc: "Menampilkan nama dan foto ayah bunda yang sedang berbahagia atas kelahiran/ulang tahun si kecil." },
    'dresscode_kids': { title: "Dress Code", icon: ICONS.clothes, desc: "Info kostum atau warna baju (e.g. Superhero, Princess) agar pesta semakin meriah." },

    // --- OVERRIDES: REMAJA (TEEN / SWEET 17) ---
    'music_teen': { title: "Trending Music", icon: ICONS.music, desc: "Musik hits pilihanmu yang bikin suasana makin asik." },
    'gallery_teen': { title: "Portrait Gallery", icon: ICONS.gallery, desc: "Deretan foto aesthetic dan momen seru kamu." },
    'wishes_teen': { title: "Best Wishes", icon: ICONS.message, desc: "Kolom ucapan dan harapan dari bestie-bestie kamu." },
    'gift_teen': { title: "Birthday Gift", icon: ICONS.gift, desc: "Tanda sayang dan kado dari teman-teman." },
    'dresscode_teen': { title: "Dress Code", icon: ICONS.clothes, desc: "Info tema outfit (e.g. Retro, Pastel, White) agar foto-foto kita makin aesthetic." },

    // --- OVERRIDES: SCHOOL & GRADUATION ---
    'music_school': { title: "Mars & Hymne", icon: ICONS.music, desc: "Otomatis memutar lagu Mars Universitas atau Hymne Sekolah." },
    'gallery_school': { title: "Galeri Kenangan", icon: ICONS.gallery, desc: "Tampilkan foto-foto nostalgia masa sekolah/kuliah." },
    'wishes_school': { title: "Ucapan Selamat", icon: ICONS.message, desc: "Fitur bagi teman/keluarga memberikan ucapan selamat wisuda." },
    'quotes_school': { title: "Quotes Motivasi", icon: ICONS.book, desc: "Kata-kata mutiara tentang pendidikan dan masa depan." },
    'animasi_school': { title: "Animasi Opening", icon: ICONS.animasi, desc: "Animasi pembuka yang elegan sesuai tema institusi." },
    'rundown_school': { title: "Susunan Acara", icon: ICONS.clipboard, desc: "Jadwal lengkap prosesi wisuda/sidang dari pembukaan hingga penutupan untuk kelancaran acara." },
    'dresscode_school': { title: "Dress Code", icon: ICONS.clothes, desc: "Informasi ketentuan busana (Toga/Batik/Formal) bagi wisudawan dan tamu undangan." },
    'rules_school': { title: "Tata Tertib", icon: ICONS.warning, desc: "Poin-poin protokol yang wajib dipatuhi tamu demi menjaga kekhidmatan prosesi sidang/wisuda." },
    'streaming_school': { title: "Live Streaming", icon: ICONS.video, desc: "Tautan langsung ke YouTube/Zoom bagi keluarga atau kerabat yang hadir secara virtual." },

    // --- OVERRIDES: ACARA FORMAL ---
    'music_formal': { title: "Autoplay Musik", icon: ICONS.music, desc: "Lagu instrumen corporate atau grand yang elegan." },
    'gallery_formal': { title: "Dokumentasi", icon: ICONS.gallery, desc: "Bagikan dokumentasi kegiatan acara." },
    'wishes_formal': { title: "Message Wall", icon: ICONS.message, desc: "Tamu undangan bisa memberikan pesan dan konfirmasi." },
    'animasi_formal': { title: "Animasi Gratis", icon: ICONS.animasi, desc: "Animasi transisi yang formal dan profesional." },
    'rundown_formal': { title: "Rundown Acara", icon: ICONS.clock, desc: "Daftar susunan acara dari pembukaan hingga penutupan agar tamu mengetahui jadwal kegiatan." },
    'speakers_formal': { title: "Profil Pembicara", icon: ICONS.user, desc: "Menampilkan foto dan bio singkat pembicara/narasumber untuk meningkatkan nilai jual acara." },
    'materials_formal': { title: "Download Materi", icon: ICONS.download, desc: "Link khusus jika acara tersebut menyediakan file materi atau e-sertifikat yang bisa diunduh tamu." },
    'sponsors_formal': { title: "Logo Partner", icon: ICONS.star, desc: "Section khusus untuk menampilkan logo-logo perusahaan partner atau sponsor yang bekerja sama." },

    // --- OVERRIDES: LAINNYA ---
    'music_other': { title: "Backsound Acara", icon: ICONS.music, desc: "Musik pengiring yang sesuai dengan tema acara." },
    'gallery_other': { title: "Galeri", icon: ICONS.gallery, desc: "Dokumentasi foto terkait kegiatan acara." },
    'gift_other': { title: "Tanda Kasih", icon: ICONS.gift, desc: "Fitur kirim hadiah digital (opsional)." },
    'rundown_other': { title: "Susunan Acara", icon: ICONS.clipboard, desc: "Informasi waktu dan agenda kegiatan agar tamu tidak ketinggalan momen penting." },
};

// ============================================================================
// 3. SISTEM PRESET BUNDLING
// ============================================================================
// Cukup masukkan ID 'paket_nama' di CSV kolom features. Sistem akan memuat semua array ini.
const PRESETS = {
    // KELOMPOK WEDDING
    'paket_wedding_starter': ['guest', 'unlimited', 'music', 'rsvp', 'wishes', 'gift', 'love', 'countdown', 'gcal', 'quotes', 'maps', 'tools'],
    'paket_wedding_basic':   ['guest', 'unlimited', 'music', 'gallery', 'animasi', 'rsvp', 'wishes', 'gift', 'love', 'countdown', 'gcal', 'quotes', 'maps', 'tools'],
    'paket_wedding_premium': ['guest', 'unlimited', 'music', 'gallery', 'animasi', 'rsvp', 'wishes', 'gift', 'love', 'countdown', 'gcal', 'quotes', 'maps', 'tools', 'qrcode', 'screen'],

    // KELOMPOK KIDS (Anak-anak)
    'paket_kids_basic':   ['guest', 'unlimited', 'music_kids', 'gallery_kids', 'animasi', 'rsvp', 'wishes', 'gift_kids', 'countdown', 'gcal', 'quotes_kids', 'maps', 'tools', 'parents_kids', 'dresscode_kids'],
    'paket_kids_premium': ['guest', 'unlimited', 'music_kids', 'gallery_kids', 'animasi', 'rsvp', 'wishes', 'gift_kids', 'countdown', 'gcal', 'quotes_kids', 'maps', 'tools', 'parents_kids', 'dresscode_kids', 'qrcode', 'screen'],

    // KELOMPOK TEEN (Remaja / Sweet 17)
    'paket_teen_basic':   ['guest', 'unlimited', 'music_teen', 'gallery_teen', 'animasi', 'rsvp', 'wishes_teen', 'gift_teen', 'countdown', 'gcal', 'quotes', 'maps', 'tools', 'dresscode_teen'],
    'paket_teen_premium':   ['guest', 'unlimited', 'music_teen', 'gallery_teen', 'animasi', 'rsvp', 'wishes_teen', 'gift_teen', 'countdown', 'gcal', 'quotes', 'maps', 'tools', 'dresscode_teen', 'qrcode', 'screen'],
        
    // KELOMPOK SCHOOL
    'paket_school_basic':   ['guest', 'unlimited', 'music_school', 'gallery_school', 'animasi_school', 'rsvp', 'wishes_school', 'countdown', 'gcal', 'quotes_school', 'maps', 'tools', 'rundown_school', 'dresscode_school', 'rules_school', 'streaming_school'],
    'paket_school_premium': ['guest', 'unlimited', 'music_school', 'gallery_school', 'animasi_school', 'rsvp', 'wishes_school', 'countdown', 'gcal', 'quotes_school', 'maps', 'tools', 'rundown_school', 'dresscode_school', 'rules_school', 'streaming_school', 'qrcode', 'screen'],

    // KELOMPOK FORMAL
    'paket_formal_basic':   ['guest', 'unlimited', 'music_formal', 'gallery_formal', 'animasi_formal', 'rsvp', 'wishes_formal', 'countdown', 'gcal', 'maps', 'tools', 'rundown_formal', 'speakers_formal', 'materials_formal', 'sponsors_formal'],
    'paket_formal_premium': ['guest', 'unlimited', 'music_formal', 'gallery_formal', 'animasi_formal', 'rsvp', 'wishes_formal', 'countdown', 'gcal', 'maps', 'tools', 'rundown_formal', 'speakers_formal', 'materials_formal', 'sponsors_formal', 'qrcode', 'screen'],

    // KELOMPOK OTHER
    'paket_other_basic':    ['guest', 'unlimited', 'music_other', 'gallery_other', 'animasi', 'rsvp', 'wishes', 'gift_other', 'countdown', 'gcal', 'quotes', 'maps', 'tools', 'rundown_other']
};

// ============================================================================
// 4. LAYANAN EKSTRA (TETAP SAMA UNTUK SEMUA TEMA)
// ============================================================================
const EXTRA_SERVICES_DB = [
    { id: 'revisi', title: "Free Revisi", icon: ICONS.refresh, desc: "Kami memastikan undangan yang kamu pesan tanpa ada kendala, untuk itu kami beri jaminan Revisi Gratis hingga hari H." },
    { id: 'fee', title: "Fixed Fee", icon: ICONS.currency, desc: "Kami memastikan harga yang tertera di katalog adalah harga final yang perlu kamu bayar. Tanpa biaya ini itu!" },
    { id: 'response', title: "Fast Response", icon: ICONS.lightning, desc: "Kami akan selalu berupaya untuk membalas pesanmu secepat yang kami bisa. Dan juga seramah yang kami bisa tentunya ^^" },
    { id: 'pro', title: "Profesional", icon: ICONS.badgeCheck, desc: "Kami memastikan bahwa undangan yang kamu pesan dikerjakan dengan hati, profesional, baik, dan sungguh-sungguh." },
    { id: 'privacy', title: "Privasi Data", icon: ICONS.lock, desc: "Kami memastikan semua data yang kamu kirim, termasuk nama, foto, alamat, nomor WA, aman dan tidak disalahgunakan." },
    { id: 'pay', title: "Bayar Setelah Jadi", icon: ICONS.checkCircle, desc: "Yup! Ini adalah bukti keseriusan kami dalam menjalankan usaha. Kami percaya orang baik pasti bertemu dengan orang baik." }
];

// ============================================================================
// 5. KONFIGURASI UMUM LAINNYA
// ============================================================================
const TIER_ORDER = [
    "Starter", "Tanpa Foto", "Bronze", "Silver", "Gold", "Platinum", "Diamond", 
    "Birthday", "Khitan", "Aqiqah",
    "Tema Adat Jawa", "Tema Adat Bugis", "Tema Adat Batak"
];

const CATEGORY_DATA = {
    'Wedding': { id: 'tema-wedding', label: 'Wedding Collections', icon: '💍', desc: 'Temukan desain undangan pernikahan impian Anda.' },
    'Kids': { id: 'acara-anak', label: 'Kids Collections', icon: '🎈', desc: 'Tema ceria untuk Aqiqah, Ulang Tahun, dan Khitan.' },
    'Formal': { id: 'acara-formal', label: 'Formal Events', icon: '🏢', desc: 'Undangan resmi untuk Seminar, Rapat, dan Gathering.' },
    'Teen': { id: 'teen-and-card', label: 'Teen & Cards', icon: '🎸', desc: 'Desain kekinian untuk Sweet 17 dan Ucapan Digital.' },
    'School': { id: 'school-and-graduation', label: 'School & Grad', icon: '🎓', desc: 'Rayakan kelulusan dan perpisahan sekolah.' },
    'Lainnya': { id: 'acara-lainnya', label: 'Other Events', icon: '📂', desc: 'Berbagai tema unik untuk kebutuhan acaramu.' }
};


// ============================================================================
// 6. KONFIGURASI DESKRIPSI & NOTIFIKASI TEMA
// ============================================================================


const DESC_FORMAL = `• Ini adalah contoh project yang sukses kami kerjakan
• Gambar, logo, konsep, warna tema, dll, akan disesuaikan dengan acara anda
• Pengerjaan maksimal 3 hari kerja
• Wajib DP minimal 50% dari total harga
• Gratis revisi hingga hari H`;

const DESC_TEEN = `• Ini adalah contoh Tema Teen Birthday yang sudah kami kerjakan sebelumnya 
• Semua fitur aktif, pengerjaan maksimal 24 jam
• Gratis revisi sampai hari H
• Tersedia layanan Express (2 jam selesai) – wajib DP 50% + fee express Rp20000`;

const DESC_TEMPLATE = `• Swipe ke kiri untuk melihat preview & fitur lengkap
• Semua fitur aktif, pengerjaan maksimal 24 jam
• Gratis revisi sampai hari H
• Tersedia layanan Express (2 jam selesai) – wajib DP 50% + fee express Rp20000`;

// Teks mutlak yang akan selalu muncul di bawah deskripsi unik dari CSV
// Kamus Template Deskripsi Tambahan berdasarkan kolom 'tier'
const DESC_TEMPLATES = {
    // 1. Fallback jika tier tidak ada di kamus ini (misal tier "Bronze", "Silver")
    "default": `• Swipe ke kiri untuk melihat preview & fitur lengkap
• Semua fitur aktif, pengerjaan maksimal 24 jam
• Gratis revisi sampai hari H
• Tersedia layanan Express (2 jam selesai) – wajib DP 50% + fee express Rp20000`,

// Grup 1: Formal
    "HUT & Anniversary": DESC_FORMAL,
    "Corporate": DESC_FORMAL,
    "Event": DESC_FORMAL,
    "Pelantikan": DESC_FORMAL,
    "Entertainment": DESC_FORMAL,
    "Event Kampus": DESC_FORMAL,
    "Graduation Party": DESC_FORMAL,
    "Pelepasan Siswa": DESC_FORMAL,
    "Perwira Pelayaran": DESC_FORMAL,
    "School Event": DESC_FORMAL,
    "Wisuda Kampus": DESC_FORMAL,
// Grup 2: Teen Birthday
    "Teen Birthday": DESC_TEEN,
// Grup 3 Template
    "Acara Islami": DESC_TEMPLATE,
    "Acara Kristiani": DESC_TEMPLATE
};

// Kamus notifikasi UI Dinamis (Menggantikan PHOTO_NOTIFICATIONS lama)
// Key di bawah ini disesuaikan dengan isi dari kolom "notification" di CSV Anda.
const UI_NOTIFICATIONS = {
    "wedding_no_image": {
        title: "Catatan Tema",
        message: "Ini adalah tema starter tanpa foto, untuk request penambahan foto ataupun animasi digital, akan dikenakan fee tambahan Rp. 20.000",
        theme: "purple", // Pilihan warna: yellow, blue, purple, teal, red
        iconType: "gallery" // Mengambil ikon dari dictionary ICONS di atas
    },
    
    "wedding_optional_image": {
        title: "Undangan Digital",
        message: `Tidak punya foto prewed? Tenang, tersedia animasi karakter 3D gratis sesuai kebutuhanmu, <a href="/animasi-digital" target="_blank" class="text-blue-400 hover:text-blue-300 underline font-semibold transition">cek disini</a>`,
        theme: "blue",
        iconType: "animasi"
    },
    
    "wedding_required_image": {
        title: "Penting!",
        message: "Tema ini memerlukan banyak foto prewedding (minimal 5 foto) untuk hasil maksimal.",
        theme: "yellow",
        iconType: "warning"
    },

    // --- CONTOH TAMBAHAN UNTUK KATEGORI LAIN ---
    // Anda bisa menambah sebanyak apapun key baru di bawah ini tanpa perlu mengedit HTML lagi
    
    "aqiqah_info": {
        title: "Info Tema Aqiqah",
        message: "Untuk tema aqiqah, Anda bisa menambahkan maksimal 3 orang anak dengan acara yang sama dalam satu undangan.",
        theme: "teal",
        iconType: "user"
    },

    "khitan_info": {
        title: "Spesial Khitanan",
        message: "Untuk tema khitan, Anda bisa menambahkan maksimal 3 orang anak dengan acara yang sama dalam satu undangan.",
        theme: "red",
        iconType: "badgeCheck"
    },
    
        "formal_info": {
        title: "Mohon Diperhatikan!",
        message: "Mengingat ini adalah tema custom, sebaiknya konsultasikan kepada admin mengenai konsep, detail acara, serta tujuan dari undangan.",
        theme: "yellow",
        iconType: "warning"
    },
    
    "party_info": {
        title: "Punya Konsep Sendiri?",
        message: "Kalau kamu punya referensi tema spesifik atau warna Dress Code khusus, jangan lupa sampaikan ke admin saat mengisi form data ya!",
        theme: "purple",
        iconType: "sparkles"
    },
    
    "religi_info": {
        title: "Kutipan & Susunan Acara",
        message: "Silakan siapkan kutipan ayat suci, doa khusus, atau urutan ibadah secara spesifik jika ingin ditambahkan ke dalam halaman undangan.",
        theme: "blue",
        iconType: "book"
    }

};
