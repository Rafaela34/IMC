

const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");


function calculo() {
    const total = parseFloat(peso.value)  / (parseFloat(altura.value) *2)
    resultado.textContent = total
}
calcular.addEventListener("click", calculo);

