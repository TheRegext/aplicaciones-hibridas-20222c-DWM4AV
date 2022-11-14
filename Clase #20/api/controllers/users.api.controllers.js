import * as usersService from '../../services/users.services.js'
import * as productsService from '../../services/productos.services.js'

function findById(req, res) {
    const id = req.params.id
    usersService.findById(id)
        .then(function (user) {
            res.status(200).json(user)
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
    findById,
    findFavProducts,
    addFavProduct,
    deleteFavProduct
}