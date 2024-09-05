// Chiffre aléatoire
var randomNumber = Math.floor(Math.random() * 10) + 1;

// Demander à l'utilisateur de saisir un prix HT
let choisirunchiffre = prompt("Entré un chiffre en 1 et 10");

// Convertir l'entrée utilisateur en nombre décimal
let chiffre = parseInt(choisirunchiffre);


if (randomNumber == chiffre) {
	document.write(`Bravo vous avez choisi le bon chiffre`);
} else if (randomNumber !== chiffre) {
	document.write(`Ce n'est pas le bon chiffe, le bon était ${randomNumber}`);
} 
















