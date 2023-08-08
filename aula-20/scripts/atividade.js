let inputvalor1 = document.querySelector('#valor1')
let inputvalor2 = document.querySelector('#valor2')
let resultado = document.querySelector('#resultado')

function clearDisplay() {
    displayValuer ='';
    document.querySelector('#valor1').value = displayValuer
    document.querySelector('#valor2').value = displayValuer
}

function somar() {
    resultado.innerHTML = (parseFloat(inputvalor1.value) + parseFloat(inputvalor2.value)).toFixed(3);
}

function subtrair() {
    resultado.innerHTML = (parseFloat(inputvalor1.value) - parseFloat(inputvalor2.value)).toFixed(3);
}

function dividir() {
    resultado.innerHTML = (parseFloat(inputvalor1.value) / parseFloat(inputvalor2.value)).toFixed(3);
}

function multiplicar() {
    resultado.innerHTML = (parseFloat(inputvalor1.value) * parseFloat(inputvalor2.value)).toFixed(3);
}