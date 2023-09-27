
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

document.addEventListener('DOMContentLoaded', () => {
    setTimeout (() => {
        Toastify({
            text: "Recuerda usar caracteres válidos.",
            duration: 5000,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
        }}).showToast();
    }, 5000)
})


btnFormCalcular.addEventListener("click", e => {
    e.preventDefault()
    const numero = parseFloat(inputNumero.value)
    const porcentaje = parseFloat(inputPorcentaje.value)
    
    if (isNaN(numero) || isNaN(porcentaje)) {
        Swal.fire({
            icon: 'error',
            title: 'Ingreso un carácter no válido',
            text: 'Por favor, ingrese un número.',
        });
        return;
    }

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

btnFormBorrar.addEventListener("click", e => {
    e.preventDefault()
    Swal.fire({
        title: '¿Está seguro?',
        text: "Se borrará todo su historial de cálculos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            '¡Borrado!',
            'Su historial ha sido borrado',
            'success'
          )
          borrarTodo()
        }
      })
})