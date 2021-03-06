const title = document.querySelector("#title");

const muneo = {
  handleResize: () => {
    console.log("I have been resized");
  },
};

function handleResize(event) {
  if (event.type === "click") {
    console.log("mouse");
    title.innerHTML = "mouse";
    title.style.color = "red";
  } else if (event.type === "resize") {
    console.log("resize");
    title.innerHTML = "resize";
    title.style.color = "blue";
  } else {
    console.log("nothing");
  }
}

let a = 2;
let b = 3;
const ccc = (a = 1, b = 1) => {
  console.log(a + b);
  return a + b;
};
title.innerHTML = ccc(a, b);

window.addEventListener("click", handleResize);
window.addEventListener("resize", handleResize);
