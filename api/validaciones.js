import yup from 'yup';

const usuarioSchema = yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email('El email no es válido').required('El email es obligatorio'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria')
}).noUnknown();


const usuario = {
    name: 'Juan',
    email: 'emai@lmail.com',
    password: '123456',
    age: 20
}

usuarioSchema.validate(usuario, { abortEarly: false })
    .then((datos) => {
        console.log("Datos correctos", datos);
    })
    .catch((error) => {
        error.errors.forEach((err) => {
            console.log(err);
        });
    })

export {
    usuarioSchema
}