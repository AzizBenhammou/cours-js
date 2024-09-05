// Définir le tableau d'objets contenant les images
const images = [
    {
        src: 'img/image1.jpg',
        title: "Titre de l'image 1",
        alt: "Description de l'image 1"
    },
    {
        src: 'img/image2.jpg',
        title: "Titre de l'image 2",
        alt: "Description de l'image 2"
    },
    {
        src: 'img/image3.jpg',
        title: "Titre de l'image 3",
        alt: "Description de l'image 3"
    },
    {
        src: 'img/image4.jpg',
        title: "Titre de l'image 4",
        alt: "Description de l'image 4"
    },
];

// Index pour suivre l'image actuelle
let currentIndex = 0;

// Fonction pour mettre à jour les propriétés HTML de l'image
function updateImage() {
    const imageElement = document.getElementById('carousel-image');
    const captionElement = document.getElementById('carousel-caption');
    imageElement.src = images[currentIndex].src;
    imageElement.alt = images[currentIndex].alt;
    // Ajouter le titre et la description dans la légende
    captionElement.innerHTML = `<strong>${images[currentIndex].title}</strong><br>${images[currentIndex].alt}`;
}

// Fonction pour aller à l'image précédente
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

// Fonction pour aller à l'image suivante
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

// Initialiser le carrousel avec la première image
updateImage();
