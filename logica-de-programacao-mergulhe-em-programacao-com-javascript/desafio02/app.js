// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dayOfTheWeekUserInput = prompt("Qual é o dia da semana?");

if (dayOfTheWeekUserInput == "Sábado" || dayOfTheWeekUserInput == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numberUserInput = prompt("Digite um numero:");

if (numberUserInput < 0) {
  alert("O numero digitado é negativo");
} else {
  alert("O numero digitado é positivo");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let points = 107;

if (points >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let balance = 10000;
alert(`Seu saldo da conta é de R$ ${balance}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let name = prompt("Digite seu nome:");
alert(`Boas vindas, ${name}!`);
