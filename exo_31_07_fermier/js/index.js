


function demande(totalanimaux, totalpattes) {
    let message = `Vous avez ${totalanimaux} animaux et ${totalpattes} pattes en tous.`;
	document.write(`<p>${message}</p>`);
}

let poulet = parseInt(prompt("Combien as-tu de poulet ?"));
let vache = parseInt(prompt("Combien as-tu de vache ?"));
let chevaux = parseInt(prompt('Combien as-tu de chevaux ?'));

let totalanimaux = poulet + vache + chevaux;
let totalpattes = poulet * 2 + vache * 4 + chevaux * 4;

demande(totalanimaux, totalpattes);
