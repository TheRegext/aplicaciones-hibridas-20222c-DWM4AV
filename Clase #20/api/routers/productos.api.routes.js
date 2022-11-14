import express from 'express'
import * as procutosApiController from '../controllers/productos.api.controller.js'

const router = express.Router()

router.route('/api/productos')
    .get(procutosApiController.findAll)
    .post(procutosApiController.create)

router.route('/api/productos/:id')
    .get(procutosApiController.findById)
    .delete(procutosApiController.deleteById)
    .patch(procutosApiController.editById)  // patch es para modificar parcialmente
    .put(procutosApiController.replaceById)  // put es para modificar completamente

router.route('/api/productos/:id/reviews')
    .get(procutosApiController.findReviews)
    .post(procutosApiController.createReview)





export default router