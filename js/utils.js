import CONFIG from './config.js';

// Formatage des dates
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Validation d'email
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validation de téléphone français
export const isValidPhone = (phone) => {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return phoneRegex.test(phone);
};

// Gestion des cookies
export const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

// Animation au scroll
export const animateOnScroll = (element, className = 'visible') => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: `${CONFIG.ANIMATION.SCROLL_OFFSET}px`
    });

    observer.observe(element);
};

// Gestion du lazy loading des images
export const lazyLoadImages = () => {
    const images = document.querySelectorAll('[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('img-loading');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Debounce pour optimisation des performances
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Gestion des erreurs de formulaire
export const showFormError = (input, message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.textContent = message;
    input.classList.add('error');
    input.parentNode.appendChild(errorDiv);
};

export const clearFormErrors = (form) => {
    form.querySelectorAll('.form-error').forEach(error => error.remove());
    form.querySelectorAll('.error').forEach(input => input.classList.remove('error'));
};

// Vérification de l'âge
export const isValidAge = (age) => {
    const numAge = parseInt(age);
    return numAge >= CONFIG.BOOKING.MIN_AGE && numAge <= CONFIG.BOOKING.MAX_AGE;
};

// Vérification des dates de réservation
export const isValidBookingDate = (date, type) => {
    const selectedDate = new Date(date);
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + CONFIG.BOOKING.MIN_ADVANCE_DAYS);

    if (selectedDate < minDate) return false;

    const day = selectedDate.getDay();
    if (type === 'weekend' && day !== CONFIG.BOOKING.WEEKEND_START_DAY) return false;
    if (type === 'week' && day !== CONFIG.BOOKING.WEEK_START_DAY) return false;

    return true;
};
