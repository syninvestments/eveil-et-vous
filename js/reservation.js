// Gestion du formulaire de réservation
document.addEventListener('DOMContentLoaded', () => {
    const optionButtons = document.querySelectorAll('.select-option');
    const bookingForm = document.getElementById('bookingForm');
    const startDateInput = document.getElementById('startDate');

    // Gérer la sélection des options
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            optionButtons.forEach(btn => {
                btn.closest('.option-card').classList.remove('selected');
            });
            
            // Ajouter la classe active au bouton cliqué
            button.closest('.option-card').classList.add('selected');
            
            // Afficher le formulaire
            bookingForm.style.display = 'block';
            bookingForm.scrollIntoView({ behavior: 'smooth' });

            // Configurer les dates disponibles selon l'option
            const option = button.dataset.option;
            configureAvailableDates(option);
        });
    });

    // Configuration des dates disponibles
    function configureAvailableDates(option) {
        const today = new Date();
        const minDate = new Date(today);
        minDate.setDate(today.getDate() + 14); // Minimum 2 semaines à l'avance

        // Formatter la date minimum
        const minDateStr = minDate.toISOString().split('T')[0];
        startDateInput.min = minDateStr;

        // Si week-end, restreindre aux vendredis
        if (option === 'weekend') {
            startDateInput.addEventListener('input', (e) => {
                const selected = new Date(e.target.value);
                if (selected.getDay() !== 5) { // 5 = Vendredi
                    alert('Les séjours week-end commencent uniquement le vendredi.');
                    e.target.value = '';
                }
            });
        }

        // Si semaine, restreindre aux lundis
        if (option === 'week') {
            startDateInput.addEventListener('input', (e) => {
                const selected = new Date(e.target.value);
                if (selected.getDay() !== 1) { // 1 = Lundi
                    alert('Les séjours semaine commencent uniquement le lundi.');
                    e.target.value = '';
                }
            });
        }
    }

    // Gestion de la soumission du formulaire
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Récupérer toutes les données du formulaire
            const formData = new FormData(reservationForm);
            const data = Object.fromEntries(formData.entries());

            // Validation des données
            if (!validateForm(data)) {
                return;
            }

            // Simuler l'envoi (à remplacer par votre API)
            try {
                await submitReservation(data);
                showConfirmation();
            } catch (error) {
                showError();
            }
        });
    }

    // Validation du formulaire
    function validateForm(data) {
        // Vérifier l'âge de l'enfant
        const age = parseInt(data.childAge);
        if (age < 4 || age > 12) {
            alert('L\'âge de l\'enfant doit être compris entre 4 et 12 ans.');
            return false;
        }

        // Vérifier la date
        const selectedDate = new Date(data.startDate);
        const today = new Date();
        if (selectedDate < today) {
            alert('La date sélectionnée ne peut pas être dans le passé.');
            return false;
        }

        return true;
    }

    // Simulation de l'envoi de la réservation
    async function submitReservation(data) {
        // Simuler un délai d'envoi
        await new Promise(resolve => setTimeout(resolve, 1000));
        return true;
    }

    // Afficher la confirmation
    function showConfirmation() {
        const confirmation = document.createElement('div');
        confirmation.className = 'confirmation-message';
        confirmation.innerHTML = `
            <h3>Réservation confirmée !</h3>
            <p>Nous avons bien reçu votre demande de réservation. Un email de confirmation vous sera envoyé dans les prochaines minutes.</p>
        `;

        reservationForm.innerHTML = '';
        reservationForm.appendChild(confirmation);
    }

    // Afficher une erreur
    function showError() {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.innerHTML = `
            <h3>Une erreur est survenue</h3>
            <p>Veuillez réessayer ou nous contacter directement par téléphone.</p>
        `;

        reservationForm.prepend(error);
    }
});
