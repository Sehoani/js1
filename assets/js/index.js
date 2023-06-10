function boton(){
let input = document.querySelector('.cantidad')
            let input1 = document.querySelector('.color')
            let parrafo = document.querySelector('.multiplicacion1')
            let parrafo1 = document.querySelector('.resultadoColor')
            let parrafo2 = document.querySelector('.cantidad2')
            let card2 = document.querySelector('.resultado')
            let multiplicacion = Number(input.value)
            let estilo = String(input1.value)
            let resultado = multiplicacion * 400000

            parrafo.innerHTML = 'Total: $ ' + resultado
            parrafo1.innerHTML = 'Color: ' + estilo
            parrafo2.innerHTML = 'Cantidad: ' + multiplicacion
}