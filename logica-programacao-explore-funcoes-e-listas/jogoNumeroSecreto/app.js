let listOfDrawnNumbers = [];
let limitNumber = 10;
let screctNumber = generateRadomNumber();
let attempts = 1;

function inicialMessage() {
  let message = `Escolha um número entre 1 e ${limitNumber}:`;

  showTextOnScreen("h1", "Jogo do número secreto");

  showTextOnScreen("p", message);
}

inicialMessage();

function showTextOnScreen(tag, text) {
  let element = document.querySelector(tag);
  element.innerHTML = text;
  responsiveVoice.speak(text, "Brazilian Portuguese Female", { rate: 1.2 });
}

function verifyAttempt() {
  let attempt = document.querySelector("input").value;

  if (attempt == screctNumber) {
    showTextOnScreen("h1", "Acertou!");

    let textAttemps = attempts > 1 ? "tentativas" : "tentativa";
    let message = `Você descobriu o número secreto com ${attempts} ${textAttemps}`;

    showTextOnScreen("p", message);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (attempt > screctNumber) {
      showTextOnScreen("p", "O número secreto é menor");
    } else {
      showTextOnScreen("p", "O número secreto é maior");
    }
    attempts++;
    clearInput();
  }
}

function generateRadomNumber() {
  let chosenNumber = parseInt(Math.random() * limitNumber + 1);
  let numberOfElementsInTheList = listOfDrawnNumbers.length;

  if (numberOfElementsInTheList === limitNumber) listOfDrawnNumbers = [];

  if (listOfDrawnNumbers.includes(chosenNumber)) {
    return generateRadomNumber();
  } else {
    listOfDrawnNumbers.push(chosenNumber);
    return chosenNumber;
  }
}

function clearInput() {
  let attempt = document.querySelector("input");
  attempt.value = "";
}

function resetGame() {
  screctNumber = generateRadomNumber();
  clearInput();
  attempts = 1;
  inicialMessage();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
