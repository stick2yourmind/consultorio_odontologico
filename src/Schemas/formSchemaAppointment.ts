import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const fullNameRegExp = /^[A-Za-z ]*$/

const appointmentSchema = Yup.object({
  fullName: Yup.string()
    .matches(fullNameRegExp, 'Nombre invalido')
    .max(50, 'Maximo 30 caracteres')
    .required('El nombre es requerido'),
  dni: Yup.number()
    .integer('DNI invalido, debe ser un número entero')
    .test('Is positive?',
      'DNI invalido, debe ser número positivo',
      (value) => {
        if (value && value > 0) return true
        return false
      })
    .min(15e6, 'DNI invalido')
    .required('El DNI es requerido'),
  email: Yup.string()
    .email('Correo electronico invalido')
    .required('El correo electronico es requerido'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Telefono invalido')
    .required('El telefono es requerido')
})

export default appointmentSchema
