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