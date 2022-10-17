import * as categoriasService from '../services/categorias.services.js'

function listarCategorias(req, res) {
    categoriasService.traerCategorias()
        .then(function (categorias) {
            res.render('Categorias/Lista', { categorias })
        })
}

function formCrearCategoria(req, res) {
    res.render('Categorias/Cargar', { categoria: {} })
}

function crearCategoria(req, res) {
    const categoria = {
        name: req.body.name
    }

    categoriasService.crearCategoria(categoria)
        .then(function () {
            res.redirect('/categorias')
        })
}

// muestra el formulario para editar la categoria
function formEditarCategoria(req, res) {
    const idCategoria = req.params.idCategoria

    categoriasService.traerCategoriaByID(idCategoria)
        .then(function (categoria) {
            res.render('Categorias/Cargar', { categoria })
        })

}

function editarCategoria(req, res) {
    const idCategoria = req.params.idCategoria
    const categoria = {
        name: req.body.name
    }

    categoriasService.actualizarCategoria(idCategoria, categoria)
        .then(function () {
            res.redirect('/categorias')
        })
}

export {
    listarCategorias,
    formCrearCategoria,
    crearCategoria,
    formEditarCategoria,
    editarCategoria
}