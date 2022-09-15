import ProductosService from '../services/productos.service.js'

function verTodos(req, res) {
    ProductosService.traerProductos()
        .then(function (productos) {
            res.render('ListaProductos', { productos })
        })
}

function verUno(req, res) {
    const id = parseInt(req.params.idProducto)
    ProductosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render('VerProducto', { producto })
            }
            else {
                res.render('404', { message: 'Producto no encontrado' })
            }
        })
}

function guardar(req, res) {
    const producto = {
        name: req.body.name,
        price: req.body.price,
    }

    ProductosService.guardarProducto(producto)
        .then(function (productoNuevo) {
            res.render('Success', { message: `Producto guardado con exito <a href="/productos/${productoNuevo.id}">Ver Producto</a>` })
        })
        .catch(function (err) {
            res.render('Error', { message: `Error al guardar el producto` })
        })

}

export {
    verTodos,
    verUno,
    guardar
}