import * as categoriaService from '../../services/categorias.services.js';

function findAll(req, res) {
    categoriaService.traerCategorias()
        .then(function (categorias) {
            res.status(200).json(categorias)
        })
}

function create(req, res) {
    const category = {
        name: req.body.name
    }
    categoriaService.crearCategoria(category)
        .then(function (categoria) {
            res.status(201).json(categoria)
        })
}


export {
    findAll,
    create
}