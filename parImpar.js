//funciones

const prompt = require("prompt-sync")();
let number = prompt("ingresa un numero ")

function parImpar() {
    if (number % 2 == 0)
    console.log("el numero es par");
    else if (number % 2 != 0) 
    console.log("el numero es impar");
}
parImpar();