function soma(num1, num2) {
    return num1 + num2;
}
function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(soma(2, 2));
console.log(soma(245, 201));
console.log(soma(-550, 60));
console.log(multiplica(soma(4,5),soma(3,3))); // chamando outra funcao ja fazendo somas 

//parametros x argumentos
//ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade('Lucas', 28));