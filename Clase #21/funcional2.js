function sumar(array, criterio) {
    let suma = 0

    for (let i = 0; i < array.length; i++) {
        suma += criterio(array[i])
    }

    return suma
}

const numeros = [1, 2, 3, 4]

let suma = sumar(numeros, e => e)

let sumapares = sumar(numeros, (valor) => valor % 2 === 0 ? valor : 0)

let sumaimpares = sumar(numeros, (valor) => valor % 2 !== 0 ? valor : 0)

console.log("Suma de todos:", suma)
console.log("Suma de los pares:", sumapares)
console.log("Suma de los impares:", sumaimpares)