console.log("=== Sistema da Turma ===");

function somar(a, b) {
    return a + b;
}

function parOuImpar(numero) {
    let status = numero % 2 === 0 ? "Par":"Ímpar";
    return status;
}

console.log("10 + 5 =", somar(10, 5));
console.log(parOuImpar(10));
console.log(parOuImpar(9));