let screctNumber = generateRadomNumber();

showTextOnScreen("h1","Jogo do número secreto");

showTextOnScreen("p","Escolha um número entre 1 e 10:");

function showTextOnScreen(tag, text) {
  let element = document.querySelector(tag);
  element.innerHTML = text;
}

function verifyAttempt() {
  let attempt = document.querySelector("input").value;
  console.log(attempt == screctNumber);
}

function generateRadomNumber() {
  return parseInt(Math.random() * 10 +1);
}
