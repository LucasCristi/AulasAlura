function sorteia() {
    return Math.round(Math.random() * 10) // vai gerar numero aleatório
}

function sorteiaNumeros(quantidade) { // receber qntd de numeros aleatorios e retorna segredos
    var segredos = [];
    var numero = 1;
    while (numero <= quantidade) { // quantidade é parametro para quantidade de segredos da função abaixo
        var numeroAleatorio = sorteia();
        if (numeroAleatorio !== 0) {

            var achou = false;  // VERIFICA OS NUMEROS JA SORTEADOS PARA NAO HAVER REPETICOES

            for (i = 0; i < segredos.length; i++) {
                if (segredos[i] == numeroAleatorio) {
                    achou = true;
                    break;
                }
            }

            if (achou == false) {
                segredos.push(numeroAleatorio);
                numero++;
            }
        }
    }
    return segredos
}


var segredos = sorteiaNumeros(6); //numero que vai gerar quantidade de segredos
console.log(segredos)

function verifica() {
    var chute = document.getElementById("chute").value;
    for (var i = 0; i < segredos.length; i++) {

        if (chute == segredos[i]) {
            alert("Você acertou!!!")
            break;
        } {
            alert("Você errou!!!")
        }
    }
}

