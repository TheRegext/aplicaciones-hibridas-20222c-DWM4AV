import express from 'express'
import * as uac from '../controllers/users.api.controllers.js'
import { isLoginValid } from '../../middleware/auth.middleware.js'


const route = express.Router()

// usuarios

route.route('/api/users')
    .get(uac.find)
    .post(uac.create)

route.route('/api/users/login')
    .post([isLoginValid], uac.login)


route.route('/api/users/:id')
    .get(uac.findById)
    .delete(uac.deleteById)

// account session


// favoritos

route.route('/api/users/:id/favProducts')
    .get(uac.findFavProducts)
    .post(uac.addFavProduct)


route.route('/api/users/:id/favProducts/:productId')
    .delete(uac.deleteFavProduct)


export default route