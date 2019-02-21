let etage = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for(let e = 1; e <= etage; e++){
	console.log(" ".repeat(etage-e) + "#".repeat(e));
}