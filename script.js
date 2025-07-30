document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    // --- Efek bayangan pada header saat scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Smooth scrolling ---
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // --- Highlight nav link aktif ---
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
            const sectionHeight = section.offsetHeight;

            // Logika utama untuk semua seksi
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // REVISI: Logika khusus untuk menangani seksi paling bawah
        // Jika posisi scroll sudah mendekati akhir halaman, paksa 'current' ke 'contact'
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 50) {
            current = 'contact';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- FUNGSI BARU: Logika Hamburger Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Menutup menu saat sebuah link diklik
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

});



document.addEventListener('DOMContentLoaded', function() {
    
    // --- SEMUA LOGIKA JAVASCRIPT ANDA ADA DI SINI ---

    // --- LOGIKA UNTUK NAVBAR DAN SMOOTH SCROLL (SUDAH ADA) ---
    const header = document.getElementById('header');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    // Efek bayangan pada header saat scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Highlight nav link aktif
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - navbar.offsetHeight - 50) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    
    
    const portfolioData = [
        {
            id: 'pertamina-event',
            title: 'Event Pertamina',
            thumbnail: 'img/Event Pertamina/EVALUASI KINERJA, LESSON-LEARN PENGEBORAN 2023 (POST DRILL)  & KESIAPAN PENGEBORAN 2024 (PRE-DRILL) Kuningan, 4-6 Januari 2024.jpg',
            images: [
                { src: 'img/Event Pertamina/Halal Bihalal Pertamina.jpg', caption: 'Halal Bihalal Pertamina' },
                { src: 'img/Event Pertamina/In House AGT Batch 4.jpg', caption: 'In House AGT Batch 4' },
                { src: 'img/Event Pertamina/In House Elektrostatis.jpg', caption: 'In House Elektrostatis' },
                { src: 'img/Event Pertamina/In House Natural Gas Plant & Maintenance.jpg', caption: 'In House Natural Gas' },
                { src: 'img/Event Pertamina/KONSINYERING TRAINING NEED ANALYSIS ZONA 7.jpg', caption: 'Training Need Analysis Zona 7' },
                { src: 'img/Event Pertamina/Kunjungan Mahasiswa Akamigas di SP-ABG.jpg', caption: 'Kunjungan Mahasiswa Akamigas' },
                { src: 'img/Event Pertamina/MWT VP SCM Regional 2 (1).jpg', caption: 'MWT VP SCM Regional 2' },
                { src: 'img/Event Pertamina/Penanaman Mangrove Feb 28 2024 (2).jpg', caption: 'Event Penanaman Mangrove' }
            ]
        },
        {
            id: 'ifg-fun-run',
            title: 'IFG Fun RUN 2023',
            thumbnail: 'img/IFG Fun RUN 2023/IMG Sept 17 2023 (2).jpg',
            images: [
                { src: 'img/IFG Fun RUN 2023/Image Sept 17 2023.jpg', caption: '' },
                { src: 'img/IFG Fun RUN 2023/IMG Sept 17 2023 (1).jpg', caption: '' },
                { src: 'img/IFG Fun RUN 2023/IMG Sept 17 2023 (2).jpg', caption: '' },
                { src: 'img/IFG Fun RUN 2023/IMG Sept 17 2023.jpg', caption: '' },
                { src: 'img/IFG Fun RUN 2023/IMG Sept 17 2023 (4).jpg', caption: '' },
                { src: 'img/IFG Fun RUN 2023/IMG Sept 17 2023 (3).jpg', caption: '' }
            ]
        },
        {
            id: 'ptPAL-event',
            title: 'Event PT PAL Indonesia',
            thumbnail: 'img/Manajemen PT PAL/Manajemen PT PAL Rakor Aug 3 2024.jpg',
            images: [
                { src: 'img/Manajemen PT PAL/Image Aug 3 2024.jpg', caption: '' },
                { src: 'img/Manajemen PT PAL/Image Aug 3 2024 (1).jpg', caption: 'Outdoor Activity' },
                { src: 'img/Manajemen PT PAL/Image Aug 4 2024.jpg', caption: '' },
                { src: 'img/Manajemen PT PAL/Manajemen PT PAL Rakor Aug 3 2024.jpg', caption: 'Rakor Manajemen PT PAL' },
                { src: 'img/Manajemen PT PAL/Rakor Pal Taman Dayu (1).jpg', caption: 'Rakor PT PAL Taman Dayu' },
                { src: 'img/Event Galeri/Supply Chain PT PAL - Rakor.jpg', caption: 'Rafting DIVISI Supply Chain' }
            ]
        },
        {
            id: 'jtb-running-event',
            title: 'JTB Running 2023',
            thumbnail: 'img/JTB RUNNING 2023/Image DSC 0246.JPG',
            images: [
                { src: 'img/JTB RUNNING 2023/DSC 0473.JPG', caption: '' },
                { src: 'img/JTB RUNNING 2023/DSC 0576.JPG', caption: '' },
                { src: 'img/JTB RUNNING 2023/Image DSC 0246.JPG', caption: '' },
                { src: 'img/JTB RUNNING 2023/Image DSC 0606.JPG', caption: '' },
                { src: 'img/JTB RUNNING 2023/Image DSC 0622.JPG', caption: '' },
                { src: 'img/JTB RUNNING 2023/Image DSC05879.JPG', caption: '' }
                
            ]
        },
        {
            id: 'rtm-event',
            title: 'RTM Banyuwangi',
            thumbnail: 'img/RTM Banyuwangi/RTM Banyuwangi Jan 10 2025.jpg',
            images: [
                { src: 'img/RTM Banyuwangi/Image Jan 8 2025.jpg', caption: '' },
                { src: 'img/RTM Banyuwangi/Image Jan 11 2025.jpg', caption: '' },
                { src: 'img/RTM Banyuwangi/RTM Banyuwangi Jan 10 2025.jpg', caption: '' }
            ]
        },
        {
            id: 'workshop-event',
            title: 'Workshop SSOP ABG',
            thumbnail: 'img/Workshop SSOP ABG /Image July 22 2022.jpg',
            images: [
                { src: 'img/Workshop SSOP ABG /Workshop SSOP ABG July 2022.jpg', caption: '' },
                { src: 'img/Workshop SSOP ABG /IMG July 18 2022.jpg', caption: '' },
                { src: 'img/Workshop SSOP ABG /IMG July 22 2022 (3).jpg', caption: '' },
                { src: 'img/Workshop SSOP ABG /IMG July 22 2022.jpg', caption: '' },
                { src: 'img/Workshop SSOP ABG /IMG July 22 2022 (1).jpg', caption: '' },
                { src: 'img/Workshop SSOP ABG /Image July 22 2022.jpg', caption: '' }
            ]
        },
        {
            id: 'penutupan-event',
            title: 'Penutupan Bulan K3',
            thumbnail: 'img/Penutupan Bulan K3/Image Mar 5 2024.jpg',
            images: [
                { src: 'img/Penutupan Bulan K3/Image Mar 5 2024.jpg', caption: '' },
                { src: 'img/Penutupan Bulan K3/Image Mar 6 2024 (1).jpg', caption: '' },
                { src: 'img/Penutupan Bulan K3/Image Mar 6 2024 (2).jpg', caption: '' },
                { src: 'img/Penutupan Bulan K3/Image Mar 6 2024.jpg', caption: '' },
                { src: 'img/Penutupan Bulan K3/IMG Mar 6 2024.jpg', caption: '' },
                { src: 'img/Penutupan Bulan K3/IMG-20240306-WA0048.jpg', caption: '' }
            ]
        },
        {
            id: 'other-event',
            title: 'Other MICE',
            thumbnail: 'img/Other MICE/Akhlaq.jpg',
            images: [
                { src: 'img/Other MICE/InHouse Training SPR Langgak July 24 2022.jpeg', caption: 'InHouse Training SPR Langgak' },
                { src: 'img/Other MICE/Akhlaq.jpg', caption: 'Event BUMN AKHLAK' },
                { src: 'img/Other MICE/InHouse Training SPR Langgak July 28 2022 (1).jpeg', caption: 'InHouse Training SPR Langgak' },
                { src: 'img/Other MICE/PEP Mini Olympic.jpg', caption: 'PEP Mini Olympic' },
                { src: 'img/Event Galeri/IADC Drilling.jpg', caption: 'IADC Drilling' },
                { src: 'img/Event Galeri/IADC OGO.jpg', caption: 'IADC OGO' },
                { src: 'img/Event Galeri/Dinner Mini Olympics.jpg', caption: 'Dinner Mini Olympics' },
                { src: 'img/Event Galeri/Lomba Fire Combat.jpg', caption: 'Lomba Fire Combat' },
                { src: 'img/Event Galeri/Seminar Hulu Migas - Universitas Wiralodra.jpg', caption: 'Seminar Hulu Migas - Universitas Wiralodr' },
                { src: 'img/Event Galeri/Sertifikasi Kinarya Primaxindo 2023.jpg', caption: 'Sertifikasi Kinarya Primaxindo 2023' },
                { src: 'img/Event Galeri/Upskilling AKHLAK - AoC.jpg', caption: 'Upskilling AKHLAK' },
                { src: 'img/Event Galeri/Supply Chain PT PAL - Rakor.jpg', caption: 'Supply Chain PT PAL' }
            ]
        },
        {
            id: 'pengadaan',
            title: 'Galeri Pengadaan',
            thumbnail: 'img/PENGADAAN/IMG Mar 5 2024.jpg',
            images: [
                { src: 'img/PENGADAAN/Image Mar 6 2024.jpg', caption: 'Konsumsi' },
                { src: 'img/PENGADAAN/Image Mar 5 2024.jpg', caption: 'Dekorasi' },
                { src: 'img/PENGADAAN/IMG Mar 5 2024.jpg', caption: 'Dekorasi' },
                { src: 'img/PENGADAAN/Jacket Parasut July 3 2025.jpg', caption: 'Jaket Parasut' },
                { src: 'img/PENGADAAN/Kehati Laut.png', caption: 'Baju Kaos' },
                { src: 'img/PENGADAAN/Merchandise.jpg', caption: 'Merchandise' },
                { src: 'img/PENGADAAN/Merchendise.jpg', caption: 'Snack' },
                { src: 'img/PENGADAAN/Penutupan Bulan K3.jpg', caption: 'Door Prize' },
                { src: 'img/PENGADAAN/Supply barang.jpg', caption: 'Elektronik' }
            ]
        }
    ];

    const folderContainer = document.querySelector('.portfolio-folders');
    const galleryView = document.querySelector('.portfolio-gallery-view');

    // PENTING: Lakukan pengecekan apakah elemen galeri ada di halaman
    if (folderContainer && galleryView) {
        const galleryGrid = galleryView.querySelector('.portfolio-grid');
        const galleryTitle = galleryView.querySelector('.gallery-title');
        const backButton = galleryView.querySelector('.back-to-folders-btn');

        function renderFolders() {
            let folderHTML = '';
            portfolioData.forEach(folder => {
                folderHTML += `
                    <div class="folder-card" data-id="${folder.id}">
                        <img src="${folder.thumbnail}" alt="${folder.title}">
                        <div class="folder-overlay">
                            <h4>${folder.title}</h4>
                        </div>
                    </div>
                `;
            });
            folderContainer.innerHTML = folderHTML;
        }

        function renderImages(images) {
            let imagesHTML = '';
            images.forEach(image => {
                // REVISI: Menambahkan div untuk overlay caption
                imagesHTML += `
                    <div class="portfolio-item">
                        <img src="${image.src}" alt="${image.caption}">
                        <div class="portfolio-item-overlay">
                            <p>${image.caption}</p>
                        </div>
                    </div>
                `;
            });
            galleryGrid.innerHTML = imagesHTML;
        }

        function showGallery(folderId) {
            const folder = portfolioData.find(f => f.id === folderId);
            if (folder) {
                galleryTitle.textContent = folder.title;
                renderImages(folder.images);
                
                folderContainer.style.display = 'none';
                galleryView.style.display = 'block';
            }
        }

        function showFolders() {
            galleryView.style.display = 'none';
            folderContainer.style.display = 'grid';
        }
        
        folderContainer.addEventListener('click', function(e) {
            const card = e.target.closest('.folder-card');
            if (card) {
                showGallery(card.dataset.id);
            }
        });

        backButton.addEventListener('click', showFolders);

        renderFolders(); // Tampilkan folder saat halaman dimuat
    }
}); // <-- Kurung tutup dari DOMContentLoaded utama