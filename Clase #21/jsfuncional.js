const numeros = [1, 2, 3, 4]
console.log("Suma de todos: ", numeros.reduce((prev, value) => prev + value, 0))
console.log("Suma de pares: ", numeros.reduce((prev, value) => (value % 2 === 0) ? prev + value : prev, 0))
console.log("Suma de pares: ", numeros.reduce((prev, value) => (value % 2 !== 0) ? prev + value : prev, 0))

// Muestren utilizando reduce y funcion flecha cuantos numeros son pares y cuantos son impares
