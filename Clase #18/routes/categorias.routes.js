import express from 'express'
import * as categoriasController from '../controllers/categorias.controllers.js'

const router = express.Router()

router.get('/categorias', categoriasController.listarCategorias)


// cargar
router.route('/categorias/nuevo')
    .get(categoriasController.formCrearCategoria)
    .post(categoriasController.crearCategoria)


// editar
router.route('/categorias/:idCategoria/editar')
    .get(categoriasController.formEditarCategoria)
    .post(categoriasController.editarCategoria)

export default router