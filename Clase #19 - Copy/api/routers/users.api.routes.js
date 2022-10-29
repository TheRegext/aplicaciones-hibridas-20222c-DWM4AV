import express from 'express'
import * as usersApiController from '../controllers/users.api.controllers.js'

const route = express.Router()

route.route('/api/users/:id')
    .get(usersApiController.findById)

route.route('/api/users/:id/favProducts')
    .get(usersApiController.findFavProducts)
    .post(usersApiController.addFavProduct)


route.route('/api/users/:id/favProducts/:productId')
    .delete(usersApiController.deleteFavProduct)


export default route