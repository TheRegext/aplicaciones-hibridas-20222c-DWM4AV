import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_M')
const users = db.collection('users')
const favProducts = db.collection('favProducts')

async function findById(id) {
    return client.connect()
        .then(function () {
            return users.findOne({ _id: new ObjectId(id) })
        })
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
    findById,
    findFavProducts,
    addFavProduct,
    deleteFavProduct
}