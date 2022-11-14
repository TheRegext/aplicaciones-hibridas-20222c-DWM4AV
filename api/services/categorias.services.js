import { MongoClient, ObjectId } from 'mongodb'


const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_M')
const categorias = db.collection('Categorias')
const productos = db.collection('Productos')


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
    await client.connect()

    const oldCategory = await categorias.findOne({ _id: new ObjectId(id) })

    if (oldCategory) {
        await categorias.updateOne({ _id: new ObjectId(id) }, { $set: categoria })
        await productos.updateMany({ category: oldCategory.name }, { $set: { category: categoria.name } })

        return true
    }

    return false
}


export {
    traerCategorias,
    crearCategoria,
    traerCategoriaByID,
    actualizarCategoria
}