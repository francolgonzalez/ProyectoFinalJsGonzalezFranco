let seguirEjecutando = true;

let resultadosArray = [];

while (seguirEjecutando) {
    const numeroACalcular = parseFloat (prompt ("Ingrese el número al que quiere sacarle un porcentaje"));
    const porcentajeParaAplicar = parseFloat (prompt ("Ingrese el porcentaje a aplicar"));

    function calculo (numeroACalcular, porcentajeParaAplicar) {
       const operacion = (numeroACalcular / 100) * porcentajeParaAplicar;
        return operacion;
    }

    const resultado = calculo (numeroACalcular, porcentajeParaAplicar);

    const resultadoObjeto = {
        numero: numeroACalcular,
        porcentaje: porcentajeParaAplicar,
        resultado: resultado
    };

    resultadosArray.push (resultadoObjeto);

    alert ("El " + porcentajeParaAplicar + "%" + " de " + numeroACalcular + " es " + resultado);

    let pregunta = prompt ("¿Quiere calcular el porcentaje de otro número?");

    if (pregunta.toLocaleLowerCase () === "no") {
        seguirEjecutando = false;
    }
}

let contenidoArray = "Sus calculos fueron:\n"
for (const resultado of resultadosArray) {
    contenidoArray += `Número: ${resultado.numero}, Porcentaje: ${resultado.porcentaje}, Resultado: ${resultado.resultado}\n`;
}

alert (contenidoArray);



