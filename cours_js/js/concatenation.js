/*---------
LA CONCATENATION
---------*/

// "" STRING
// 55 Number
let year = 2024;
let future = 3;

let result = year + future;
console.log(`Résultat un : ${result}`);

document.write("<p>" + year + " + " + future + " = " + result + "</p>");

let month = "7";
let calcul = year + month;
console.log(`Résultat deux : ${calcul}`); // impossible de faire le calcul avec un type string

let startSentence = "Aujourd'hui ";
let nbPeople = 12;
let middleSentence = " stagiaires";
let endSentence = "sont présents.";
document.write(
	"<h1>" +
		startSentence +
		" " +
		nbPeople +
		middleSentence +
		" " +
		endSentence +
		"</h1>",
);

document.write(
	`<h1> ${startSentence} ${nbPeople} ${middleSentence} ${endSentence}</h1>`,
);
