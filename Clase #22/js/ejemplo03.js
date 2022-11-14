// abstraccion de la logica
// un contador 
// tiene un entero que representa el valor del contador
// son caracteristicas de visualizacion del contador
//      boton para sumar
//      boton para restar
//      label para mostrar el valor del contador
//      contenedor para los elementos
// acciones que se pueden hacer un contador
//      aumentar
//      disminuir
//      resetear
//      obtener el valor del contador
//      mostrar el valor del contador
class Counter {
    constructor(container) {
        // this es el contexto, o sea el objeto que se esta creando
        this.count = 0

        // propiedades visuales
        this.container = container
        this.buttons = {
            add: document.createElement('button'),
            subs: document.createElement('button'),
        }
        this.label = document.createElement('label')

        // configuracion de los elementos visuales
        this.buttons.add.innerText = '+'
        this.buttons.subs.innerText = '-'
        this.label.innerText = this.count

        // agregar los elementos visuales al contenedor
        this.container.appendChild(this.buttons.subs)
        this.container.appendChild(this.label)
        this.container.appendChild(this.buttons.add)

        // agregar eventos a los botones
        this.buttons.add.addEventListener('click', () => { // tienen contexto
            console.log("ADD", this)
            this.add()
        })

        this.buttons.subs.addEventListener('click', () => {
            console.log("SUB", this)
            this.subs()
        })
    }

    // acciones
    add() {
        this.count++
        this.label.innerText = this.count
    }

    subs() {
        this.count--
        this.label.innerText = this.count
    }

    reset() {
        this.count = 0
        this.label.innerText = this.count
    }

    get() {
        return this.count
    }

}

// creamos los objetos
const contador1 = new Counter(document.getElementById('contador1'))
const contador2 = new Counter(document.getElementById('contador2'))
