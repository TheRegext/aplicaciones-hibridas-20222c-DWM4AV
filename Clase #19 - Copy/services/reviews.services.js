import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_M')
const reviews = db.collection('reviews')

async function findReviews(idProducto) {
    return client.connect()
        .then(function () {
            return reviews.find({ product_id: new ObjectId(idProducto) }).toArray()
        })
}

async function createReview(idProducto, review) {
    const reviewNew = {
        ...review,
        product_id: new ObjectId(idProducto)
    }

    return client.connect()
        .then(function () {
            return reviews.insertOne(reviewNew)
        })
        .then(function (result) {
            return reviewNew
        })
}

export {
    findReviews,
    createReview
}