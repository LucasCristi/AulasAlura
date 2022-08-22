//DECLARACAO DE FUNCAO
function imprimeTexto(texto) {
    console.log(texto)
};


function soma() {
    return 2 + 2;
}


imprimeTexto("Oi"); //passando o Oi como parametro
imprimeTexto("Segundo texto"); //reaproveitando a funcao para outro texto
imprimeTexto(soma()); //chamando uma funcao para imprimir como parametro
console.log(soma()); //imprimindo a funcao direta pela console


