
function sumar(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }

    return suma
}

function sumarPares(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 === 0) ? array[i] : 0
    }

    return suma
}


function sumarImpares(array) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += (array[i] % 2 !== 0) ? array[i] : 0
    }

    return suma
}


const numeros = [1, 2, 3, 4]

let suma = sumar(numeros)
let sumapares = sumarPares(numeros)
let sumaimpares = sumarImpares(numeros)

console.log("Suma de todos:", suma)
console.log("Suma de los pares:", sumapares)
console.log("Suma de los impares:", sumaimpares)