const title = document.querySelector("#title");
const body = document.querySelector(".lala");
const BASE_COLOR = "tomato";
const OTHER_COLOR = "wheat";
const HOVER_COLOR = "white";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    body.style.backgroundColor = BASE_COLOR;
  } else {
    title.style.color = BASE_COLOR;
    body.style.backgroundColor = OTHER_COLOR;
  }
}

function handleMouse() {
  title.style.color = HOVER_COLOR;
}

function handleOut() {
  const currentColor = title.style.color;
  const ccurrentColor = body.style.backgroundColor;
  if (currentColor === HOVER_COLOR && ccurrentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    body.style.backgroundColor = BASE_COLOR;
  } else if (currentColor === HOVER_COLOR && ccurrentColor === OTHER_COLOR) {
    title.style.color = BASE_COLOR;
    body.style.backgroundColor = OTHER_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  body.style.backgroundColor = OTHER_COLOR;
  title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleMouse);
  title.addEventListener("mouseout", handleOut);
}
init();
