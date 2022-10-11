import * as productosService from '../../services/productos.services.js'

function findAll(req, res) {
    productosService.traerProductos()
        .then(function (productos) {
            res.status(200).json(productos)
        })
}

function create(req, res) {
    const producto = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }

    productosService.guardarProducto(producto)
        .then(function (productoNuevo) {
            res.status(201).json(productoNuevo)
        })
        .catch(function (err) {
            res.status(500).json({ message: 'Error al guardar el producto' })
        })

}

function deleteById(req, res) {
    const id = req.params.id

    productosService.eliminarProducto(id)
        .then(function (productoEliminado) {
            res.status(200).json(productoEliminado)
        })
        .catch(function (err) {
            res.status(500).json({ message: 'Error al eliminar el producto' })
        })
}

function findById(req, res) {
    const id = req.params.id
    productosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.status(200).json(producto)
            }
            else {
                res.status(404).json({ message: 'Producto no encontrado' })
            }
        })
}

export {
    findAll,
    create,
    deleteById,
    findById
}