import yup from 'yup'

const userScheme = yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email('El email no es válido').required('El email es obligatorio'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria')
}).noUnknown()

const loginScheme = yup.object({
    email: yup.string().email('El email no es válido').required('El email es obligatorio'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria')
}).noUnknown()

export {
    userScheme,
    loginScheme
}