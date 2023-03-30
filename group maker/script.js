function generer() {
	var nom = document.getElementById("nom").value;
	var membres = document.getElementById("membres").value;
	var genre = document.getElementById("genre").value;

	var resultat = "Le groupe " + nom + " est un groupe ";

	if (genre == "mixte") {
		resultat += "mixte ";
	} else if (genre == "masculin") {
		resultat += "masculin ";
	} else {
		resultat += "féminin ";
	}

	resultat += "de " + membres + " membres.";

	document.getElementById("resultat").innerHTML = resultat;
}