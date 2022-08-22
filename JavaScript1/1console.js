//console é do Node e também do browser - log = registro
//boa pratica para verificar erros

let minhaVar = true;

console.log(234);
console.log("texto");
console.log(minhaVar);

//tratamento de erro

console.error("deu erro") //exemplo

console.log("deu erro");
console.error(new Error("deu erro")); // incluso new Error 