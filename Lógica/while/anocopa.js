//CONTADOR COM INCREMENTO E EXCLUSAO DE NUMEROS

var contador = 30;

while(contador <= 40) {

    if( contador == 33 ) {
    contador = contador + 1;
    }
    else if(contador == 37) {    
        contador = contador + 1;
    }
    else {
    console.log(contador);
    contador = contador + 1; 
    }
  }
console.log("FIM")

//CONTADOR COM DECREMENTO

var contador = 20;

while(contador >= 0) {
    
    console.log(contador)
    contador = contador -1
  }
console.log("FIM")

//DESAFIO ALURA

var anoCopa = 1930;
    var limite = 2020

    while(anoCopa <= limite) {

        console.log(anoCopa);
        anoCopa = anoCopa + 4;
    }
    console.log(anoCopa)
