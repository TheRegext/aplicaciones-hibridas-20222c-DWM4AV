const http = require('node:http')
const views = require('./views.js') // importar el modulo creado por nosotros 
const fs = require('node:fs')
//const productos = require('./productos.js')

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(views.generarPagina('<p>Alumno: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/materia') {
        res.write(views.generarPagina('<p>Materia: Aplicaciones Hibridas</p>'))
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(views.generarPagina('<p>Profesor: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/productos') {
        // leer un archivo de texto 
        fs.readFile('./productos.json', function (err, data) {
            if (err) { // si hay un error al leer el archivo
                res.write(views.generarPagina('<p>Error al leer el archivo</p>'))
                res.end()
            }
            else {// si lo pudo leer bien
                // convertir el archivo de texto a un objeto JSON
                const productos = JSON.parse(data.toString())

                let html = `<ul>`
                for (let i = 0; i < productos.length; i++) {
                    html += `<li>${productos[i].name} - ${productos[i].price}</li>`
                }
                html += `</ul>`

                res.write(views.generarPagina(html))

                res.end()
            }
        })

    }
    else if (req.url === '/aumento') {
        for (let i = 0; i < productos.length; i++) {
            productos[i].price = parseInt(productos[i].price * 1.1)
        }
        res.write(views.generarPagina('<p>Precios aumentados</p>'))
        res.end()
    }
    else {
        res.write(views.generarPagina('<p>Pagina no encontrada</p>'))
        res.end()
    }
})

server.listen(2022)