document.addEventListener('DOMContentLoaded', function() {
    
    // --- Inisialisasi Elemen Utama ---
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");


    // ======================================================
    // --- LOGIKA UNTUK NAVBAR DAN FUNGSI UMUM ---
    // ======================================================

    // 1. Efek 'scrolled' pada Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Highlight Nav Link Aktif saat Scroll
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
            if (scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
            currentSectionId = 'contact';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    });

    // 4. Logika Hamburger Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
    // ======================================================
    // --- FUNGSI BARU: MENGHUBUNGKAN KOMPETENSI KE DETAIL LAYANAN ---
    // ======================================================

    const competencyCards = document.querySelectorAll('.competency-card[data-scroll-target]');

    competencyCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetId = this.dataset.scrollTarget;
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================================================
    // --- LOGIKA UNTUK GALERI (NESTED FOLDER & LIGHTBOX) v2 ---
    // ======================================================

    const portfolioData = [
        // Kategori Utama 1: Langsung berisi album
        {
            type: 'category',
            id: 'mice-organizer',
            title: 'MICE Organizer',
            thumbnail: 'img/C_MICE.JPG',
            children: [

                // ALBUM IFG Fun RUN 2023
                {  type: 'album', 
                    id: 'ifg-fun-run', 
                    title: 'IFG Fun RUN 2023', 
                    thumbnail: 'img/MICE/IFG/Copy of IMG_20230917_074111_596.jpg', 
                    children: [
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_055407_876.jpg', caption:'Foto Bersama'},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_060602_212.jpg', caption:'Stretching'},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_060632_631.jpg', caption:'Stretching'},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_060653_115.jpg', caption:'Stretching'},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_061341_933.jpg', caption:'Persiapan Fun Run'},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_074111_596.jpg', caption:'Foto Bersama'},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_074328_168.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_080140_291.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/IFG/Copy of IMG_20230917_082124_290.jpg', caption:'Foto Bersama'},
                    ]
                },

                // ALBUM PERTAMINA EP
                { type: 'album', 
                    id: 'pertamina-ep', 
                    title: 'PERTAMINA EP', 
                    thumbnail: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6964.JPG', 
                    children: [
                        // FGD Produksi TWIII 2024
                        {  type: 'album', 
                            id: 'fgd-produksi-twiii-2024', 
                            title: 'FGD Produksi TWIII 2024', 
                            thumbnail: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6838.JPG', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6851.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6893.JPG', caption:'Pembukaan FGD'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6927.JPG', caption:'Sambutan'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6933.JPG', caption:'Sesi FGD'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF6964.JPG', caption:'Entertainment'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7090.JPG', caption:'Foto Bersama'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7133.JPG', caption:'Pemaparan Materi'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7142.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7148.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7180.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7194.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/FGD Produksi TWIII 2024/Copy of DSCF7303.JPG', caption:''},
                            ]
                        },
                        // FGD Produksi TWIII 2024


                        // Jatibarang Field Running
                        {  type: 'album', 
                            id: 'jatibawangfield', 
                            title: 'Jatibarang Field Running', 
                            thumbnail: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0101.JPG', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0125.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0129.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0166.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0263.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0288.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0317.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0405.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Jatibarang Field Running/Copy of DSC_0473.JPG', caption:''},
                            ]
                        },
                        // Jatibarang Field Running


                        // MEETING SUPPORT PERTAMINA
                        {  type: 'album', 
                            id: 'meetingsupport', 
                            title: 'Meeting Support', 
                            thumbnail: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of P1125730.JPG', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of P1125730.JPG', caption:'Dekorasi Ruangan'},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of IMG-20240226-WA0081.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of P1125704.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of WhatsApp Image 2024-02-27 at 11.21.16_d16194be.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of P1125730.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Meeting Support/Copy of WhatsApp Image 2024-02-26 at 20.09.45_d2adf8b7.jpg', caption:''},
                            ]
                        },
                        // MEETING SUPPORT PERTAMINA


                        // MWT VP REGIONAL 2
                        {  type: 'album', 
                            id: 'mwt-vp-regional-2', 
                            title: 'MWT VP Regional 2', 
                            thumbnail: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240131-WA0107.jpg', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240131-WA0107.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240131-WA0058.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240131-WA0061.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240201-WA0042.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240201-WA0047.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240201-WA0061.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of IMG-20240201-WA0107.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/MWT VP Regional 2/Copy of WhatsApp Image 2024-02-01 at 09.33.21_47b0f2bd.jpg', caption:''},
                            ]
                        },
                        // MWT VP REGIONAL 2


                        // RAKOR EVALUASI KINERJA PENGEBORAN 2023 DAN KESIAPAN PENGEBORAN 2024
                        {  type: 'album', 
                            id: 'rakorevaluasi-kinerja', 
                            title: 'Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024', 
                            thumbnail: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240104-WA0027.jpg', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240104-WA0029.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240106-WA0024.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240106-WA0032.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240107-WA0013.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240106-WA0040.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor Evaluasi Kinerja Pengeboran 2023 dan Kesiapan Pengeboran 2024/Copy of IMG-20240106-WA0038.jpg', caption:''},
                            ]
                        },
                        // RAKOR EVALUASI KINERJA PENGEBORAN 2023 DAN KESIAPAN PENGEBORAN 2024


                        // RAKOR HSSE ZONA 7 2023
                        {  type: 'album', 
                            id: 'rakorhsse-zona', 
                            title: 'Rakor HSSE Zona 7 2023', 
                            thumbnail: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of ZF0_9175.JPG', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of DSC00577.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of DSC00618.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of DSC00693.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of DSC00625.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of ZF0_9132.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of ZF0_9291.JPG', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Rakor HSSE Zona 7 2023/Copy of ZF0_9691.JPG', caption:''},
                            ]
                        },
                        // RAKOR HSSE ZONA 7 2023


                        // RTM PEP Zona 7 2024 Banyuwangi
                        {  type: 'album', 
                            id: 'rtm-pertamina', 
                            title: 'RTM PEP Zona 7 2024 Banyuwangi', 
                            thumbnail: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9224.jpg', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9206.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9209.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9237.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9237.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9241.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9255.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9280.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9349.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9282.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/RTM PEP Zona 7 2024 Banyuwangi/Copy of pertamina ep 1-9354.jpg', caption:''},
                            ]
                        },
                        // RTM PEP Zona 7 2024 Banyuwangi


                        // Safari Ramadhan Zona 7 2024
                        {  type: 'album', 
                            id: 'safariramadan', 
                            title: 'Safari Ramadhan Zona 7 2024', 
                            thumbnail: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (222).jpg', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (82).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (186).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (218).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (222).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (237).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (241).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (243).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (256).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (270).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (411).jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Safari Ramadhan Zona 7 2024/Copy of Safari Ramadhan_Klayan (439).jpg', caption:''},
                            ]
                        },
                        // Safari Ramadhan Zona 7 2024


                        // Workshop SSOP ABG 2022
                        {  type: 'album', 
                            id: 'workshopssopabg', 
                            title: 'Workshop SSOP ABG 2022', 
                            thumbnail: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220718_004213.jpg', 
                            children: [
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220718_020724_1.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220718_162109_2.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220722_085846_1.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220722_105213_1.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220722_105332_2.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220722_105447_1.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220722_105624_1.jpg', caption:''},
                                { type: 'image', src: 'img/MICE/PERTAMINA EP/Workshop SSOP ABG 2022/Copy of IMG_20220722_110558.jpg', caption:''},
                            ]
                        },
                        // Workshop SSOP ABG 2022


                    ],
                },

                // ALBUM PT PAL INDONESIA
                {  type: 'album', 
                    id: 'ptpal', 
                    title: 'PT PAL - Rakor Manajemen PT PAL 2024', 
                    thumbnail: 'img/MICE/PT PAL INDONESIA/IMG20240803080225.jpg', 
                    children: [
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240803072759.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240803072836.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240803080225.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240803084709.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240803164816.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240804072725.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240804074925.jpg', caption:''},
                        { type: 'image', src: 'img/MICE/PT PAL INDONESIA/IMG20240804145121.jpg', caption:''},
                        
                    ]
                },

                // ALBUM SPR Langgak
                {  type: 'album', 
                    id: 'sprlanggak', 
                    title: 'SPR Langgak', 
                    thumbnail: 'img/MICE/SPR Langgak/Copy of IMG_20220724_091320.jpg', 
                    children: [
                        { type: 'image', src: 'img/MICE/SPR Langgak/Copy of IMG_20220723_103831.jpg', caption:'Foto Bersama'},
                        { type: 'image', src: 'img/MICE/SPR Langgak/Copy of IMG_20220724_091320.jpg', caption:'Sesi Foto Bersama'},
                        { type: 'image', src: 'img/MICE/SPR Langgak/Copy of IMG_20220724_185137.jpg', caption:'Photo Spot Acara'},
                        { type: 'image', src: 'img/MICE/SPR Langgak/In House Training & Silaturahmi Pekerja 1.jpg', caption:'Venue Acara'},
                    ]
                },
            ]
        },

        // Kategori Utama 2: Training & Certification
        {
            type: 'category',
            id: 'training-certification',
            title: 'Training & Certification',
            thumbnail: 'img/TRAINING & SERTIFIKASI/IMG-20250425-WA0109.jpg',
            children: [
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/Pelatihan Operasi PRODUKSI.jpeg', caption: 'Pelatihan Operasi MIGAS' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/Copy of DSCF9048.JPG', caption: 'Pelatihan & Sertifikasi IADC OGO' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/Copy of IMG20250522081054.jpg', caption: 'In House Training Authorized Gas Tester - Pertamina' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/Copy of IMG20250522083234.jpg', caption: 'In House Training Authorized Gas Tester - Pertamina' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/Copy of IMG20250522090334.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/DSCF8812.JPG', caption: 'Pelatihan & Sertifikasi IADC OGO' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250224-WA0040.jpg', caption: 'In House Training Pertamina' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250224-WA0047.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250225-WA0043.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250425-WA0093.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250425-WA0109.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250725-WA0021.jpg', caption: 'Pelatihan & Sertifikasi IADC OGO' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG-20250725-WA0023.jpg', caption: 'Pelatihan & Sertifikasi IADC OGO' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG20250527093449.jpg', caption: '' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG20250528081807.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG20250528083111.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG20250528083851.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG20250528084736.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/IMG20250528084741.jpg', caption: 'Training Authorized Gas Tester' },
                { type: 'image', src: 'img/TRAINING & SERTIFIKASI/WhatsApp Image 2025-05-09 at 08.38.33_65953a5a.jpg', caption: '' },
            ]
        },
        // Kategori Utama 3: Berisi album
        {
            type: 'category',
            id: 'general-supplier',
            title: 'General Supplier',
            thumbnail: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Penutupan Bulan K3.jpg',
            children: [

                // ALBUM PENGADAAN - PAL DEFEND ID
                { type: 'album', 
                    id: 'pengadaanpal', 
                    title: 'Pengadaan - PAL DEFEND ID', 
                    thumbnail: 'img/PENGADAAN_fix/PAL_DEFEND ID/Screenshot 2025-07-31 at 21.21.47.png', 
                    children: [
                    { type: 'image', src: 'img/PENGADAAN_fix/PAL_DEFEND ID/Screenshot 2025-07-31 at 21.21.47.png', caption: 'Plakat' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PAL_DEFEND ID/Screenshot 2025-07-31 at 21.21.58.png', caption: 'Botol Minum & Key Chain' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PAL_DEFEND ID/Screenshot 2025-07-31 at 21.22.01.png', caption: 'Tote Bag & Hanging Wallet' },
                    ]
                },

                // ALBUM PENGADAAN - PHSS RO 4300018848 Momento Safety South North
                { type: 'album', 
                    id: 'pengadaanphssro', 
                    title: 'PHSS RO 4300018848 Momento Safety South North', 
                    thumbnail: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/WhatsApp Image 2025-07-02 at 12.06.22_3fb721b6.jpg', 
                    children: [
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/WhatsApp Image 2025-07-02 at 12.06.22_3fb721b6.jpg', caption: 'Baju Polo' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/WhatsApp Image 2025-07-02 at 15.13.38_96a0ba24.jpg', caption: 'Baju Polo Lengan Panjang' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/WhatsApp Image 2025-07-02 at 13.33.46_db4672e9.jpg', caption: 'Baju Polo' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/Topi 2.jpg', caption: 'Topi' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/Topi 1.jpg', caption: 'Topi' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/Picture2-Jacket Bagian Samping.png', caption: 'Jaket' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS RO 4300018848_Momento Safety South North/Picture1-Jacket Bagian Belakang.png', caption: 'Jaket' },
                    ]
                },


                // ALBUM PENGADAAN - PHSS_4300015780 Momento HSSE & NAO
                { type: 'album', 
                    id: 'phsspengadaan', 
                    title: 'PHSS_4300015780_ Momento HSSE & NAO', 
                    thumbnail: 'img/PENGADAAN_fix/PHSS_4300015780_ Momento HSSE & NAO/WhatsApp Image 2025-07-03 at 15.27.32_Poloshirt (Depan)-Photoroom.png', 
                    children: [
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_4300015780_ Momento HSSE & NAO/WhatsApp Image 2025-07-03 at 15.27.32_Poloshirt (Depan)-Photoroom.png', caption: 'Baju Kaos' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_4300015780_ Momento HSSE & NAO/WhatsApp Image 2025-07-03 at 15.27.33_Jacket Parasut (Belakang).jpg', caption: 'Jaket Tampak Belakang' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_4300015780_ Momento HSSE & NAO/WhatsApp Image 2025-07-03 at 15.27.33_Jacket Parasut.jpg', caption: 'Jaket Tampak Depan' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_4300015780_ Momento HSSE & NAO/WhatsApp Image 2025-07-03 at 15.27.33_Poloshirt (Belakang).jpg', caption: 'Baju Kaos' },
                    ]
                },


                // PHSS Enviro PERTAMINA
                { type: 'album', 
                    id: 'phssenvironment', 
                    title: 'PHSS Enviro PERTAMINA', 
                    thumbnail: 'img/PENGADAAN_fix/PHSS_Enviro/belakang - Kehati darat.png', 
                    children: [
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/belakang - Kehati darat.png', caption: 'Design Baju Kaos Kehati Darat' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/depan - Kehati darat.png', caption: 'Design Baju Kaos Kehati Darat' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Kehati darat.png', caption: 'Design Baju Kaos Kehati Darat' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Kehati Laut (2).png', caption: 'Design Baju Kaos Kehati Laut' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Kehati Laut (3).png', caption: 'Design Baju Kaos Kehati Laut' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Kehati Laut.png', caption: 'Design Baju Kaos Kehati Laut' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Mangrove (2).png', caption: 'Design Baju Kaos Mangrove' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Mangrove (3).png', caption: 'Design Baju Kaos Mangrove' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Mangrove.png', caption: 'Design Baju Kaos Mangrove' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Pohon (2).png', caption: 'Design Baju Kaos Pohon' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Pohon (3).png', caption: 'Design Baju Kaos Pohon' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_Enviro/Pohon.png', caption: 'Design Baju Kaos Pohon' },
                    ]
                },


                // ALBUM PENGADAAN - PHSS PLANG OBVITNAS
                { type: 'album', 
                    id: 'phss-plang-obvitnas', 
                    title: 'PHSS PLANG OBVITNAS', 
                    thumbnail: 'img/PENGADAAN_fix/PHSS_RO4300018630_PLANG OBVITNAS/Screenshot 2025-07-31 at 21.23.58.png', 
                    children: [
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_RO4300018630_PLANG OBVITNAS/Screenshot 2025-07-31 at 21.23.58.png', caption: '' },
                    { type: 'image', src: 'img/PENGADAAN_fix/PHSS_RO4300018630_PLANG OBVITNAS/Screenshot 2025-07-31 at 21.24.11.png', caption: '' },
                    ]
                },


                // ALBUM PENGADAAN lainnya
                { type: 'album', 
                    id: 'pengadaan-lainnya', 
                    title: 'Pengadaan Lainnya', 
                    thumbnail: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Merchandise1.jpg', 
                    children: [
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Merchandise1.jpg', caption: 'Merchandise' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Image Mar 5 2024.jpg', caption: 'Dekorasi' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Image Mar 6 2024.jpg', caption: 'Konsumsi' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/IMG Mar 5 2024.jpg', caption: 'Dekorasi' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Merchandise.jpg', caption: 'Merchandise' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Merchendise.jpg', caption: 'Merchandise' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Penutupan Bulan K3.jpg', caption: 'Door Prize' },
                    { type: 'image', src: 'img/PENGADAAN_fix/Pengadaan_Lainnya/Supply barang.jpg', caption: 'Elektronik' },
                    ]
                },
            ]
        }
    ];

    const portfolioContainer = document.querySelector('#portfolio .container');

    if (portfolioContainer) {
        const breadcrumbContainer = portfolioContainer.querySelector('.portfolio-breadcrumb');
        const gridView = portfolioContainer.querySelector('.portfolio-grid-view');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const captionText = document.getElementById('lightbox-caption-text');
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        let breadcrumbStack = [{ title: 'Kategori', items: portfolioData }];
        let currentLightboxImages = [];
        let currentImageIndex = 0;

        function renderCurrentView() {
            const currentLevel = breadcrumbStack[breadcrumbStack.length - 1];
            let html = '';
            
            // Render Breadcrumb
            let breadcrumbHtml = '';
            breadcrumbStack.forEach((level, index) => {
                if (index < breadcrumbStack.length - 1) {
                    breadcrumbHtml += `<a class="breadcrumb-link" data-level="${index}">${level.title}</a><span class="breadcrumb-separator">/</span>`;
                } else {
                    breadcrumbHtml += `<span class="breadcrumb-current">${level.title}</span>`;
                }
            });
            breadcrumbContainer.innerHTML = breadcrumbHtml;

            // Render Grid
            currentLevel.items.forEach((item, index) => {
                if (item.type === 'category' || item.type === 'album') {
                    html += `<div class="gallery-item-card" data-index="${index}">
                                <img src="${item.thumbnail}" alt="${item.title}">
                                <div class="gallery-item-overlay"><h4>${item.title}</h4></div>
                            </div>`;
                } else if (item.type === 'image') {
                    html += `<div class="portfolio-image-item" data-index="${index}">
                                <img src="${item.src}" alt="${item.caption}">
                                <div class="portfolio-image-overlay"><p>${item.caption || ''}</p></div>
                            </div>`;
                }
            });
            gridView.innerHTML = html;
        }

        function navigateTo(item) {
            if (item && item.children && item.children.length > 0) {
                breadcrumbStack.push({ title: item.title, items: item.children });
                renderCurrentView();
            }
        }

        function navigateBack(level) {
            breadcrumbStack = breadcrumbStack.slice(0, level + 1);
            renderCurrentView();
        }

        gridView.addEventListener('click', e => {
            const card = e.target.closest('.gallery-item-card');
            const imageItem = e.target.closest('.portfolio-image-item');

            if (card) {
                const index = card.dataset.index;
                const currentLevel = breadcrumbStack[breadcrumbStack.length - 1];
                navigateTo(currentLevel.items[index]);
            } else if (imageItem) {
                const index = imageItem.dataset.index;
                openLightbox(index);
            }
        });

        breadcrumbContainer.addEventListener('click', e => {
            if (e.target.matches('.breadcrumb-link')) {
                const level = parseInt(e.target.dataset.level);
                navigateBack(level);
            }
        });
        
        // --- Lightbox Functions ---
        function openLightbox(index) {
            const currentLevel = breadcrumbStack[breadcrumbStack.length - 1];
            currentLightboxImages = currentLevel.items.filter(item => item.type === 'image');
            const imageIndexInLightbox = currentLightboxImages.findIndex(img => currentLevel.items[index] === img);
            
            currentImageIndex = imageIndexInLightbox;
            updateLightboxImage();
            lightbox.classList.add("active");
        }
        function closeLightbox() { lightbox.classList.remove("active"); }
        function updateLightboxImage() {
            const img = currentLightboxImages[currentImageIndex];
            if(img) {
                lightboxImg.src = img.src;
                captionText.innerHTML = img.caption || '';
            }
        }
        function showNextImage() { currentImageIndex = (currentImageIndex + 1) % currentLightboxImages.length; updateLightboxImage(); }
        function showPrevImage() { currentImageIndex = (currentImageIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length; updateLightboxImage(); }

        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', showNextImage);
        prevBtn.addEventListener('click', showPrevImage);
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) { closeLightbox(); }
        });

        // --- Inisialisasi ---
        renderCurrentView();
    }
    
});