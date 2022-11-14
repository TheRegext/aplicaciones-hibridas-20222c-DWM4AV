import { ObjectId } from "mongodb";

const USER = {
    _id: ObjectId(""),
    email: 'dsadsa@dsdsa.com',
    name: "",
    password: "",
}

const FAV_PRODUCTS = {
    user_id: ObjectId(""),
    product: {
        _id: ObjectId(""),
        name: "",
        price: 0,
    }
}

const FAV_PRODUCTS = {
    user_id: ObjectId(""),
    products: [{
        _id: ObjectId(""),
        name: '',
        price: 0,
    }]
}

const FAV_PRODUCTS = {
    product_id: ObjectId(""),
    user_id: ObjectId(""),
}

const FAV_PRODUCTS = {
    user_id: ObjectId(""),
    products: [ObjectId("")]
}