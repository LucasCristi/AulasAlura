function pulaLinha(){
    document.write("<br>");
}

function mostrar(frase){
    document.write(frase);
    pulaLinha()
}

var ano = 2022
mostrar("Eu nasci em : " + (ano - 28));
mostrar("João nasceu em : " + (ano - 33));
mostrar("Bruna em : " + (ano - 22));

