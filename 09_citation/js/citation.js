const form = document.getElementById("quote-form");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	// Réinitialisation des messages
	document.getElementById("errorMsg").innerHTML = "";
	document.getElementById("successMsg").innerHTML = "";

	// Récupération des valeurs du formulaire
	let citation = document.getElementById("quote-text").value;
	let auteur = document.getElementById("author-name").value;
    console.log(citation);
    console.log(auteur);

	// Validation du nom
	if (citation === "") {
		document.getElementById("errorMsg").innerHTML =
			"Le champs citation ne doit pas être vide.";
		return false;
	}

    	// Validation du nom
	if (auteur === "") {
		document.getElementById("errorMsg").innerHTML =
			"Le champs auteur ne doit pas être vide.";
		return false;
	}



	// Si tout est valide
	document.getElementById("successMsg").innerHTML =
		"Formulaire validé avec succès !";
	return true;
});
