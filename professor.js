function calcularIMC(altura, peso) {
    return peso / (altura ** 2);
}
function classificarIMC(imc){
    if (imc < 18.5) {
        categoria = "abaixo do Peso."
    }else if (imc < 25) {
        categoria = "peso ideal.<span class='azul'> Parabéns! </span>"
    }else if (imc < 30) {
        categoria = "levantamento acima do peso."
    }else if (imc < 35) {
        categoria = "obesidade grau I."
    }else if (imc < 40) {
        categoria = "obesidade grau II."
    }else {
        categoria = "obesidade grau III.<span class='vermelho'> Cuidado! </span>"
    }

      return categoria
}

function camposValidos() {
    return document.querySelector("form").reportValidity()
}

function exibirResultado() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value.replace(",",".")
    const peso = document.getElementById("peso").value.replace(",",".")
    const resultado = document.getElementById("resultado")

    if (camposValidos()) {
    const imc = calcularIMC(altura, peso)
    const classificacao = classificarIMC (imc)

     resultado.innerHTML = `${nome} Seu IMC é ${imc.toFixed(1)} e você está com ${classificacao}`
    } else {
          resultado.textContent = "Preencha todos os campos!"
    }
    
}
function capturaEnter(evento) {
     if (evento.key == "Enter") {
         exibirResultado()
     }
}

// Eventos
document.getElementById("calcular").addEventListener("click", exibirResultado)

document.querySelector("form").addEventListener("keypres" ,capturaEnter)