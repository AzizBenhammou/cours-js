// Demander à l'utilisateur de choisir entre pierre, feuille ou ciseaux
var choixdujoueur = prompt("Choisissez pierre, feuille ou ciseaux :").toLowerCase();

// Vérifier si le choix de l'utilisateur est valide
var choixvalide = ["pierre", "feuille", "ciseaux"];
if (!choixvalide.includes(choixdujoueur)) {
    document.write("Choix invalide. Veuillez choisir entre pierre, feuille ou ciseaux.");
} else {
    // Choisir aléatoirement pour l'ordinateur
    var choixordi = choixvalide[Math.floor(Math.random() * 3)];

    // Afficher les choix
    document.write(`Vous avez choisi : ${choixdujoueur} </br>`);
    document.write(`L'ordinateur a choisi : ${choixordi} </br>`);

    // Déterminer le gagnant
    if (choixdujoueur === choixordi) {
        document.write("C'est une égalité !");
    } else if (
        (choixdujoueur === "pierre" && choixordi === "ciseaux") ||
        (choixdujoueur === "feuille" && choixordi === "pierre") ||
        (choixdujoueur === "ciseaux" && choixordi === "feuille")
    ) {
        document.write("Vous avez gagné !");
    } else {
        document.write("L'ordinateur a gagné !");
    }
}