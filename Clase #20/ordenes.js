import { ObjectId } from "mongodb";

// orden
const ORDEN = {
    _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4567"),
    fecha: new Date(),
    productos: [{
        _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4568"),
        nombre: "Cafe Expreso",
        precio: 250,
        cantidad: 2,
        subtotal: 500
    }],
    total: 500,
}

const ORDEN_REPORT = {
    _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4567"),
    fecha: new Date(),
    total: 500,
    cantidad: 2
}

const PRODUCT_REPORT = {
    _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4568"),
    orden: ObjectId("5b3b1b9b9d9d3b0b8c8b4567"),
    producto: {
        _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4568"),
        nombre: "Cafe Expreso",
        precio: 250,
    },
    cantidad: 2,
    total: 500
}

const NOTAS_REPORT = {
    _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4568"),
    alumno: {
        _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4568"),
        nombre: "Juan Perez",
    },
    materia: {
        _id: ObjectId("5b3b1b9b9d9d3b0b8c8b4568"),
        nombre: "Matematica",
    },
    fecha: new Date(),
    nota: 10
}


// api/order
// Crear una orden

// api/order/:id
// Debemos poder ver el detalle de una orden (verOrden - obtener la orden por numero de orden "_id" )

// api/report/orders
// Reporte donde se vean las ordenes
// Codigo    Total    Fecha   Cantidad Productos

// api/report/orders/cancel

// api/report/orders/products
// Reporte donde se vean los productos para cada producto se vea cantidad vendida y total vendido
// Codigo   Orden     Nombre    Precio    Cantidad Vendida    Total Vendido


