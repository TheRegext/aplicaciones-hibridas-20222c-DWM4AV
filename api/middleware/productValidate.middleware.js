import { productScheme } from '../schemes/product.schemes.js';

function isProductValid(req, res, next) {
    productScheme.validate(req.body)
        .then((data) => {
            req.body = data;
            next()
        })
        .catch((error) => {
            res.status(400).json({ error: error.errors })
        })

}

export { isProductValid }