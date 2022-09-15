const objeto1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: function () {
        return 20
    }
}

// console.log(objeto1)
// destructurar
const { nombre, apellido, edad } = objeto1
const array = [15, 16, 17]
const [valor1, valor2, valor3] = array


const objeto2 = {
    ...objeto1,
    edad: 30,
    id: 14
}

console.log(objeto2)

const array2 = [...array, 18, 19, 20]

console.log(array2)
/*
const nombre = objeto1.nombre
const apellido = objeto1.apellido
*/
/*
console.log(nombre)
console.log(apellido)
console.log(edad())
*/