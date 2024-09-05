let age = prompt("Quel est votre age ?");


document.write(`<p>Votre age est ${age}</p>`);


if (age >= 18) {
		window.location.href = "index_majeur.html";

} else if (age < 18) {
		window.location.href = "index_mineur.html";

} 


if (isNaN(age)) {
	alert("Veuillez entrer un âge valide.");
}


if (age === null || age.trim() === "") {
	alert("Le champ âge ne peut pas être vide. Veuillez entrer votre âge.");
}