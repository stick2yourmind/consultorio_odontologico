import { Formik, Form as FormikForm } from 'formik'
import TextField from '../Components/TextField'
import appointmentSchema from '../Schemas/formSchemaAppointment'
import { FormAppointmentContainer } from '../Styles/ComponentStyle'
import { FormValues } from '../../types'

const initForm = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  message: ''
}

const FormAppointment = () => {
  const onSubmitHandler = (values:FormValues) => {
    const formData = {
      fullName: values.firstName,
      dni: values.lastName,
      email: values.phoneNumber,
      phoneNumber: values.email
    }
    console.log(formData)
    // handleSubmit()
    // setCartOrder(cart, userData).then((cartOrder) => {
    //   setSubmitFinished(cartOrder)
    //   clearCart()
    // })
  }
  return (
    <FormAppointmentContainer>
      <Formik
          initialValues={initForm}
          validationSchema={appointmentSchema}
          onSubmit={onSubmitHandler}
      >
          <FormikForm className='form-body'>
              <TextField label='fullName' name='fullName' type='text' placeholder="Nombre completo"/>
              <TextField label='dni' name='dni' type="text" inputmode="numeric" placeholder="DNI"/>
              <TextField label='email' name='email' type='email' placeholder="Email"/>
              <TextField label='phoneNumber' name='phoneNumber' type='tel' placeholder="Telefono"/>
              <button className='form-body-btn' type='submit'>Confirmar</button>
          </FormikForm>
      </Formik>
    </FormAppointmentContainer>
  )
}

export default FormAppointment
