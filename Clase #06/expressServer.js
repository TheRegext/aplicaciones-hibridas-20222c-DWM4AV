import express from 'express'
import fs from 'fs'
import path from 'node:path'
import { generarPagina } from './views.js'


const app = express() // crea el servidor web
app.set('view engine', 'ejs')


app.use('/', express.static('public')) // indica que la carpeta public contiene archivos estáticos
app.use(express.urlencoded({ extended: true })) // permite que el servidor reciba datos de formularios
//app.use('/contenido', express.static('public'))

app.get('/productos', function (req, res) {
    fs.readFile('productos.json', function (err, data) {
        if (err) {
            res.send(generarPagina('Error al leer el archivo'))
        } else {
            const productos = JSON.parse(data.toString())
            res.render('ListaProductos', { productos })
            /*
            let html = '<ul>'
            for (let i = 0; i < productos.length; i++) {
                //html += `<li><a href="/productos/ver?id=${productos[i].id}">${productos[i].name}</a></li>`
                html += `<li><a href="/productos/${productos[i].id}">${productos[i].name}</a></li>`
            }
            html += '</ul>'
            res.send(generarPagina(html))
            */
        }
    })
})
// utilizando query params
app.get('/productos/ver', function (req, res) {
    const id = parseInt(req.query.id)

    fs.readFile('productos.json', function (err, data) {
        if (err) {
            res.send(generarPagina('Error al leer el archivo'))
        } else {
            const productos = JSON.parse(data.toString())
            let html = ''
            let index = -1
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id === id) {
                    index = i
                    break // no es necesario seguir buscando y podemos salir del ciclo
                }
            }

            if (index === -1) {
                html = 'Producto no encontrado'
            } else {
                html = `
                        <h1>${productos[index].name}</h1>
                        <p>Precio: $${productos[index].price}</p>
                    `
            }

            res.send(generarPagina(html))
        }
    })
})


// utilizando path params
app.get('/productos/:idProducto', function (req, res) {
    const id = parseInt(req.params.idProducto)

    fs.readFile('productos.json', function (err, data) {
        if (err) {
            res.send(generarPagina('Error al leer el archivo'))
        } else {
            const productos = JSON.parse(data.toString())
            let html = ''
            let index = -1
            for (let i = 0; i < productos.length; i++) {
                if (productos[i].id === id) {
                    index = i
                    break // no es necesario seguir buscando y podemos salir del ciclo
                }
            }

            if (index === -1) {
                html = 'Producto no encontrado'
            } else {
                html = `
                        <h1>${productos[index].name}</h1>
                        <p>Precio: $${productos[index].price}</p>
                    `
            }

            res.send(generarPagina(html))
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
                // id: productos.length + 1,
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


app.get('/productosFile', function (req, res) {
    res.sendFile(path.resolve('./productos.json'))
    /*
    fs.readFile('./productos.json', function (err, data) {
        if (err) { // si hay un error al leer el archivo
            console.log(err)
            res.send('<p>Error al leer el archivo</p>')
        }
        else {
            res.send(data.toString())
        }
    })
    */
})

app.get('/materia', function (req, res) {
    res.send('Aplicaciones Hibridas')
})

app.get('/hola', function (req, res) {
    res.render('hola', { nombre: "<strong>Brian Lara</strong>" })
})


app.listen(2022, function () {
    console.log('El servidor esta ejecutando! http://localhost:2022')
})
