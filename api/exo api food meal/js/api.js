const results = document.querySelector("#results");
const input = document.querySelector("#searchInput");

function getFood() {
    // URL de base pour récupérer des données
    const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    // Récupère la valeur entrée dans l'input
    const plat = input.value;

    // Si l'input est vide, ne pas faire de requête
    if (!plat) {
        results.innerHTML = "<p>Veuillez entrer un nom de nourriture.</p>";
        return;
    }

    // URL complète avec la valeur de l'input
    const URL = api + plat;

    // Méthode qui nous permet de faire une requête HTTP GET auprès de l'API
    fetch(URL)
        // Vérifie la réponse et si oui, on la convertit en JSON pour qu'on puisse l'utiliser
        .then((response) => response.json())
        // Une fois convertie, on récupère la donnée utilisable pour affichage
        .then((data) => {
            if (data.meals) {
                results.innerHTML = data.meals.map(meal => `
                    <h2>${meal.strMeal}</h2>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" >
                `).join('');
            } else {
                results.innerHTML = "<p>Aucun résultat trouvé.</p>";
            }
        })
        // Gestion d'erreur lors de la requête
        .catch((err) => {
            console.log(`Erreur lors de la récupération des données : ${err}`);
            results.innerHTML = "<p>Erreur lors de la récupération des données.</p>";
        });
}

// Ajout d'un gestionnaire d'évènement à la saisie dans l'input
input.addEventListener("change", getFood);
