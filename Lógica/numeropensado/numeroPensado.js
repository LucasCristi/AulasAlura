function sorteia(n) {
    return Math.round(Math.random() * n);
}    

var numeroPensado = sorteia(82)
console.log(numeroPensado)
var chute = parseInt(prompt("Digite seu chute!"))
if (chute == numeroPensado) {
    document.write("Voçê acertou!")
} else if (chute > numeroPensado) {
    document.write("Voçê errou, o número era menor")
} else if (chute < numeroPensado) {
    document.write("Você errou, o número era maior")
}
