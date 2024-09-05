// Création du tableau d'objets avec 5 phrases
const phrases = [
    { id: 1, text: "Phrase numéro 1" },
    { id: 2, text: "Phrase numéro 2" },
    { id: 3, text: "Phrase numéro 3" },
    { id: 4, text: "Phrase numéro 4" },
    { id: 5, text: "Phrase numéro 5" },
];

// Fonction pour afficher les phrases dans la div
function afficherPhrases() {
    const container = document.getElementById('sentences-list');
    container.innerHTML = ''; // Nettoyer le contenu de la div

    phrases.forEach(phrase => {
        const phraseDiv = document.createElement('div');
        phraseDiv.textContent = phrase.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = () => supprimerPhrase(phrase.id);

        phraseDiv.appendChild(deleteButton);
        container.appendChild(phraseDiv);
    });
}

// Fonction pour supprimer une phrase par son id
function supprimerPhrase(id) {
    const index = phrases.findIndex(phrase => phrase.id === id);
    if (index !== -1) {
        phrases.splice(index, 1);
        afficherPhrases(); // Mettre à jour l'affichage après suppression
    }
}

// Afficher les phrases au chargement de la page
document.addEventListener('DOMContentLoaded', afficherPhrases);