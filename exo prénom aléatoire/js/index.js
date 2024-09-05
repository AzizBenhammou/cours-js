// Création d'un tableau
let listeprenoms = [];

// Ajouter des éléments à la fin du tableau
listeprenoms.push("Nicolas");
listeprenoms.push("Marc");
listeprenoms.push("Éric");
listeprenoms.push("Pierre");
listeprenoms.push("Olivier");
listeprenoms.push("Pascal");
listeprenoms.push("Jordan");
listeprenoms.push("Cyril");
listeprenoms.push("Louca");
listeprenoms.push("Johane");

console.log(listeprenoms); // Affichera les prénoms

// Fonction pour choisir un prénom aléatoirement
function choisirPrenomAleatoire() {
    let indexAleatoire = Math.floor(Math.random() * listeprenoms.length);
    let prenomAleatoire = listeprenoms[indexAleatoire];
    document.write("Prénom aléatoire choisi : " + prenomAleatoire);
}

// Ajouter l'événement onclick au bouton après le chargement de la page
window.onload = function() {
    let button = document.getElementById("choisirPrenomBtn");
    button.onclick = choisirPrenomAleatoire;
}
