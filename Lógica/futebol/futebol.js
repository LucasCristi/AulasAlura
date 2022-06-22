
var vitorias = parseInt(prompt("Número de vitórias."));
var empates = parseInt(prompt("Número de empates."));

var pontos = (vitorias * 3) + empates


function retorna() {
    document.getElementById("pontos").value = pontos
    if (pontos > 28) {

        alert("Seu time está melhor que o ano passado")
    }
    if (pontos < 28) {

        alert("Seu time está pior que o ano passado")
    }
    if (pontos == 28) {

        alert("Seu time está igual que o ano passado")
    }
}