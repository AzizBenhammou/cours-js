// Demander à l'utilisateur de saisir un prix HT et le montant de la tva
let prixsanstva = prompt("Entrez votre prix HT");
let choixdetva = prompt("Entrez la tva");



// Convertir l'entrée utilisateur en nombre décimal
prixsanstva = parseFloat(prixsanstva);

// Vérifier si l'entrée est bien un nombre
if (!isNaN(prixsanstva)) {
    // Calculer la TVA (20%)
    let tva = prixsanstva * (choixdetva / 100);

// Calculer le prix avec TVA
let prixavectva = prixsanstva + tva;


document.write(`<p>Pour un montant ${prixsanstva}€,  la tva est de ${tva}€ </p>`);
document.write(`<p>TVA a ${choixdetva}% </p>`);
document.write(`<p>Votre prix TTC ${prixavectva}€.</p>`);
}

else {
    // Afficher un message d'erreur si l'entrée n'est pas valide
    document.write(`<p>Veuillez entrer un nombre décimal valide.</p>`);
}
