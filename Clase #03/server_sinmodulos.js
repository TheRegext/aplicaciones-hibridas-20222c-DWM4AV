const http = require('node:http')

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write(`<html>
            <head>
                <title>Pagina Magica</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <p>Alumno: Brian Lara</p>
            </body>
        </html>`)
        res.end()
    }
    else if (req.url === '/materia') {
        res.write('<html><head><title>Pagina Magica</title></head><body>')
        res.write('<h1>Mi espectacular pagina web!</h1>')
        res.write('<p>Materia: Aplicaciones Hibridas</p>')
        res.write('</body></html>')
        res.end()
    }
    else if (req.url === '/profesor') {
        res.write(`
        <html>
            <head>
                <title>Pagina Magica</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <p>Profesor: Brian Lara</p>
            </body>
        </html>
    `)
        res.end()
    }
    if (req.url === '/productos') {
        res.write(`
        <html>
            <head>
                <title>Pagina Magica</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <ul>
                <li> 1 | Caf&eacute; Expreso | 200 |</li>
                <li> 2 | Caf&eacute; Americano | 250 |</li>
                <li> 3 | Caf&eacute; Cortado | 200 |</li>
                <li> 4 | Caf&eacute; Doble | 250 |</li>
                <li> 5 | Caf&eacute; Lagrima | 200 |</li>
                </ul>
            </body>
        </html>
    `)
        res.end()
    }
    else {
        res.write(`
        <html>
            <head>
                <title>Pagina Magica</title>
            </head>
            <body>
                <h1>Mi espectacular pagina web!</h1>
                <p>Pagina no encontrada</p>
            </body>
        </html>
    `)
        res.end()
    }
})

server.listen(2022)