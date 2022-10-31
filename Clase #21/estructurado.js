//i = 10
//k = ++i // k = 11 i = 11

//p = (i++) + 5 // p = 11 i = 12

const numeros = [1, 2, 3, 4]
const numeros2 = [5, 6, 8]

let suma = 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
}

let suma2 = 0

for (let i = 0; i < numeros2.length; i++) {
    suma2 += numeros2[i]
}

console.log(suma, suma2)