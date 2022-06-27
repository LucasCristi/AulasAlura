function sorteia(n) {
    return Math.round(Math.random() * n);
}


var numeroPensado = sorteia(10)

var tentativas = 1

while (tentativas <= 3) {

    var chute = parseInt(prompt("Digite seu chute!"))

    if (chute == numeroPensado) {
        alert("Voçê acertou!")
        break;
    } else if (chute > numeroPensado) {
        alert("Voçê errou, o número era menor")
    } else if (chute < numeroPensado) {
        alert("Você errou, o número era maior")
    }
    tentativas++;
}

alert("FIM")


