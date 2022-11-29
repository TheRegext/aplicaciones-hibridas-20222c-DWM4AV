import jwt from 'jsonwebtoken'
import * as tokenService from '../services/tokens.services.js'
import { loginScheme } from '../schemes/user.schemes.js'

function isLogin(req, res, next) {

    const token = req.headers['auth-token']

    if (!token) {
        return res.status(401).json({ message: 'No se envio el token' })
    }

    try {
        const payload = jwt.verify(token, 'CLAVE_SECRETA')
        tokenService.findByToken(token)
            .then(function (token) {
                if (!token) {
                    return res.status(401).json({ message: 'Token invalido' })
                }


                req.user = payload
                next()
            })
            .catch(function () {
                return res.status(401).json({ message: 'Token invalido' })
            })
    }
    catch (err) {
        return res.status(401).json({ message: 'Token invalido' })
    }

}

function isAdmin(req, res, next) {
    if (req.user.rol !== 'admin') {
        // return res.status(401).json({ message: 'No estas autorizado' })
    }

    next()
}

function isLoginValid(req, res, next) {
    loginScheme.validate(req.body, { abortEarly: false })
        .then((data) => {
            req.body = data
            next()
        })
        .catch((error) => {
            res.status(400).json({ errors: error.errors })
        })
}

export {
    isLogin,
    isAdmin,
    isLoginValid
}