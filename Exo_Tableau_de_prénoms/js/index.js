let prenom1 = prompt("Ecrivez le prénom 1");
let prenom2 = prompt("Ecrivez le prénom 2");
let prenom3 = prompt("Ecrivez le prénom 3");
let prenom4 = prompt("Ecrivez le prénom 4");
let prenom5 = prompt("Ecrivez le prénom 5");

let tableauprenoms = [];
console.log(tableauprenoms.length);


if (isNaN(prenom1)) {
    let tabprenom1 = tableauprenoms.push(`${prenom1}`);
	console.log(tableauprenoms);

} else {
    alert("Vous avez entré un nombre a la place du prénom 1");
}


if (isNaN(prenom2)) {
	let tabprenom2 = tableauprenoms.push(`${prenom2}`);
	console.log(tableauprenoms);
	
} else {
    alert("Vous avez entré un nombre place du prénom 2");
}


if (isNaN(prenom3)) {
	let tabprenom3 = tableauprenoms.push(`${prenom3}`);
	console.log(tableauprenoms);
} else {
    alert("Vous avez entré un nombre place du prénom 3");
}


if (isNaN(prenom4)) {
	let tabprenom4 = tableauprenoms.push(`${prenom4}`);
	console.log(tableauprenoms);
} else {
    alert("Vous avez entré un nombre place du prénom 4");
}


if (isNaN(prenom5)) {
	let tabprenom5 = tableauprenoms.push(`${prenom5}`);
	console.log(tableauprenoms);
} else {
    alert("Vous avez entré un nombre place du prénom 5");
}



if (
	(prenom1 === "" ) ||
	(prenom2 === "" ) ||
	(prenom3 === "" ) ||
	(prenom4 === "" ) ||
	(prenom5 === "" ) 

) {
	document.write("Veuillez entré 5 prénoms");


	
} 


else {
	document.write(`<p>${prenom1}</p>`);
	document.write(`<p>${prenom2}</p>`);
	document.write(`<p>${prenom3}</p>`);
	document.write(`<p>${prenom4}</p>`);
	document.write(`<p>${prenom5}</p>`);
}