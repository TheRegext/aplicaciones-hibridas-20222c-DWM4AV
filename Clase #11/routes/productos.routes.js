import express from 'express'
import * as ProductosController from '../controllers/productos.controller.js'

const router = express.Router()

router.get('/productos/', ProductosController.verTodos)

router.route('/productos/nuevo')
    .get(ProductosController.formNuevo)
    .post(ProductosController.guardar)


router.route('/productos/:idProducto/eliminar')
    .get(ProductosController.formEliminar)
    .post(ProductosController.eliminar)


router.get('/productos/:idProducto', ProductosController.verUno)




export default router