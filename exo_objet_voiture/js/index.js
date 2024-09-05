
// Déclarer un objet vide
let voiture = {};
console.log(voiture);

// ajouter valeur dans l'objet
voiture.marque = "BMW";
console.log(voiture.marque);

voiture.anneefab = 2024;
console.log(voiture.anneefab);

voiture.dateachat = new Date('March 23, 2023');
console.log(voiture.dateachat);

voiture.listepassager = {
	passager1: "François",
	passager2: "Jeannine",
};
console.log(voiture.listepassager);

document.write(`
        <p>Marque: ${voiture.marque}</p>
        <p>Année de fabrication : ${voiture.anneefab}</p>
        <p>Date d'achat: ${voiture.dateachat.toDateString()}</p><br>
        <p>Liste des passagers:</p>
        <p>Passager 1: ${voiture.listepassager.passager1}</p> 
        <p>Passager 2: ${voiture.listepassager.passager2}</p>
        `);




