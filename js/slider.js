// Slider d'activités
class ActivitiesSlider {
    constructor() {
        this.track = document.querySelector('.activities-track');
        this.cards = document.querySelectorAll('.activity-card');
        this.prevBtn = document.querySelector('.slider-btn-prev');
        this.nextBtn = document.querySelector('.slider-btn-next');
        this.dotsContainer = document.querySelector('.slider-dots');
        
        this.currentIndex = 0;
        this.cardsPerView = 3;
        this.totalCards = this.cards.length;
        this.maxIndex = Math.ceil(this.totalCards / this.cardsPerView) - 1;
        
        this.init();
    }
    
    init() {
        // Créer les points de navigation
        this.createDots();
        
        // Ajouter les événements
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Support du swipe sur mobile
        this.addSwipeSupport();
        
        // Support du clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Responsive
        window.addEventListener('resize', () => this.handleResize());
        this.handleResize();
        
        // Mise à jour initiale
        this.updateSlider();
    }
    
    createDots() {
        const dotsCount = this.totalCards - this.cardsPerView + 1;
        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateSlider() {
        // Calculer le déplacement
        const cardWidth = this.cards[0].offsetWidth;
        const gap = 32; // 2rem en pixels
        const offset = -(this.currentIndex * (cardWidth + gap));
        
        // Appliquer la transformation
        this.track.style.transform = `translateX(${offset}px)`;
        
        // Mettre à jour les points
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
        
        // Gérer la visibilité des boutons
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
        this.prevBtn.style.cursor = this.currentIndex === 0 ? 'default' : 'pointer';
        
        const maxSlide = this.totalCards - this.cardsPerView;
        this.nextBtn.style.opacity = this.currentIndex >= maxSlide ? '0.3' : '1';
        this.nextBtn.style.cursor = this.currentIndex >= maxSlide ? 'default' : 'pointer';
    }
    
    next() {
        const maxSlide = this.totalCards - this.cardsPerView;
        if (this.currentIndex < maxSlide) {
            this.currentIndex++;
            this.updateSlider();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlider();
        }
    }
    
    goToSlide(index) {
        const maxSlide = this.totalCards - this.cardsPerView;
        if (index <= maxSlide) {
            this.currentIndex = index;
            this.updateSlider();
        }
    }
    
    handleResize() {
        const width = window.innerWidth;
        
        if (width < 768) {
            this.cardsPerView = 1;
            this.cards.forEach(card => card.style.flex = '0 0 300px');
            this.cards.forEach(card => card.style.width = '300px');
        } else if (width < 1024) {
            this.cardsPerView = 2;
            this.cards.forEach(card => card.style.flex = '0 0 350px');
            this.cards.forEach(card => card.style.width = '350px');
        } else {
            this.cardsPerView = 3;
            this.cards.forEach(card => card.style.flex = '0 0 400px');
            this.cards.forEach(card => card.style.width = '400px');
        }
        
        const maxSlide = this.totalCards - this.cardsPerView;
        
        // Ajuster l'index si nécessaire
        if (this.currentIndex > maxSlide) {
            this.currentIndex = maxSlide;
        }
        
        // Recréer les dots
        this.dotsContainer.innerHTML = '';
        this.createDots();
        
        this.updateSlider();
    }
    
    addSwipeSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        const slider = document.querySelector('.activities-slider');
        
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            
            isDragging = false;
        });
        
        // Support souris pour desktop
        slider.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            slider.style.cursor = 'grabbing';
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            currentX = e.clientX;
        });
        
        slider.addEventListener('mouseup', () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            
            isDragging = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mouseleave', () => {
            isDragging = false;
            slider.style.cursor = 'grab';
        });
        
        slider.style.cursor = 'grab';
    }
}

// Initialiser le slider quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    new ActivitiesSlider();
});
