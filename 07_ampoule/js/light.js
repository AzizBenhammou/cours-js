// Localisation des éléments dans le DOM
const lightbulb = document.getElementById('lightbulb');
const toggleButton = document.getElementById('toggle-button');
const body = document.body; // Sélectionne le body

// Gestionnaire d'événements pour le clic sur le bouton
toggleButton.addEventListener('click', function() {
    // Vérifier l'état actuel de l'ampoule
    if (lightbulb.src.includes('off.png')) {
        // Si l'ampoule est éteinte, on allume
        lightbulb.src = './images/on.png';
        toggleButton.textContent = 'Éteindre la lumière';
        body.style.backgroundColor = 'white'; 
    } else {
        // Si l'ampoule est allumée, on éteint
        lightbulb.src = './images/off.png';
        toggleButton.textContent = 'Allumer la lumière';
        body.style.backgroundColor = 'black'; 
    }
});