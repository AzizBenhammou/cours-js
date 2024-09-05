// Liste des images et des textes associés
const images = [
    { src: 'img/image1.jpg', text: 'Texte pour Image 1' },
    { src: 'img/image2.jpg', text: 'Texte pour Image 2' },
    { src: 'img/image3.jpg', text: 'Texte pour Image 3' },
    { src: 'img/image4.jpg', text: 'Texte pour Image 4' }
];

// Fonction pour créer la galerie
function createGallery() {
    const gallery = document.getElementById('image-gallery');

    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.text;
        imgElement.onclick = () => displayText(image.text);
        gallery.appendChild(imgElement);
    });
}

// Fonction pour afficher le texte
function displayText(text) {
    document.getElementById('display-text').innerText = text;
}

// Créer la galerie d'images au chargement de la page
window.onload = createGallery;
