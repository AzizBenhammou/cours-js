// 1_ Déclaration d'une variable
let temps;

// 2_ Assigner une valeur à la variable
temps = "pluvieux";

// Vérification de la valeur dans la console
console.log(temps);

alert("Super, tu es arrivé sur mon site !");
window.alert("J'affiche une nouvelle boîte de dialogue");

// Écrire sur la page
document.write("<h1>C'est stylé le javascript !</h1>");

// Demander à l'utilisateur une valeur (2façons)
let answer = prompt("Question: On est quel jour aujourd'hui ?");
// window.prompt("Question: On est quel jour aujourd'hui ?");
document.write(`<p>La réponse est :${answer}`);

let weatherofday2;

// CamelCase
let weatherOfDay;

// PascalCase
let WeatherOfDay;

// SnakeCase
let weather_of_day;

// Possibilité de réassigner une nouvelle valeur à notre variable de base
temps = "nuageux";
console.log(temps);

/*----------------------------------------
/ ~~~~~~   LES TYPES DE VARIABLES ~~~~~~ /
-----------------------------------------*/

// 1. Chaîne de caractères (string)
let holidays = "2020";
let destination = "Égypte";

// 2. Un nombre entier (integer ou int)
let year = 2015;

// 3. Un nombre décimal (float)
let number = 3.55;

// 4. Un booléen (boolean VRAI/FAUX = TRUE/FALSE)
let condition = false;

// 5. Une constante
const PAYS = "France"; // string
const YEAR = 2021; // integer

// 6. connaître le type d'une variable avec typeof
console.log(typeof YEAR);
console.log(typeof holidays);

// NUMBER => STRING
let otherNumber = 20;
otherNumber = otherNumber.toString();
console.log(typeof otherNumber);

// STRING => NUMBER
let number2 = "36";
// let number2 = "36.5";
number2 = parseInt(number2);
// number2 = parseFloat(number2);
console.log(typeof number2);
