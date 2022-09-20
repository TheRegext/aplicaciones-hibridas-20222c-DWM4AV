import express from 'express'
import ProductosRouter from './routes/productos.routes.js'

const app = express()
app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/', ProductosRouter)

app.listen(2022, function () {
    console.log('El servidor esta ejecutando! http://localhost:2022')
})
