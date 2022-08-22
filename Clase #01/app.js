var dato = 485 // variable global

// variables simples
const name = 'Brian Lara' // Variable inmutable
let age = 25 // Variable mutable
let modificable = true

age = 26 // mutamos la variable

// variables dimnensionadas
const array = [1, 2, 3]
let segundo = array[1]

// variables compuestas
let objeto = {
    name: 'Brian Lara',
    age: 25,
}

// identificador de funcion
function multiplicar(a, b) {
    return a * b
}

let resultado = multiplicar(2, 3)

console.log("Resultado: " + resultado)