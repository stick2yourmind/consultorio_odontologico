import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const firstLastName = /^[A-Za-z ]*$/

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(firstLastName, 'Nombre invalido')
    .max(30, 'Maximo 30 caracteres')
    .required('El nombre es requerido'),
  lastName: Yup.string()
    .matches(firstLastName, 'Apellido invalido')
    .max(30, 'Maximo 30 caracteres')
    .required('El apellido es requerido'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Telefono invalido')
    .required('El telefono es requerido'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('El correo electronico es requerido'),
  message: Yup.string()
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .required('El mensaje es requerido')
})
