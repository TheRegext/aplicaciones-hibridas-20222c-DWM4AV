import express from 'express'
import * as procutosApiController from '../controllers/productos.api.controller.js'
import { isLogin } from '../../middleware/auth.middleware.js'
import { isProductValid } from '../../middleware/productValidate.middleware.js'

const router = express.Router()

router.route('/api/productos*')
    .all([isLogin])

router.route('/api/productos')
    .get(procutosApiController.findAll)
    .post([isProductValid], procutosApiController.create)

router.route('/api/productos/:id')
    .get(procutosApiController.findById)
    .delete(procutosApiController.deleteById)
    .patch([isProductValid], procutosApiController.editById)  // patch es para modificar parcialmente
    .put([isProductValid], procutosApiController.replaceById)  // put es para modificar completamente

router.route('/api/productos/:id/reviews')
    .get(procutosApiController.findReviews)
    .post(procutosApiController.createReview)





export default router