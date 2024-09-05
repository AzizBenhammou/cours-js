let prixsanstva = prompt("Entrez votre prix HT");

let tva = prixsanstva * (20 / 100);

let prixavectva = parseInt(prixsanstva) + parseInt(tva);

document.write(`<p>Votre prix TTC = ${prixavectva}</p>`);









