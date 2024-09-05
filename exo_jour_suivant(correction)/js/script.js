let userDay = prompt("Entrez le jour de la semaine").toLowerCase();

if (userDay === "samedi") {
	alert("Demain sera Dimanche");
} else if (userDay === "dimanche") {
	alert("Demain sera lundi");
} else if (userDay === "lundi") {
	alert("Demain sera mardi");
} else if (userDay === "mardi") {
	alert("Demain sera Mercredi");
} else if (userDay === "mercredi") {
	alert("Demain sera Jeudi");
} else if (userDay === "jeudi") {
	alert("Demain sera Vendredi");
} else if (userDay === "vendredi") {
	alert("Demain sera samedi");
} else {
	alert("Entre un jour de la semaine valide");
}

// VERSION AVEC LE SWITCH
switch (userDay) {
	case "samedi":
		alert("Demain sera Dimanche");
		break;
	case "dimanche":
		alert("Demain sera Lundi");
		break;
	case "lundi":
		alert("Demain sera Mardi");
		break;
	case "mardi":
		alert("Demain sera Mercredi");
		break;
	case "mercredi":
		alert("Demain sera Jeudi");
		break;
	case "jeudi":
		alert("Demain sera Vendredi");
		break;
	case "vendredi":
		alert("Demain sera Samedi");
		break;
	default:
		alert("Entre un jour de la semaine valide");
}
