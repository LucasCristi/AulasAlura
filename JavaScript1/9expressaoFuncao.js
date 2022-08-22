// //DECLARACAO DE FUNCAO
// function minhaFuncao(param) {
//     //codigo;
// }

// minhaFuncao(param);

// // EXPRESSOAO DE FUNCAO

// // const soma = function (num1, num2) { return num1 + num2 }; //FUNCAO ANONIMA - NOME VAI NA CONST
// console.log(soma(1, 1));

// DIFERENCA PRINCIPAL >>> HOISTING

console.log(apresentar());

function apresentar() {
    return "Olá";
}

console.log(soma(1, 1)) //NÃO VAI EXECUTAR ANTES DA DECLARACAO 
const soma = function (num1, num2) { return num1 + num2 }; //FUNCAO ANONIMA - NOME VAI NA CONST
console.log(soma(1, 1)) //PRECISA ESTAR ABAIXO DA EXPRESS|