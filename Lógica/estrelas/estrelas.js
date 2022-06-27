function mostra(frase) {
    document.write(frase)
}

for (linha = 1; linha <= 3; linha++) {

    for (coluna = 0; coluna <= 10; coluna++) {
        mostra("*")
    }
    document.write("<br>")
}