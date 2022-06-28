import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const firstLastName = /^[A-Za-z ]*$/

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(firstLastName, 'Nombre invalido')
    .max(30, 'Maximo 30 caracteres')
    .required('El nombre es requerido'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Telefono invalido')
    .required('El telefono es requerido'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('El correo electronico es requerido'),
  message: Yup.string()
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .required('El mensaje es requerido')
    .max(1000, 'El mensaje no debe exceder los 1000 caracteres de longitud')
})
