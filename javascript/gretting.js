const form = document.querySelector(".js-form");
const input = form.querySelector(".js-form_input");
const USER_LS = "username";
const greeting = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(event);
  saveName(currentValue);
  paintgreeting(localStorage.getItem(USER_LS));
  input.value = null;
}

function askForName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `이름을 넣으시오`;
  form.addEventListener("submit", handleSubmit);
}

function paintgreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function init() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintgreeting(currentUser);
  }
}

init();
