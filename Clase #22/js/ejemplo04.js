// funciones creadoras de objetos
// no pueden ser llamadas como funciones
// las funciones flechas no tienen contexto por lo tanto no pueden ser contructoras

function Counter(container) {
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


    // acciones
    this.add = () => {
        this.count++
        //this.label.innerText = this.count
    }

    this.subs = () => {
        this.count--
        this.label.innerText = this.count
    }

    this.reset = () => {
        this.count = 0
        this.label.innerText = this.count
    }

    this.get = () => {
        return this.count
    }

}

// creamos los objetos
const contador1 = new Counter(document.getElementById('contador1'))
const contador2 = new Counter(document.getElementById('contador2'))
