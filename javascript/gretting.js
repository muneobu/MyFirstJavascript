const form = document.querySelector(".js-form");
const input = form.querySelector(".js-form_input");
const USER_LS = "username";
const greeting = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";

function paintgreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innertext = `Hello ${text}`;
}

function init() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    form.classList.add(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `이름을 넣으시오`;
  } else {
    paintgreeting(currentUser);
  }
}

init();
