
// FUNCAO COM VAR 
function calculaImc(peso, altura) {
    return peso / (altura * 2);
}

var imcLucas = calculaImc(70, 1.80);
var imcAmigo = calculaImc(80, 1.70);

console.log(`O seu IMC é ${imcLucas.toFixed(2)}`);
console.log(`O IMC do seu amigo é ${imcAmigo.toFixed(2)}`);

// FUNCAO INFORMANDO PESO E ALTURA DIRETA NO RETURN

function calculaImc(peso, altura) {
    return peso / (altura * 2);
}

console.log(`O seu IMC é ${calculaImc(70, 1.80).toFixed(2)}`);
console.log(`O IMC do seu amigo é ${calculaImc(80, 1.70).toFixed(2)}`);

// OUTRA FORMA

function calculaImc(peso, altura) {
    return peso / (altura * 2);
}

var alturaInformada = 1.80;
var pesoInformado = 70;
var imc = calculaImc(pesoInformado, alturaInformada);

console.log(`O seu IMC é ${imc.toFixed(2)}`);





