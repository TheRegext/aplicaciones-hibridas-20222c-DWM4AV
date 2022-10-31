function sumar(array, criterio) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += criterio(array[i])
    }

    return suma
}

const numeros = [1, 2, 3, 4]

let suma = sumar(numeros, function (valor) {
    return valor
})

let sumapares = sumar(numeros, function (valor) {
    return (valor % 2 === 0) ? valor : 0
})

let sumaimpares = sumar(numeros, function (valor) {
    return (valor % 2 !== 0) ? valor : 0
})

console.log("Suma de todos:", suma)
console.log("Suma de los pares:", sumapares)
console.log("Suma de los impares:", sumaimpares)