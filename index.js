console.log("=== Sistema da Turma ===");

function somar(a, b) {
    return a + b;
}

function numero(a){
    let numero = Number(prompt('Digite um numero'));
if (numero > 0) {
    console.log('Número positivo');
} else if (numero < 0) {
    console.log ('Número negativo');
} else {
    console.log('O número é nulo')
}
}

console.log("10 + 5 =", somar(10, 5));
console.log(numero);

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
