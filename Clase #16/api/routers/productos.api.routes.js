import express from 'express'
import * as procutosApiController from '../controllers/productos.api.controller.js'

const router = express.Router()

router.route('/api/productos')
    .get(procutosApiController.findAll)
    .post(procutosApiController.create)

router.route('/api/productos/:id')
    .get(procutosApiController.findById)
    .delete(procutosApiController.deleteById)


export default router