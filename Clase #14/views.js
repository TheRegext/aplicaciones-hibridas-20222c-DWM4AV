function generarPagina(contenido) {
    return `
    <html>
        <head>
            <meta charset="utf-8">
            <title>Una buena pagina</title>
        </head>
        <body>
            <h1>Mi espectacular pagina web!</h1>
            ${contenido}
        </body>
    </html>`
}
let URL = '/productos'

export {
    generarPagina,
    URL
}
/*
export default {
    generarPagina
}
*/

// CommonJS Modules
/*
module.exports = {
    generarPagina
}
*/
