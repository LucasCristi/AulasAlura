console.log("LISTA DE DESTINOS PARA SUA VIAGEM");

const listaDestinos = new Array(
    `SALVADOR`,
    `SÃO PAULO`,
    `RIO DE JANEIRO`
);

listaDestinos.push(`CURITIBA`, `GRAMADO`); //push adiciona itens no array
listaDestinos.splice(1,1); //vendi todas as passagens para SP e deletei da lista

console.log(listaDestinos);
console.log(listaDestinos[1]); //só quero ver a posição 1 do array