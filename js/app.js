// ========================================
// ÉVEIL & VOUS - JAVASCRIPT MODERNE
// ========================================

// === MENU MOBILE ===
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// === SLIDER D'ACTIVITÉS ===
class ActivitySlider {
    constructor() {
        this.track = document.querySelector('.activites-track');
        this.cards = document.querySelectorAll('.activity-card');
        this.prevBtn = document.querySelector('.slider-btn-prev');
        this.nextBtn = document.querySelector('.slider-btn-next');
        this.dotsContainer = document.querySelector('.slider-dots');
        
        if (!this.track || !this.cards.length) return;
        
        this.currentIndex = 0;
        this.cardsToShow = 3;
        
        this.init();
    }
    
    init() {
        this.updateCardsToShow();
        this.createDots();
        this.setupEventListeners();
        this.updateSlider();
        
        // Gérer le redimensionnement de la fenêtre
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.updateCardsToShow();
                this.createDots();
                
                // Ajuster l'index si nécessaire
                const maxIndex = this.cards.length - this.cardsToShow;
                if (this.currentIndex > maxIndex) {
                    this.currentIndex = maxIndex;
                }
                
                this.updateSlider();
            }, 100);
        });
    }
    
    updateCardsToShow() {
        const width = window.innerWidth;
        if (width < 768) {
            this.cardsToShow = 1;
        } else if (width < 1024) {
            this.cardsToShow = 2;
        } else {
            this.cardsToShow = 3;
        }
        
        console.log('Cards to show:', this.cardsToShow, 'Total cards:', this.cards.length);
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        const dotsCount = this.cards.length - this.cardsToShow + 1;
        
        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }
    
    updateSlider() {
        if (!this.cards[0]) return;
        
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 30;
        
        // On déplace d'une carte à la fois
        const offset = -this.currentIndex * (cardWidth + gap);
        
        console.log('Current Index:', this.currentIndex, 'Card Width:', cardWidth, 'Offset:', offset);
        
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Update dots
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
        
        // Update buttons
        const maxIndex = this.cards.length - this.cardsToShow;
        
        if (this.prevBtn) {
            this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
            this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
        }
        if (this.nextBtn) {
            this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.3' : '1';
            this.nextBtn.style.pointerEvents = this.currentIndex >= maxIndex ? 'none' : 'auto';
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
        }
    }
    
    next() {
        const maxIndex = this.cards.length - this.cardsToShow;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateSlider();
        }
    }
    
    goToSlide(index) {
        const maxIndex = this.cards.length - this.cardsToShow;
        if (index >= 0 && index <= maxIndex) {
            this.currentIndex = index;
            this.updateSlider();
        }
    }
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === HEADER SCROLL EFFECT ===
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        header.style.padding = '15px 0';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        header.style.padding = '20px 0';
    }
    
    lastScroll = currentScroll;
});

// === ANIMATIONS ON SCROLL ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.concept-card, .gallery-card, .activity-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// === INITIALISATION ===
document.addEventListener('DOMContentLoaded', () => {
    new ActivitySlider();
    console.log('✨ Éveil & Vous - Site chargé avec succès !');
});
