console.log("Trabalhando com condicionais");

//aula IF E ELSE, OP LOGICOS, IF ENCADEADO, ELSE IF, && e OU

//LISTA DE DESTINOS
const listaDestinos = new Array(
    `SALVADOR`,
    `SÃO PAULO`,
    `RIO DE JANEIRO`
);

//VERIFICAR IDADE E SE ESTA ACOMPANHADA, MENOR DE IDADE, COMPRA DA PASSAGEM
const idadeComprador = 10;
const estaAcompanhada = true; //declara q esta acompanhado 
let temPassagemComprada = false;
const destino = "RIO DE JANEIRO";

console.log("Destinos possíveis:");
console.log(listaDestinos);


//duas barras reprensentando "OU"
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; //estaAcompanhada precisa ser true

//CONTA O ARRAY ATE ENCONTRAR CIDADE QUE CLIENTE QUER VIAJAR 
let contador = 0;
let destinoExiste = false;


// while (contador < 3) {
//     if (listaDestinos[contador] == destino) {
//         destinoExiste = true;
//         break; //achou o destino e trava o loop
//     }
//     contador++
// }


for(let i = 0; i < 3; i ++){
    if (listaDestinos[i] == destino) {
        destinoExiste = true;
        break; //achou o destino e trava o loop
    }
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, não pode comprar");
}





/* < menor 
> maior
<= menor ou igual
>= maior ou igual 
== igual a 
!= diferente de  */