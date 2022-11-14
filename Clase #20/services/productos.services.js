import { MongoClient, ObjectId } from 'mongodb'
import * as ReviewsService from './reviews.services.js'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_M')
const productos = db.collection('Productos')

async function traerProductos(filter) {

    return client.connect()
        .then(function () {
            const db = client.db('DB_M')
            const productos = db.collection('Productos')
            return productos.find(filter).toArray()
        })
        .catch(function (err) {
            console.log("traerProductos:: ", err)
            return []
        })
}

async function traerProductoByID(id) {
    await client.connect()
    const producto = await productos.findOne({ _id: new ObjectId(id) })

    if (producto) {
        producto.reviews = await ReviewsService.findReviews(id)
    }

    return producto
}

async function guardarProducto(producto) {
    const productoNuevo = {
        ...producto
    }

    return client.connect()
        .then(function () {
            const db = client.db('DB_M')
            const productos = db.collection('Productos')

            // el insertOne modifica el objeto y le agrega el id
            return productos.insertOne(productoNuevo)
        })
        .then(function (result) {
            return productoNuevo
        })
}

async function eliminarProducto(id) {
    return client.connect()
        .then(function () {
            const productos = client.db('DB_M').collection('Productos')
            return productos.deleteOne({ _id: new ObjectId(id) })
        })
}


async function editarProducto(id, producto) {
    return client.connect()
        .then(function () {
            const productos = client.db('DB_M').collection('Productos')
            return productos.updateOne(
                { _id: new ObjectId(id) },
                { $set: producto }
            )
        })
}

async function replaceProducto(id, producto) {
    return client.connect()
        .then(function () {
            const productos = client.db('DB_M').collection('Productos')
            return productos.replaceOne(
                { _id: new ObjectId(id) },
                producto
            )
        })
}




export {
    traerProductos,
    traerProductoByID,
    guardarProducto,
    eliminarProducto,
    editarProducto,
    replaceProducto
}