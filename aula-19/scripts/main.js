let nome = 'Gabriel Almeida Cechelero';
let numero1 = parseInt(prompt("Digite o valor do 1° número"));
let numero2 = parseInt(prompt("Digite o valor do 2° número"));


let soma = numero1 + numero2;
let mult = numero1 * numero2;
subtration (numero1, numero2);
division (numero1, numero2);


function subtration (numero1, numero2) {
    let subsub = numero1 - numero2;
    if (numero1 < numero2) {
        return console.log ("Não foi possível subtrair")
    } else {
        return console.log (subsub)
    }
};

function division (numero1, numero2) {
    let divdiv = numero1 / numero2;
    if (numero1 < numero2) {
        return console.log ("Não foi possível realizar a divisão")
    } else {
        return console.log (divdiv)
    }
};

console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero2));