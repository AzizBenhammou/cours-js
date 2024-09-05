// Demander à l'utilisateur l'heure, les minutes et les secondes
let saisiheure = parseInt(prompt("Entrez les heures (0-23) :"));
let saisimin = parseInt(prompt("Entrez les minutes (0-59) :"));
let saisiseconde = parseInt(prompt("Entrez les secondes (0-59) :"));

// Ajouter une seconde
saisiseconde += 1;

// Gérer le passage des secondes aux minutes
if (saisiseconde >= 60) {
    saisiseconde = 0;
    saisimin += 1;
}

// Gérer le passage des minutes aux heures
if (saisimin >= 60) {
    saisimin = 0;
    saisiheure += 1;
}

// Gérer le passage des heures (format 24h)
if (saisiheure >= 24) {
    saisiheure = 0;
}

// Afficher le nouveau temps
document.write(`Nouvelle heure : ${saisiheure.toString().padStart(2, '0')} : ${saisimin.toString().padStart(2, '0')} : ${saisiseconde.toString().padStart(2, '0')}<br>`);