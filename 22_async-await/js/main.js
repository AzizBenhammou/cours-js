let url = 'data/search-user.json';


async function loadJson() {
    try {
        const response = await fetch(url);
		console.log(response);
        let res = await response.json();
		console.log(res);
if (response.status === 200) {
    // 			// alors on renvoit la réponse
    			return res;
    // 			// sinon on envoie une erreur avec le message voulu
    		} else {
    			throw new Error("Erreur de récupération des données");
    		}
    	} catch (error) {
    // 		// renvoit de l'erreur si le bloc try n'est pas un succès
    		console.error(error);
    	}
}      



function displayUserInfo() {
    loadJson().then(
        (res) => {
            let userInfo = '';
            res.forEach(user => {
                userInfo += `
                    <p>Prénom : ${user.firstname}</p>
                    <p>Nom : ${user.lastname}</p>
                    <p>Adresse : ${user.address.details_add}</p>
                    <p>Ville : ${user.address.city}</p>
                    <p>Code postal : ${user.address.zip_code}</p>
                    <hr>
                `;
            });
            document.getElementById('result').innerHTML = userInfo;
        }
    );
}

displayUserInfo();