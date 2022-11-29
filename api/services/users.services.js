import { MongoClient, ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_M')
const users = db.collection('users')
const favProducts = db.collection('favProducts')


async function find(filter) {
    return client.connect()
        .then(function () {
            return users.find(filter).toArray()
        })
}


async function findById(id) {
    return client.connect()
        .then(function () {
            return users.findOne({ _id: new ObjectId(id) })
        })
}

async function create(user) {
    const newUser = { ...user }

    await client.connect()

    if (await users.findOne({ email: newUser.email })) {
        throw new Error('El usuario ya existe') // provoca que se ejecute el catch en el controlador
    }

    // encriptar password
    const salt = await bcrypt.genSalt(10)
    const paswordHash = await bcrypt.hash(newUser.password, salt)

    newUser.password = paswordHash

    await users.insertOne(newUser)

    return newUser
}

async function deleteById(id) {
    return client.connect()
        .then(function () {
            return users.deleteOne({ _id: new ObjectId(id) })
        })
}


async function login(user) {

    await client.connect()

    console.log(user)

    const userFound = await users.findOne({ email: user.email })

    console.log(userFound)

    if (!userFound) {
        throw new Error('El usuario no existe')
    }

    const passwordMatch = await bcrypt.compare(user.password, userFound.password)

    console.log(passwordMatch)

    if (!passwordMatch) {
        throw new Error('La contraseña no es correcta')
    }

    return userFound
}



async function findFavProducts(id) {
    return client.connect()
        .then(function () {
            return favProducts.findOne({ user_id: new ObjectId(id) })
        })
}

async function addFavProduct(id, product) {
    return client.connect()
        .then(function () {
            return favProducts.updateOne(
                { user_id: new ObjectId(id) },
                { $addToSet: { products: product } }
            )
        })
        .then(function (result) {
            if (result.modifiedCount === 0) {
                return favProducts.insertOne({
                    user_id: new ObjectId(id),
                    products: [product]
                })
            }
        })
}

/*
async function addFavProduct(id, product) {
    return client.connect()
        .then(function () {
            return favProducts.findOne({ user_id: new ObjectId(id) })
        })
        .then(function (fav) {
            if (fav) {
                return favProducts.updateOne(
                    { user_id: new ObjectId(id) },
                    { $push: { products: product } }
                )
            }
            else {
                return favProducts.insertOne({
                    user_id: new ObjectId(id),
                    products: [product]
                })
            }
        })
}
*/

async function deleteFavProduct(id, productId) {
    return client.connect()

        .then(function () {
            return favProducts.updateOne(
                { user_id: new ObjectId(id) },
                { $pull: { products: { _id: new ObjectId(productId) } } }
            )
        })
}


export {
    find,
    findById,
    create,
    deleteById,
    login,
    findFavProducts,
    addFavProduct,
    deleteFavProduct
}