// == comparação implicíta

const numero = 5;
const texto = "5"; 

//BOA PRATICA É UTILIZAR 3 IGUAIS e fazer a conversão de modo explícito
console.log(numero == texto) //JS converte string para numero para realizar a comparação
console.log(numero === texto) //não faz a conversão direta - compara valores e tipos

//typeof para ver o tipo 

console.log(typeof numero)
console.log(typeof texto)

//explícito 

Number()
String()