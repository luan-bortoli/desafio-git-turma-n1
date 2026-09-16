function parOuImpar(numero) {
    let status = numero % 2 === 0 ? "Par":"Ímpar";
    return status;
}

console.log(parOuImpar(10));
console.log(parOuImpar(9));