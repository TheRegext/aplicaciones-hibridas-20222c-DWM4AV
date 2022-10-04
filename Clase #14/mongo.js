import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(async function () {
        console.log("Coneccion exitosa")

        const db = client.db('DB_M')

        console.log(db.databaseName)

        const Alumnos = db.collection('Alumnos')

        const ListaAlumnos = await Alumnos.find().toArray()

        console.log("Lista de Alumnos")
        console.table(ListaAlumnos)

        const ListaAlumnosFiltro = await Alumnos.find({ name: "Julieta" }).toArray()

        console.log("Lista de Alumnos Filtrado")
        console.table(ListaAlumnosFiltro)


        const ListaAlumnosOrdenada = await Alumnos.find().sort({ name: -1 }).toArray()

        console.log("Lista de Alumno Ordenada")
        console.table(ListaAlumnosOrdenada)

        const Alumno = await Alumnos.findOne({ name: "Julieta" })

        console.log("Alumno")
        console.table(Alumno)
        /*
        
                const AlumnoNuevo = {
                    name: "Ignacio",
                    age: 20,
                }
        
                const AlumnoInsertado = await Alumnos.insertOne(AlumnoNuevo)
        
                console.log("Alumno Insertado")
                console.log(AlumnoInsertado)
                console.log(AlumnoNuevo)
        */
        const AlumnoEliminado = await Alumnos.deleteOne({ name: "Ignacio" })

        console.log("Alumno Eliminado")
        console.log(AlumnoEliminado)

        const AlumnoActualizado = await Alumnos.updateOne({ name: "Julieta" },
            { $set: { email: "julieta@mail.com" } })

        console.log("Alumno Actualizado")
        console.log(AlumnoActualizado)


        const AlumnoReemplazado = await Alumnos.replaceOne({ name: "Julieta" },
            { name: "Julieta", age: 20 })

        console.log("Alumno Reemplazado")
        console.log(AlumnoReemplazado)


    })
    .catch(function (err) {
        console.log(err)
    })