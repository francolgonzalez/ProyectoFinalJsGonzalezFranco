const formCalculo = document.querySelector ('#formCalculo')
const inputNumero = document.querySelector ('#inputNumero')
const inputPorcentaje = document.querySelector ('#inputPorcentaje')
const btnForm = document.querySelector ('#btnForm')
const calculosContainer = document.querySelector ('#calculosContainer')

const arrayCalculos = JSON.parse(localStorage.getItem('calculos')) || []

class Calculo {
    constructor (num, porc, result) {
        this.numero = num
        this.porcentaje = porc
        this.resultado = result
    }
}

formCalculo.addEventListener("submit", e => {
    
    e.preventDefault()
    const numero = inputNumero.value
    const porcentaje = inputPorcentaje.value
    
    const resultado = (numero / 100) * porcentaje
    
    inputNumero.value = ""
    inputPorcentaje.value = ""

    const calculo = new Calculo (numero, porcentaje, resultado)

    guardarCalculos()
    imprimirCalculos()
})   

function guardarCalculos (calculo) {
    arrayCalculos.push(calculo)
    localStorage.setItem('calculos', JSON.stringify(arrayCalculos))
}

function imprimirCalculos() {
    let historialCalculos = ''
    for (const calculo of arrayCalculos) {
        historialCalculos += Calculo `Número ${calculo.numero}, Porcentaje ${calculo.porcentaje}, Resultado ${calculo.resultado}<br>`
    }
    calculosContainer.innerHTML = historialCalculos
}

imprimirCalculos()








