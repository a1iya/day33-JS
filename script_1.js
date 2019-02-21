console.log("Bonjour monde");

function sayHello(prenom) {
	console.log('Bonjour, ' + prenom + '!');
}

let prenom = window.prompt("Comment t'appelles-tu ?");
sayHello(prenom);