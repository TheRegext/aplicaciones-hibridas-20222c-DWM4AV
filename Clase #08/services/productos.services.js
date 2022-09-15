import fs from 'fs'

function buscarProducto(productos, id) {
    let producto
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            producto = productos[i]
            break
        }
    }

    return producto
}

async function guardarProductos(productos) {
    return fs.promises.writeFile('productos.json', JSON.stringify(productos))
}

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


async function traerProductoByID(id) {
    return traerProductos()
        .then(function (productos) {
            return buscarProducto(productos, id)
        })
}

async function guardarProducto(producto) {
    return traerProductos()
        .then(function (productos) {
            const productoNuevo = {
                ...producto,
                id: productos[productos.length - 1].id + 1
            }

            productos.push(productoNuevo)

            return guardarProductos(productos)
                .then(function () {
                    return productoNuevo
                })
        })
}

export {
    traerProductos,
    traerProductoByID,
    guardarProducto
}