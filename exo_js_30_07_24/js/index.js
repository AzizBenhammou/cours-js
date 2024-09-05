    // Variables initiales
    let solde = 1000; // Solde initial en euros
    const ajoutMensuel = 50; // Ajout mensuel en euros
    const objectif = 2000; // Objectif en euros
    let mois = 0; // Compteur de mois

    // Boucle while pour calculer le nombre de mois nécessaires
    while (solde < objectif) {
        solde += ajoutMensuel; // Ajouter la somme mensuelle au solde
        mois++; // Incrémenter le compteur de mois
    }

    // Afficher les résultats sur la page
    document.getElementById("result").innerHTML = `
        <p>Somme de départ : 1000€</p>
        <p>Ajout chaque mois : 50€</p>
        <p>Il a fallu ${mois} mois pour atteindre ${objectif}€ sur votre compte.</p>
        <p>Solde final : ${solde}€</p>
    `;