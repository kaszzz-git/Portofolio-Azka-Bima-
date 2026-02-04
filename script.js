// Membuat efek daun jatuh
function createLeaves() {
    const leafCount = 15;
    const container = document.body;
    const leafEmojis = ['🍃', '🍂', '🌿', '🍁'];
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // Pilih emoji daun secara acak
        const randomEmoji = leafEmojis[Math.floor(Math.random() * leafEmojis.length)];
        leaf.innerHTML = randomEmoji;
        
        // Posisi dan animasi acak
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 5;
        const fontSize = 15 + Math.random() * 15;
        
        leaf.style.left = `${left}%`;
        leaf.style.animationDuration = `${duration}s`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.fontSize = `${fontSize}px`;
        
        container.appendChild(leaf);
    }
}

// Animasi saat scroll
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll untuk menu navigasi
function initSmoothScroll() {
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    // Buat efek daun jatuh
    createLeaves();
    
    // Tambah kelas fade-in ke elemen yang ingin dianimasikan
    const sections = document.querySelectorAll('section, .card');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Cek animasi saat load
    handleScrollAnimations();
    
    // Tambah event listener untuk scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Inisialisasi smooth scroll
    initSmoothScroll();
    
    // Animasi untuk tombol hubungi saya
    const contactBtn = document.querySelector('.card button');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = 'Mengirim...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = 'Terkirim!';
                this.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = 'linear-gradient(to right, var(--warna-tanah), #a1887f)';
                    this.disabled = false;
                }, 2000);
            }, 1000);
        });
    }
    
    // Tambah efek ketikan pada judul
    // const heroTitle = document.querySelector('.hero-left h1');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     heroTitle.textContent = '';
        
    //     let i = 0;
    //     function typeWriter() {
    //         if (i < originalText.length) {
    //             heroTitle.textContent += originalText.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 10);
    //         }
    //     }
        
    // }
});