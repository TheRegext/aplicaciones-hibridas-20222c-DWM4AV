import express from 'express'
import * as ProductosController from './controllers/productos.controller.js'

const router = express.Router()

router.get('/productos', ProductosController.verTodos)
router.get('/productos/:idProducto', ProductosController.verUno)
router.post('/nuevo', ProductosController.guardar)

export default router