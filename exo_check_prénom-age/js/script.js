let prenom = prompt("Quel est votre prénom ?").toLowerCase();
let age = prompt("Quel est votre âge ?");


if (prenom == "aziz") {
	document.write(`<p>Le prénom ${prenom} est le bon.</p>`);

} else if (prenom != "aziz") {
	document.write(`<p>Le prénom ${prenom} n'est pas le bon.</p>`);

} 

if (age == 37) {
	document.write(`<p>L'âge ${age} est le bon</p>`);

} else if (age != 37) {
	document.write(`<p>L'âge ${age} n'est pas le bon.</p>`);

} 



if (prenom === null || prenom.trim() === "") {
	alert("Le champ prénom ne peut pas être vide. Veuillez entrer votre âge.");
}

if (age === null || age.trim() === "") {
	alert("Le champ âge ne peut pas être vide. Veuillez entrer votre âge.");
}






