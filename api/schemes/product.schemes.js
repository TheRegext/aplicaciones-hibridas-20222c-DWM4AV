import yup from 'yup';

const productScheme = yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    price: yup.number().positive('El precio debe ser positivo').required('El precio es obligatorio'),
    category: yup.string().required('La categoría es obligatoria'),
}).noUnknown();


export {
    productScheme
}
