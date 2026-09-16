console.log("=== Sistema da Turma ===");

function somar(a, b) {
    return a + b;
}

function divisao(a, b) {
   if (b === 0) {
    return "Não é possível dividir por zero";
   } 
   return a / b;
}

console.log("10 + 5 =", somar(10, 5));
console.log(divisao(10,2));