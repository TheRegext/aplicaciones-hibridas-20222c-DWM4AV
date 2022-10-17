import * as ProductosService from '../services/productos.services.js'
import * as CategoriasService from '../services/categorias.services.js'

function verTodos(req, res) {
    ProductosService.traerProductos()
        .then(function (productos) {
            res.render('Productos/Lista', { productos })
        })
}

function verUno(req, res) {
    const id = req.params.idProducto

    ProductosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render('Productos/Ver', { producto })
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
        category: req.body.category
    }

    ProductosService.guardarProducto(producto)
        .then(function (productoNuevo) {
            res.render('Success', { message: `Producto guardado con exito <a href="/productos/${productoNuevo.id}">Ver Producto</a>` })
        })
        .catch(function (err) {
            res.render('Error', { message: `Error al guardar el producto` })
        })

}

function formNuevo(req, res) {
    CategoriasService.traerCategorias()
        .then(function (categorias) {
            res.render('Productos/Nuevo', { categorias })
        })

}


function formEliminar(req, res) {
    const id = req.params.idProducto

    ProductosService.traerProductoByID(id)
        .then(function (producto) {
            if (producto) {
                res.render('Productos/Eliminar', { producto })
            }
            else {
                res.render('404', { message: 'Producto no encontrado' })
            }
        })
}

function eliminar(req, res) {
    const id = req.params.idProducto

    ProductosService.eliminarProducto(id)
        .then(function (result) {
            res.render('Success', { message: `Producto eliminado con exito` })
        })
        .catch(function (err) {
            res.render('Error', { message: `Error al eliminar el producto` })
        })
}

function formEditar(req, res) {
    const id = req.params.idProducto
    let categorias

    CategoriasService.traerCategorias()
        .then(function (cats) {
            categorias = cats
            return ProductosService.traerProductoByID(id)
        })
        .then(function (producto) {

            if (producto) {
                res.render('Productos/Editar', { producto, categorias })
            }
            else {
                res.render('404', { message: 'Producto no encontrado' })
            }
        })
}

function editar(req, res) {
    const id = req.params.idProducto

    const producto = {
        name: req.body.name,
        price: req.body.price,
    }

    ProductosService.editarProducto(id, producto)
        .then(function (result) {
            res.render('Success', { message: `Producto editado con exito <a href="/productos">Ver Productos</a>` })
        })
        .catch(function (err) {
            res.render('Error', { message: `Error al editar el producto` })
        })
}


export {
    verTodos,
    verUno,
    guardar,
    formNuevo,
    formEliminar,
    eliminar,
    formEditar,
    editar
}