//Créer un tableau
//let tableau = new Array(element0, element1, element2);
//let tableau = Array(element0, element1, element2);
//let tableau = [element0, element1, element2];

// déclarer un tableau vide
let tab = [];

let fruits = ["Apple", "Banana"];
console.log(fruits.length);
//2

let first = fruits[0];
console.log(first);
// Apple

//Boucler sur un tableau
let couleurs = ["red", "green", "blue"];
for (let i = 0; i < couleurs.length; i++) {
	console.log(couleurs[i]);
	document.write(`<p style='color:${couleurs[i]}'>J'aime les licornes!</p>`);
}

// AU LIEU DE MODIFIER LE TABLEAU ON EN CREE UN AUTRE IDENTIQUE

//Ajouter à la fin du tableau
let newArray = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

//Supprimer le dernier élément du tableau
let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

//Supprimer le premier élément du tableau
let firstDelete = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//Ajouter au début du tableau
let newLength = fruits.unshift("Strawberry"); // ajoute au début
// ["Strawberry", "Banana"];

//Ajouter à la fin du tableau
//fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

// Trouver l'index d'un élément dans le tableau
let pos = fruits.indexOf("Banana");
// 1

//Supprimer un élément par son index
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos = (1)
// ["Strawberry", "Mango"]

let n = 2;

var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];

var removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos
// ["Cabbage", "Carrot"]

// objets

// déclarez une variable voiture qui contiendra un objet;
// attribuez les identifiants: marque, modèle, couleur et année(sans les accents) et mettez les valeurs que vous voulez;

let voiture = {
	marque: "Renault",
	modele: "Mégane",
	annee: 1994,
	couleur: "Rouge",
};

console.log(voiture);
console.log(voiture.modele);

// Soit la variable ecran qui contient un objet.
// déclarez la variable result;
// récupérez la valeur de la propriété resolution;
// affectez le résultat à result;
// affichez result avec console.log();

let ecran = {
	marque: "Samsung",
	annee: 2019,
	resolution: "1920x1080",
	prix: "400€",
};
let result = ecran.resolution;
console.log(result);

// Soit la variable ecran qui contient un object.
// ajoutez la propriété taille avec une valeur textuelle(ex: 23 pouces);
// déclarez la variable result et affectez le résultat de la nouvelle propriété à result;
// affichez result avec console.log();

let ecran2 = {
	marque: "Samsung",
	annee: 2019,
	resolution: "1920x1080",
	prix: "400€",
};

let result2 = (ecran.taille = "23 pouces");
console.log(ecran2);

// Soit la variable voiture qui contient un objet.
// utilisez une boucle
// for in pour parcourir l'objet;
// dans la boucle affichez chaque valeur avec console.log();

let voiture2 = {
	marque: "Bugatti",
	modele: "Chiron",
	couleur: "bleue",
	annee: 2016,
};

for (let i in voiture2) {
	console.log(voiture2[i]);
}
