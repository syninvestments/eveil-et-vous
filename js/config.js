// Configuration globale du site
const CONFIG = {
    // Paramètres de réservation
    BOOKING: {
        MIN_AGE: 4,
        MAX_AGE: 12,
        MIN_ADVANCE_DAYS: 14,
        WEEKEND_START_DAY: 5, // Vendredi
        WEEK_START_DAY: 1,    // Lundi
        GROUP_SIZE_MIN: 8,
        GROUP_SIZE_MAX: 12
    },

    // Horaires des séjours
    SCHEDULE: {
        WEEKEND: {
            CHECK_IN: '18:00',
            CHECK_OUT: '16:00'
        },
        WEEK: {
            CHECK_IN: '09:00',
            CHECK_OUT: '16:00'
        }
    },

    // Contact
    CONTACT: {
        EMAIL: 'contact@eveil-vous.fr',
        PHONE: '01 23 45 67 89',
        HOURS: {
            OPEN: '09:00',
            CLOSE: '18:00'
        }
    },

    // Réseaux sociaux
    SOCIAL: {
        INSTAGRAM: 'https://instagram.com/',
        FACEBOOK: 'https://facebook.com/'
    },

    // Animation settings
    ANIMATION: {
        SCROLL_OFFSET: 100,
        MOBILE_BREAKPOINT: 768
    }
};

export default CONFIG;
