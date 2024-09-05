// Demander un chiffre à l'utilisateur
let userInput = prompt("Entrez un chiffre :");

// Vérifier que l'entrée est un nombre valide
let number = parseInt(userInput);
if (isNaN(number)) {
    alert("Ce n'est pas un chiffre valide. Veuillez entrer un nombre.");
} else {
    // Créer une variable pour stocker le résultat avec des retours à la ligne
    let result = "";
    for (let i = 0; i <= 10; i++) {
        let currentNumber = number + i;
        let parity = (currentNumber % 2 === 0) ? "pair" : "impair";
        result += `${currentNumber} est ${parity}\n`;
    }
    
    // Afficher les résultats avec un retour à la ligne
    alert(result);
}