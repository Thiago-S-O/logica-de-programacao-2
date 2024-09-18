let listChosenNumbers = [];
let multiFactor = 10; // fator de multiplicação e quantidade máxima do array
let attempt = 1;
let secretNumber = generateRandowNumber();

function showTextInScreen(tag, textShow) {
  let title = document.querySelector(tag);
  title.innerHTML = textShow;
  // responsiveVoice.speak(textShow, 'Brazilian Portuguese Female', {rate:1.2});
}

function callInitialMenssage() {
  showTextInScreen("h1", "Number secret game!");
  showTextInScreen("p", "Escolha um número entre 1 e 10");
}

callInitialMenssage();

function generateRandowNumber() {
  let chosenNumber = parseInt(Math.random() * multiFactor + 1);
  let totalElementsOfList = listChosenNumbers.length;

  if (totalElementsOfList == multiFactor) {
    listChosenNumbers = [];
    console.log(listChosenNumbers);
  }

  // o método includes do js, vai incluir o valor gerado dentro do array
  if (listChosenNumbers.includes(chosenNumber)) { 
    return generateRandowNumber();
  } else {
    listChosenNumbers.push(chosenNumber);
    console.log(listChosenNumbers);
    return chosenNumber;
  }
}

function verifyKick() {
  let kickValue = document.querySelector("input").value;

  if (kickValue == secretNumber) {
    showTextInScreen("h1", "Você acertou!");
    let attemptWord =
      attempt > 1 ? `${attempt} tentativas` : `apenas ${attempt} tentativa`; // palavra tentativa
    document.getElementById("reiniciar").removeAttribute("disabled");
    showTextInScreen(
      "p",
      `O número secreto era ${secretNumber} e você acertou com ${attemptWord}`
    );
  } else {
    if (kickValue > secretNumber) {
      showTextInScreen("h1", "Você errou! o numero é menor do que seu chute");
    } else {
      showTextInScreen("h1", "Você errou! o numero é maior do que seu chute");
    }
    attempt++;
    clearInput();
  }
}

function clearInput() {
  let field = document.querySelector("input");
  field.value = "";
}

function restatGame() {
  clearInput();
  secretNumber = generateRandowNumber();
  callInitialMenssage();
  attempt = 1;
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
