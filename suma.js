const prompt = require("prompt-sync")();

let numero = parseInt(prompt("ingresa un numero "));
let numero2 = parseInt(prompt("ingresa otro numero "));

function suma() {
    console.log("la suma es "  + (numero + numero2))
};
suma();