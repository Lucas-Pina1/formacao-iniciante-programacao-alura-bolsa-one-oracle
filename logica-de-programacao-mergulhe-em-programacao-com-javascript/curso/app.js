alert("Boas vindas ao jogo do numero secreto");

let secretNumber = parseInt(Math.random() * 100 + 1);

let userAttemptedInput;
let attempts = 1;

while (userAttemptedInput !== secretNumber) {
  userAttemptedInput = prompt("Escolha um número entre 1 e 100");

  if (userAttemptedInput == secretNumber) {
    break;
  } else {
    if (userAttemptedInput > secretNumber) {
      alert(`O número secreto é menor que ${userAttemptedInput}`);
    } else {
      alert(`O número secreto é maior que ${userAttemptedInput}`);
    }
    attempts++;
  }
}

let attemptsWord = attempts > 1 ? "tentativas" : "tentativa";

alert(
  `Isso ai! Você descobriu o número secreto ${secretNumber} com ${attempts} ${attemptsWord}`
);
