

const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");


function calculo() {
    const total = parseFloat(altura.value) * 2 / parseFloat(peso.value)
    resultado.textContent = total
}
calcular.addEventListener("click", calculo);

