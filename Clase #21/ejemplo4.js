// Funciones constructoras

// function nombrada
function suma(n1, n2) {
    return n1 + n2
}

// function anonima IIFE
(function (n1, n2) {
    return n1 + n2
})(5, 6)

let k = suma

let suma2 = function (n1, n2) {
    return n1 + n2
}


let suma3 = function sumar44(n1, n2) {
    return n1 + n2
}

// Funciones flecha
const sumaF = (n1, n2) => {
    return n1 + n2
}

const sumaF2 = (n1, n2) => n1 + n2

const Mostrar = d => console.log(d)