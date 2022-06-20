
var vitorias = parseInt(prompt("Número de vitórias."));
var empates = parseInt(prompt("Número de empates."));

var pontos = (vitorias * 3) + empates

function retorna() {
    document.getElementById("pontos").value = pontos
}