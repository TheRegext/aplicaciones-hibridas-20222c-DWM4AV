// CommonJS Modules
/*
const http = require('node:http')
const views = require('./views.js')
const fs = require('node:fs')
*/

// ECMAScript Modules
import http from 'node:http'
import fs, { fstatSync } from 'node:fs'
// import views from './views.js' // importar la funcionalidad por defocto (default)
// import { generarPagina as generarPagina2, URL } from './views.js' // importar la funcionalidad por nombre
// import * as views from './views.js' // import toda la funcionalidad
import { generarPagina } from './views.js'

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(generarPagina('<p>Alumno: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/materia') {
        res.write(generarPagina('<p>Materia: Aplicaciones Hibridas</p>'))
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(generarPagina('<p>Profesor: Brian Lara</p>'))
        res.end()
    }
    else if (req.url === '/productos') {
        // leer un archivo de texto 
        fs.readFile('./productos.json', function (err, data) {
            if (err) { // si hay un error al leer el archivo
                console.log(err)
                res.write(generarPagina('<p>Error al leer el archivo</p>'))
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

                res.write(generarPagina(html))

                res.end()
            }
        })

    }
    else if (req.url === '/aumento') {
        fs.readFile('./productos.json', function (err, data) {
            if (err) { // si hay un error al leer el archivo
                console.log(err)
                res.write(generarPagina('<p>Error al leer el archivo</p>'))
                res.end()
            }
            else {// si lo pudo leer bien
                // convertir el archivo de texto a un objeto JSON
                const productos = JSON.parse(data.toString())

                for (let i = 0; i < productos.length; i++) {
                    productos[i].price = parseInt(productos[i].price * 1.1)
                }

                fs.writeFile('./productos.json', JSON.stringify(productos), function (err) {
                    if (err) {
                        console.log(err)
                        res.write(generarPagina('<p>Error al escribir el archivo</p>'))
                        res.end()
                    }
                    else {
                        res.write(generarPagina('<p>Precios aumentados</p>'))
                        res.end()
                    }
                })
            }
        })
    }
    else if (req.url === '/about.html') {
        fs.readFile('./public/about.html', function (err, data) {
            if (err) {
                console.log(err)
                res.write(generarPagina('<p>Error al leer el archivo</p>'))
                res.end()
            }
            else {
                res.write(data.toString())
                res.end()
            }
        })
    }
    else if (req.url === '/img/logo.png') {
        fs.readFile('./public/img/logo.png', function (err, data) {
            if (err) {
                console.log(err)
                res.write(generarPagina('<p>Error al leer el archivo</p>'))
                res.end()
            }
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else {
        res.write(generarPagina('<p>Pagina no encontrada</p>'))
        res.end()
    }
})

server.listen(2022)