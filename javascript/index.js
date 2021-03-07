const title = document.querySelector("#title");
let age = prompt("몇살이니?");
if (age >= 7 && age <= 19) {
  title.innerHTML = "you are a student";
} else if (age > 19) {
  title.innerHTML = "you are not a student";
} else {
  title.innerHTML = "you are too young to go to school";
}
