let scoreJoueur = 0;
let scoreOrdi = 0;

function jouerShiFuMi() {
    if (scoreJoueur >= 5 || scoreOrdi >= 5) {
        return;
    }

    // Demander à l'utilisateur de choisir entre pierre, feuille ou ciseaux
    let choixdujoueur = prompt("Choisissez pierre, feuille ou ciseaux :").toLowerCase();

    // Vérifier si le choix de l'utilisateur est valide
    let choixvalide = ["pierre", "feuille", "ciseaux"];
    if (!choixvalide.includes(choixdujoueur)) {
        document.getElementById("resultat").innerHTML = "Choix invalide. Veuillez choisir entre pierre, feuille ou ciseaux.";
    } else {
        // Choisir aléatoirement pour l'ordinateur
        let choixordi = choixvalide[Math.floor(Math.random() * 3)];

        // Afficher les choix
        document.getElementById("resultat").innerHTML = `Vous avez choisi : ${choixdujoueur} <br>L'ordinateur a choisi : ${choixordi} <br>`;

        // Déterminer le gagnant
        if (choixdujoueur === choixordi) {
            document.getElementById("resultat").innerHTML += "C'est une égalité !";
        } else if (
            (choixdujoueur === "pierre" && choixordi === "ciseaux") ||
            (choixdujoueur === "feuille" && choixordi === "pierre") ||
            (choixdujoueur === "ciseaux" && choixordi === "feuille")
        ) {
            document.getElementById("resultat").innerHTML += "Vous avez gagné !";
            scoreJoueur++;
        } else {
            document.getElementById("resultat").innerHTML += "L'ordinateur a gagné !";
            scoreOrdi++;
        }

        // Mettre à jour le score
        document.getElementById("score").innerHTML = `Score: Joueur ${scoreJoueur} - ${scoreOrdi} Ordinateur`;

        // Vérifier si quelqu'un a atteint 5 points
        if (scoreJoueur >= 5) {
            document.getElementById("gagnant").innerHTML = "Félicitations ! Vous avez gagné la partie !";
        } else if (scoreOrdi >= 5) {
            document.getElementById("gagnant").innerHTML = "L'ordinateur a gagné la partie !";
        }
    }
}