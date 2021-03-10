const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const millisecond = date.getUTCMilliseconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}:${millisecond}`;
}

function init() {
  getTime();
}

setInterval(init, 1);
