document.body.addEventListener('click', function () {

	const star = document.createElement('div');

	// Tailles possibles pour les points
	const tailles = [5, 10, 15];
	const taille = tailles[Math.floor(Math.random() * tailles.length)];

	star.style.width = taille + 'px';
	star.style.height = taille + 'px';

	// Position aléatoire
	const x = Math.random() * (window.innerWidth - taille);
	const y = Math.random() * (window.innerHeight - taille);

	star.style.left = x + 'px';
	star.style.top = y + 'px';

	star.classList.add('star');
	document.body.appendChild(star);
});