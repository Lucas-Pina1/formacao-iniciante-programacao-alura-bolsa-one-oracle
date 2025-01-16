// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let count = 1;
while (count <= 10) {
  console.log(count);
  count++
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let count = 10;
while (count >= 0) {
  console.log(count);
  count--
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let count = prompt("Digite um numero para come'car a contagem regresiva:");
while (count >= 0) {
  console.log(count);
  count--
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let inputNumber = prompt(
  "Digite um numero para come'car a contagem progressiva:"
);

let count = 0;
while (count <= inputNumber) {
  console.log(count);
  count++;
}
