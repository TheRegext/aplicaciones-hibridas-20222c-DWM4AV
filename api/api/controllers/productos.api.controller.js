import * as productosService from '../../services/productos.services.js'
import * as ReviewsService from '../../services/reviews.services.js'


function findAll(req, res) {
    const filter = {}

    if (req.query.category) {
        filter.category = req.body.category
    }

    productosService.traerProductos(filter)
        .then(function (productos) {
            res.status(200).json(productos)
        })
}

function create(req, res) {

    productosService.guardarProducto(req.body)
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

function editById(req, res) {
    const id = req.params.id
    const producto = {}

    if (req.body.name) {
        producto.name = req.body.name
    }

    if (req.body.price) {
        producto.price = req.body.price
    }

    if (req.body.category) {
        producto.category = req.body.category
    }

    productosService.editarProducto(id, producto)
        .then(function () {
            return productosService.traerProductoByID(id)
        })
        .then(function (productoEditado) {
            res.status(200).json(productoEditado)
        })

}

function replaceById(req, res) {
    const id = req.params.id

    productosService.editarProducto(id, req.body)
        .then(function () {
            return productosService.traerProductoByID(id)
        })
        .then(function (productoEditado) {
            res.status(200).json(productoEditado)
        })
}

function findReviews(req, res) {
    const id = req.params.id // id producto

    ReviewsService.findReviews(id)
        .then(function (reviews) {
            res.status(200).json(reviews)
        })
}

function createReview(req, res) {
    const id = req.params.id // id producto
    const review = {
        review: req.body.review
    }

    ReviewsService.createReview(id, review)
        .then(function (review) {
            res.status(201).json(review)
        })
}

export {
    findAll,
    create,
    deleteById,
    findById,
    editById,
    replaceById,
    findReviews,
    createReview
}