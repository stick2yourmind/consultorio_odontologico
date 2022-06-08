import { Formik, Form as FormikForm } from 'formik'
import TextField from '../Components/TextField'
import TextAreaField from './TextAreaField'
import { validationSchema } from '../Schemas/formSchema'
import { FormContainer } from '../Styles/ComponentStyle'
import { FormValues } from '../../types'

const initForm = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  message: ''
}

export const Form = () => {
  const onSubmitHandler = (values:FormValues) => {
    const formData = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      message: values.message
    }
    console.log(formData)
    // handleSubmit()
    // setCartOrder(cart, userData).then((cartOrder) => {
    //   setSubmitFinished(cartOrder)
    //   clearCart()
    // })
  }
  return (
    <FormContainer>
      <h2 className='form-title'>Formulario de contacto</h2>
      <Formik
          initialValues={initForm}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
      >
          <FormikForm className='form-body'>
              <TextField label='Nombre' name='firstName' type='text' placeholder="Nombre"/>
              <TextField label='Apellido' name='lastName' type='text' placeholder="Apellido"/>
              <TextField label='Telefono' name='phoneNumber' type='tel' placeholder="Telefono"/>
              <TextField label='Email' name='email' type='email' placeholder="Email"/>
              <TextAreaField label='Mensaje' name='message' type='text' placeholder="Mensaje"/>
              <button className='form-body-btn' type='submit'>Enviar</button>
          </FormikForm>
      </Formik>
    </FormContainer>
  )
}
