import express from 'express'
import fs from 'fs'
import { generarPagina } from './views.js'

const app = express()
app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: true }))
/*
function traerProductos() {
    // Asincronica Antigua
    fs.readFile('productos.json', function (err, data) {
        if (err) {
            return [] // veryMal
        } else {
            const productos = JSON.parse(data.toString())
            console.log("traerProductos", productos)
            return productos
        }
    })
}
*/


async function traerProductos() {
    // Asincronica Nueva
    return fs.promises.readFile('productos.json')
        .then(function (data) {
            return JSON.parse(data.toString())
        })
        .catch(function (err) {
            console.log("Error al leer el archivo", err)
            return []
        })
}

app.get('/productos', function (req, res) {
    traerProductos()
        .then(function (productos) {
            res.render('ListaProductos', { productos })
        })
})

/*
app.get('/productos', function (req, res) {
    fs.readFile('productos.json', function (err, data) {
        if (err) {
            res.render('Error', { msg: 'Error al leer el archivo' })
        } else {
            res.render('ListaProductos', { productos: JSON.parse(data.toString()) })
        }
    })
})
*/

// utilizando path params
app.get('/productos/:idProducto', function (req, res) {
    const id = parseInt(req.params.idProducto)

    fs.readFile('productos.json', function (err, data) {
        if (err) {
            res.render('Error', 'Error al leer el archivo')
        } else {
            const productos = JSON.parse(data.toString())
            let producto = null
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id === id) {
                    producto = productos[i]
                    break // no es necesario seguir buscando y podemos salir del ciclo
                }
            }

            if (producto) {
                res.render('VerProducto', { producto })
            } else {
                res.render('404', { msg: `No se encuentra el producto` })
            }
        }
    })
})

// utilizar body params
app.post('/nuevo', function (req, res) {
    // res.json(req.body)
    fs.readFile('productos.json', function (err, data) {
        if (err) {
            res.send(generarPagina('Error al leer el archivo'))
        } else {
            const productos = JSON.parse(data.toString())

            const nuevoProducto = {
                id: productos[productos.length - 1].id + 1,
                name: req.body.name,
                price: req.body.price
            }

            productos.push(nuevoProducto)

            fs.writeFile('productos.json', JSON.stringify(productos), function (err) {
                if (err) {
                    res.send(generarPagina('No se pudo grabar el producto nuevo.'))
                }
                else {
                    res.send(`Se guardo correctamente el producto #${nuevoProducto.id}.`)
                }
            })
        }
    })
})

app.listen(2022, function () {
    console.log('El servidor esta ejecutando! http://localhost:2022')
})
