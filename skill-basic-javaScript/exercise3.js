const readline = require('readline');
// Usando o readline demostrar tbm no terminal e não só no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite um número: ', (num1) => {
  rl.question('Digite outro número: ', (num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(`O resultado da sua conta foi: ${num1 + num2}`);
    rl.close();
  });
});

// let num1 = promt('Digite um número:');
// let num2 = pront('Digite outro número');

// num1 = Number(num1);
// num2 = Number(num2);

// alert(`o resultado da sua conta foi: ${num1 + num2}`);
