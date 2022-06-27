// var idadeMatheus = 25
// var idadeLucas = 28
// var idadeFelipe = 31
// var idadeNeiva = 58

// var totalIdades = idadeMatheus + idadeFelipe + idadeLucas + idadeNeiva
// var mediaIdades = totalIdades/4
 
// console.log(mediaIdades)

var totalFamiliares = parseInt(prompt("Quantidade de familiares?"))

var numero = 1

var totalIdades = 0

while(numero <= totalFamiliares){
    var idade = parseInt(prompt("Informe idade dos familiares"))
    totalIdades = totalIdades + idade
    numero++
}

var mediaIdades = totalIdades / totalFamiliares
document.write(mediaIdades + "<br>")

document.write("FIM")



