function factorielle(n) {
	if (n<0) { 
		alert ("Veuillez Saisir Un Entier Positif ou null"); 
		return "### Erreur ###"; 
	} 
	else { 
		if (n == 0) { 
			return 1; 
		} 
		else { 
			return n * factorielle (n-1); 
		} 
	} 
}


// Un prompt s'affiche avec la question suivante
let nombre = window.prompt("De quel nombre veut tu calculer la factorielle ?");

// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
console.log("Le résultat est : " + factorielle(nombre));