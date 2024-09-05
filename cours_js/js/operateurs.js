/* je déclare mes variables */
let nb1, nb2, resultat;

/* j'affecte des valeurs */
nb1 = 10;
nb2 = 5;

/* j'utilise mes variables avec un calcul */
resultat = nb1 + nb2;

/* j'affiche mon résultat dans la console */
console.log(resultat);

// -- 2. Soustraction
resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
resultat = nb1 * nb2;
console.log(resultat);

// -- 4. Division
resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// -- Le Modulo retourne le reste d'une Division
// -- modulo de nb1 % nb2 avec l'opérateur "%"
resultat = nb1 % nb2;
console.log(resultat);

// -- et maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log(
	"Le reste de la division de " +
		nb1 +
		" par " +
		nb2 +
		" est égal à : " +
		resultat,
);

// -- 6. Ecritures simplifiées
nb1 = 15;
console.log("le 1er = " + nb1);
nb1 = nb1 + 5; // égal à 20
console.log("le 2éme = " + nb1);

nb1 += 10;
// nb1 = nb1 + 10

console.log('Le résultat de "nb1 += 10;" est ' + nb1);
