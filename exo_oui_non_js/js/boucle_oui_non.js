let questions = [
    "Ca va ?",
    "Tu habite a gonesse ?",
    "Ta passé un bon week end ?",
    "Il pleut vers chez toi  ?",
    "Il ya du soleil ?"
];

let tourCount = 0;

function startGame() {
    tourCount = 0; // Réinitialiser le compteur de tours
    askQuestion(0);
}

function askQuestion(index) {
    if (index >= questions.length) {
        // Si toutes les questions sont répondues correctement
        alert("Bravo ! Tu as répondu correctement à toutes les questions. Recommençons !");
        startGame();
        return;
    }

    let answer = prompt(questions[index]);
    if (answer.toLowerCase() === "oui" || answer.toLowerCase() === "non") {
        // Si l'utilisateur répond avec "oui" ou "non"
        alert(`Tu ne peux pas dire 'oui' ou 'non'. Tu as tenu ${tourCount} tours.`);
        startGame(); // Recommencer le jeu
    } 
        // Réponse correcte, avancer à la question suivante
        tourCount++;
        askQuestion(index + 1);

}

window.onload = startGame;