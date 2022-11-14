import express from 'express'
import * as categoriasApiController from '../controllers/categorias.api.controller.js'

const route = express.Router()

route.route('/api/categorias')
    .get(categoriasApiController.findAll)
    .post(categoriasApiController.create)

export default route