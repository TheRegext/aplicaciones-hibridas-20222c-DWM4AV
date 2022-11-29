import jwt from 'jsonwebtoken'

import * as usersService from '../../services/users.services.js'
import * as productsService from '../../services/productos.services.js'
import * as tokenService from '../../services/tokens.services.js'


function find(req, res) {
    const filter = {}


    usersService.find(filter)
        .then(function (users) {
            res.status(200).json(users)
        })
}

function findById(req, res) {
    const id = req.params.id
    usersService.findById(id)
        .then(function (user) {
            res.status(200).json(user)
        })
}

function create(req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    usersService.create(user)
        .then(function (user) {
            res.status(201).json(user)
        })
        .catch(function (err) {
            res.status(400).json({ message: err.message })
        })
}


function deleteById(req, res) {
    const id = req.params.id
    usersService.deleteById(id)
        .then(function () {
            res.status(204).end()
        })
}


function login(req, res) {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }

    usersService.login(user)
        .then(function (user) {
            const token = jwt.sign({ id: user._id, rol: 'admin' }, 'CLAVE_SECRETA')

            tokenService.create({ token: token, user_id: user._id })
                .then(function () {
                    res.status(200).json({ token, user })
                })
                .catch(function (err) {
                    res.status(500).json({ message: 'Error al guardar el token' })
                })

        })
        .catch(function (err) {

            res.status(400).json({ message: err.message })
        })
}

function logout(req, res) {
    const token = req.headers['autn-token']

    tokenService.deleteByToken(token)
        .then(function () {
            res.status(200).json({ message: 'Sesion cerrada' })
        })


}



function findFavProducts(req, res) {
    const id = req.params.id
    usersService.findFavProducts(id)
        .then(function (favProducts) {
            res.status(200).json(favProducts)
        })
}

async function addFavProduct(req, res) {
    const id = req.params.id

    const product = await productsService.traerProductoByID(req.body._id)

    if (product) {
        const productToAdd = {
            _id: product._id,
            name: product.name,
            price: product.price,
        }

        await usersService.addFavProduct(id, productToAdd)
        res.status(200).json({ message: 'Producto agregado a favoritos' })
    }
    else {
        res.status(404).json({ message: 'Producto no encontrado' })
    }
}

async function deleteFavProduct(req, res) {
    const id = req.params.id
    const productId = req.params.productId

    await usersService.deleteFavProduct(id, productId)

    res.status(200).json({ message: 'Producto eliminado de favoritos' })
}

export {
    find,
    create,
    findById,
    deleteById,
    login,
    logout,
    findFavProducts,
    addFavProduct,
    deleteFavProduct
}