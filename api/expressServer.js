import express from 'express'
import cors from 'cors'
import ProductosRouter from './routes/productos.routes.js'
import HomeRouter from './routes/home.routes.js'
import CategoriasRouter from './routes/categorias.routes.js'
import ProductosApiRouter from './api/routers/productos.api.routes.js'
import CategoriasApiRouter from './api/routers/categorias.api.routes.js'
import UsersApiRouter from './api/routers/users.api.routes.js'

const app = express()
app.set('view engine', 'ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // decodifica el body cuando es json
app.use(cors()) // permite el acceso a la API desde otros dominios

// Rutas
app.use('/', HomeRouter)
app.use('/', ProductosRouter)
app.use('/', CategoriasRouter)
app.use('/', ProductosApiRouter)
app.use('/', CategoriasApiRouter)
app.use('/', UsersApiRouter)


app.listen(2022, function () {
    console.log('El servidor esta ejecutando! http://localhost:2022')
})
