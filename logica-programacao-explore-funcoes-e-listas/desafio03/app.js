// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function IMC(heigth, weight) {
  let resultImc = weight / heigth ** 2;
  return resultImc;
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function factorial(number) {
  let result = number;

  if (number === 0 || number === 1) return 1;

  while (number > 1) {
    number--;
    result *= number;
  }
  return result;
}

console.log(factorial(5));
// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function dolarToReal(dolar) {
  let convertToReal = dolar * 4.8;
  return convertToReal;
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaAndPerimeter(heigth, width) {
  let area = heigth * width;
  let perimeter = 2 * (heigth + width);
  
  let message = `A área é : ${area} e o perímetro é: ${perimeter}`;
  console.log(message);
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaAndPerimeteCircle(radius) {
  let area = 3.14 * radius ** 2;
  let perimeter = 2 * (3.14 * radius);

  let message = `A área é : ${area} e o perímetro é: ${perimeter}`;
  console.log(message);
}

let radius = 4;
areaAndPerimeteCircle(radius);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function multiplicationTable(number) {
  if (number < 0 || number === 0) console.log("Número é 0 ou negativo");

  let count = 1;

  while (count <= 10) {
    let multiplication = number * count;
    let message = `${number} * ${count} = ${multiplication}`;
    count++;
    console.log(message);
  }
}

multiplicationTable(5);
