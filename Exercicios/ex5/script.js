function mudarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "red";
}

function voltarCor() {
	var div = document.getElementById("quadrado");
	div.style["background-color"] = "gray";
}

window.onload = function() {
            var nome = prompt("Qual é o seu nome?");
            if (nome) {
                alert("Bem-vindo, " + nome + "!")
            } else {
                alert("Bem-vindo, visitante!")
            }
}