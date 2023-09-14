
const formCalculo = document.querySelector ('#formCalculo')
const inputNumero = document.querySelector ('#inputNumero')
const inputPorcentaje = document.querySelector ('#inputPorcentaje')
const btnFormCalcular = document.querySelector ('#inputBtnCalcular')
const btnFormBorrar = document.querySelector ('#inputBtnBorrar')
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
    const numero = parseFloat(inputNumero.value)
    const porcentaje = parseFloat(inputPorcentaje.value)
    
    const resultado = (numero / 100) * porcentaje
    
    inputNumero.value = ""
    inputPorcentaje.value = ""

    const calculo = new Calculo (numero, porcentaje, resultado)
    
    guardarCalculos(calculo)
    imprimirCalculos()
})   

function guardarCalculos (calculo) {
    arrayCalculos.push(calculo)
    localStorage.setItem('calculos', JSON.stringify(arrayCalculos))
}

function imprimirCalculos() {
    let historialCalculos = ''
    if (arrayCalculos && arrayCalculos.length > 0){
        for (const calculo of arrayCalculos) {
            if(calculo!=null && !isNaN(calculo.numero) && !isNaN(calculo.porcentaje) && !isNaN(calculo.resultado)){
            historialCalculos += `Número: ${calculo.numero}, Porcentaje: ${calculo.porcentaje}, Resultado: ${calculo.resultado}<br>`
            }
        }    
    }  
    calculosContainer.innerHTML = historialCalculos
}

imprimirCalculos()

function borrarTodo() {
    arrayCalculos.length = 0
    localStorage.removeItem('calculos')
    calculosContainer.innerHTML = ''
}

btnFormBorrar.addEventListener("click", borrarTodo)