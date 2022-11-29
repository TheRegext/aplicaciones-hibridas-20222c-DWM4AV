import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
const db = client.db('DB_M')
const tokens = db.collection('tokens')


async function create(token) {
    const newToken = { ...token }

    await client.connect()

    await tokens.insertOne(newToken)

    return newToken
}

async function findByToken(token) {
    await client.connect()

    return tokens.findOne({ token })
}

async function deleteByToken(token) {
    await client.connect()

    return tokens.deleteOne({ token })

}

export {
    create,
    findByToken,
    deleteByToken
}