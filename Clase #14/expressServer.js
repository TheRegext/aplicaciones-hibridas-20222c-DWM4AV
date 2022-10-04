import express from 'express'
import ProductosRouter from './routes/productos.routes.js'
import HomeRouter from './routes/home.routes.js'
import CategoriasRouter from './routes/categorias.routes.js'

const app = express()
app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/', HomeRouter)
app.use('/', ProductosRouter)
app.use('/', CategoriasRouter)


app.listen(2022, function () {
    console.log('El servidor esta ejecutando! http://localhost:2022')
})
