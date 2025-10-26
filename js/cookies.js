// Gestion du bandeau de cookies RGPD
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur a déjà accepté/refusé les cookies
    if (!getCookie('cookieConsent')) {
        showCookieBanner();
    }
});

function showCookieBanner() {
    // Créer le bandeau
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background: linear-gradient(135deg, #2D3436 0%, #1A1A2E 100%); color: white; padding: 25px 20px; box-shadow: 0 -5px 30px rgba(0,0,0,0.3); z-index: 9999; animation: slideUp 0.5s ease;">
            <div class="container" style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 25px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 12px;">
                        <span style="font-size: 2rem;">🍪</span>
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin: 0; color: white;">Nous utilisons des cookies</h3>
                    </div>
                    <p style="font-size: 0.95rem; line-height: 1.6; color: rgba(255,255,255,0.85); margin: 0;">
                        Ce site utilise des cookies pour améliorer votre expérience de navigation, analyser le trafic et personnaliser le contenu. 
                        En continuant à naviguer, vous acceptez notre utilisation des cookies.
                        <a href="#" onclick="event.preventDefault(); showCookieDetails();" style="color: #FF8C42; text-decoration: underline; margin-left: 5px;">En savoir plus</a>
                    </p>
                </div>
                <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                    <button onclick="acceptCookies()" style="background: linear-gradient(135deg, #FF8C42, #4ECDC4); color: white; border: none; padding: 14px 35px; border-radius: 25px; font-weight: 600; font-size: 1rem; cursor: pointer; box-shadow: 0 5px 20px rgba(255, 140, 66, 0.3); transition: all 0.3s; white-space: nowrap;">
                        ✓ Accepter
                    </button>
                    <button onclick="refuseCookies()" style="background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); padding: 14px 35px; border-radius: 25px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s; white-space: nowrap;">
                        ✕ Refuser
                    </button>
                </div>
            </div>
        </div>
        <style>
            @keyframes slideUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            #cookie-banner button:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            }
            @media (max-width: 768px) {
                #cookie-banner > div > div {
                    flex-direction: column;
                    text-align: center;
                }
                #cookie-banner button {
                    width: 100%;
                }
            }
        </style>
    `;
    
    document.body.appendChild(banner);
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    hideCookieBanner();
    // Ici vous pouvez activer Google Analytics ou autres trackers
    console.log('Cookies acceptés');
}

function refuseCookies() {
    setCookie('cookieConsent', 'refused', 365);
    hideCookieBanner();
    console.log('Cookies refusés');
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.animation = 'slideDown 0.5s ease';
        setTimeout(() => {
            banner.remove();
        }, 500);
    }
}

function showCookieDetails() {
    alert('Politique de cookies\n\n' +
          'Nous utilisons des cookies pour :\n' +
          '• Assurer le bon fonctionnement du site\n' +
          '• Mémoriser vos préférences\n' +
          '• Analyser le trafic (Google Analytics)\n' +
          '• Améliorer votre expérience utilisateur\n\n' +
          'Vous pouvez modifier vos préférences à tout moment en supprimant les cookies de votre navigateur.');
}

// Fonctions utilitaires pour gérer les cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Animation de sortie
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
