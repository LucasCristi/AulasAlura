//boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
// 0 = false e string vazias são false

console.log(0 == false)
console.log("" == false)

//1 = verdadeiro

console.log(1 == true)

//null e undefined
let minhaVar;
let varNull = null; //object - quando roda no typeof 

console.log(typeof minhaVar);
console.log(typeof varNull);


let numero = 3;
let texto = "Alura";

console.log(typeof numero); //typeof para saber o tipo de dado que esta armazenado
console.log(typeof texto);