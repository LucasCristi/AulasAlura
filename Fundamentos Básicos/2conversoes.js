// tipo de dado 
// booleanos

//conversao implicita - as vezes pode trazer bugs para o codigo

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);


// conversao explicita BOA PRATICA
//Number() String() converção utilizando as funcoes
console.log(numero + Number(numeroString)); 


// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação


let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.


var respostaDeTudo = 42
let idade = 29
const pi = 3.14  //nunca muda o valor atribuido
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)