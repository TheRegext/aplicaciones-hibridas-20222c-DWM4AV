import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerProductos() {

    return client.connect()
        .then(function () {
            const db = client.db('DB_M')
            const productos = db.collection('Productos')
            return productos.find().toArray()
            // return client.db('DB_M').collection('Productos').find().toArray()
        })
        .catch(function (err) {
            console.log("traerProductos:: ", err)
            return []
        })
}

async function traerProductoByID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('DB_M')
            const productos = db.collection('Productos')
            return productos.findOne({ _id: new ObjectId(id) })
        })
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


export {
    traerProductos,
    traerProductoByID,
    guardarProducto,
    eliminarProducto,
    editarProducto
}