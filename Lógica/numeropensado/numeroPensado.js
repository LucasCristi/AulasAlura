var numeroPensado = Math.round(Math.randonm() * 10);
var chute = parseInt(prompt("Digite seu chute!"))

if (chute == numeroPensado) {
    document.write("Voçê acertou!")
} else {
    document.write("Voçê errou, o número pensado foi " + numeroPensado)
}


