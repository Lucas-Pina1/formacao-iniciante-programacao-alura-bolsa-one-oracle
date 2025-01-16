// Criar uma função que exibe "Olá, mundo!" no console.
function helloWord() {
  console.log("Olá, mundo!");
}

helloWord();
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function showName(name) {
  console.log(`Olá, ${name}!`);
}

showName("Lucas");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function doubleTheNumber(number) {
  return number * 2;
}

let result = doubleTheNumber(5);
console.log(result);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function average(number1, number2, number3) {
  return (number1 + number2 + number3) / 3;
}

let averageResult = average(4, 7, 10);
console.log(averageResult);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function whithNumberIsBigger(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else {
    return "os nuúmeros são iguais";
  }
}

let whitchIsBiggerResult = whithNumberIsBigger(15, 9);
console.log(whitchIsBiggerResult);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function mutiplyNumberByItself(number) {
  return number * number;
}

let doubleResult = mutiplyNumberByItself(2);
console.log(doubleResult);
