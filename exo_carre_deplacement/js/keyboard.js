

var cadre = document.getElementById('square'),
    s = square.style, // Un petit raccourci
    i = square.offsetLeft, // On récupère la position absolue initiale.
    j = square.offsetTop;
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;
     
    // On détecte l'événement puis selon la fleche, on incrémente ou décrément les variables globales de position, i et j.
    switch(keyCode){
    case 38:
        j--;
        break;
    case 40:
        j++;
        break;
    case 37:
        i--;
        break;
    case 39:
        i++;
        break;
    }
    // Et enfin on applique les modifications :
    s.left = String(i)+'px';
    s.top = String(j)+'px';
}



