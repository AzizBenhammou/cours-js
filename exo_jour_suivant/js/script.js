let jour = prompt("On est quel jour aujourdui ?").toLowerCase();
document.write(`<p>Aujourdui on est ${jour}</p>`);


if (jour == "lundi") {
	document.write(`Demain on sera Mardi`);
    
}

if (jour == "mardi") {
	document.write(`Demain on sera Mercredi`);

}

if (jour == "mercredi") {
	document.write(`Demain on sera Jeudi`);

}

if (jour == "jeudi") {
	document.write(`Demain on sera Vendredi`);

}

if (jour == "vendredi") {
	document.write(`Demain on sera Samedi`);

}

if (jour == "samedi") {
	document.write(`Demain on sera Dimanche`);

}

if (jour == "dimanche") {
	document.write(`Demain on sera lundi`);

}

else {
    
    document.write("Jour invalide. Veuillez saisir un jour de la semaine valide.");
}






