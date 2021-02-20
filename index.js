const array = ["ubu", "muneo"];
const oobject = {
  human: "ubu",
  fish: "muneo",
};

const family = {
  human: "umma",
  fish: "appa",
};

function sayHello(octopus, fisherman) {
  console.log("Hello!", octopus, "are you", fisherman, "?");
}

function sayHi(aarray) {
  console.log("Hi!", aarray[1], "Are you", aarray[0], "?");
}

function sayyo(ooobject) {
  console.log("Yo you caught", ooobject.fish, "are you", ooobject.human, "?");
}
sayHello("문어", "어부");
sayHi(array);
sayyo(oobject);
sayyo(family);
