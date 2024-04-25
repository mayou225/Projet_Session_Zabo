document.getElementById('lang-en').addEventListener('click', function() {
    // Redirigez vers la version anglaise du site
    window.location.href = 'index-en.html';
   
});

document.getElementById('lang-fr').addEventListener('click', function() {
    // Redirigez vers la version française du site
    window.location.href = 'index-fr.html';
   
});

// Validation des champs lors de la soumission du formulaire
function verif() {
	// Récupération des valeurs des champs
	var fname = document.forms["f"]["fname"].value;
	var lname = document.forms["f"]["lname"].value;
	

	if (fname === "" || lname === "") {
		alert("Veuillez remplir tous les champs pour le 'Nom' et le 'Prénom'");
		return false;
	}
}	
	
function effacerSaisie() {
	document.getElementById("fname").value = ""; // Effacer le champ NOM de famille
    document.getElementById("lname").value = ""; // Effacer le champ PRENOM
    document.getElementById("motivations").value = ""; // Effacer le champ motivations

    // Réinitialiser les boutons radio Homme et Femme
    document.getElementById("r1").checked = false;
    document.getElementById("r2").checked = false;

}