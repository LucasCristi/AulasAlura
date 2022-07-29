console.log("Trabalhando com condicionais");

//aula IF E ELSE, OP LOGICOS, IF ENCADEADO, ELSE IF, && e OU

const listaDestinos = new Array(
    `SALVADOR`,
    `SÃO PAULO`,
    `RIO DE JANEIRO`
);


const idadeComprador = 10;
const estaAcompanhada = false; //declara q esta acompanhado 
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDestinos.splice(1, 1); //removendo item da lista
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado.");
//     listaDestinos.splice(1, 1); //removendo item da lista
// } else {
//     console.log("Menor de idade não pode realizar a compra.")

// }

                        //duas barras reprensentando "OU"
if (idadeComprador >= 18 || estaAcompanhada) { //estaAcompanhada precisa ser true
    console.log("Comprador maior de idade ou está acompanhado.");
    listaDestinos.splice(1, 1); //removendo item da lista porque comprou
} else {
    console.log("Menor de idade não pode realizar a compra.")
}

console.log("Embarque:");
if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else{
    console.log("Você não pode embarcar.");
}

console.log(listaDestinos);
