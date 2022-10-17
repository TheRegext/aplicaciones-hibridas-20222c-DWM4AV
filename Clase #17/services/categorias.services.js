import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerCategorias() {
    return client.connect()
        .then(function () {
            return client.db('DB_M').collection('Categorias').find().toArray()
        })
}

async function crearCategoria(categoria) {
    const nuevaCategoria = {
        ...categoria
    }

    return client.connect()
        .then(function () {
            return client.db('DB_M').collection('Categorias').insertOne(nuevaCategoria)
        })
        .then(function () {
            return nuevaCategoria
        })
}

async function traerCategoriaByID(idCategoria) {
    return client.connect()
        .then(function () {
            return client.db('DB_M').collection('Categorias').findOne({ _id: new ObjectId(idCategoria) })
        })
}

async function actualizarCategoria(id, categoria) {
    return client.connect()
        .then(async function () {
            await client.db('DB_M').collection('Categorias').updateOne({ _id: new ObjectId(id) }, { $set: categoria })
            return true
        })
}


export {
    traerCategorias,
    crearCategoria,
    traerCategoriaByID,
    actualizarCategoria
}