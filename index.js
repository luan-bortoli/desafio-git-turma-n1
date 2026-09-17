console.log("=== Sistema da Turma ===");

function somar(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

console.log("10 + 5 =", somar(10, 5));
console.log("10 - 5 =", subtracao(10, 5));

function divisao(a, b) {
   if (b === 0) {
    return "Não é possível dividir por zero";
   } 
   return a / b;
}

console.log("10 + 5 =", somar(10, 5));
console.log(divisao(10,2));

function parOuImpar(numero) {
    let status = numero % 2 === 0 ? "Par":"Ímpar";
    return status;
}

console.log("10 + 5 =", somar(10, 5));
console.log(parOuImpar(10));
console.log(parOuImpar(9));
