let messages = [
  "Ar tu tikrai? 😶‍🌫️",
  "Nejuokauk, neleisiu paspaust No 😆",
  "👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀",
  "Dar vis bandai?",
  "Nu argi Cyklopui pasakysi No 👁️🟢"
  "Gi žinai, kad čia nėra kito pasirinkimo ir dar vis spaudi😝"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const message = document.getElementById("message");

  message.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
