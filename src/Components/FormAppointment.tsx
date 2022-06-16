import { Formik, Form } from 'formik'
import TextField from '../Components/TextField'
import appointmentSchema from '../Schemas/formSchemaAppointment'
import { FormAppointmentContainer } from '../Styles/ComponentStyle'
import { FormValues } from '../../types'
import { useDispatch } from 'react-redux'
import { forward } from '../app/features/appointment/appointmentSlice'

const initForm = {
  fullName: '',
  dni: '',
  email: '',
  phone: ''
}

const FormAppointment = () => {
  const dispatch = useDispatch()
  const onSubmitHandler = (values:FormValues) => {
    const formData = {
      fullName: values.fullName,
      dni: values.dni,
      email: values.email,
      phone: values.phone
    }
    console.log(formData)
    dispatch(forward({ contactInfo: formData }))
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
          <Form className='form-body'>
              <TextField label='fullName' name='fullName' type='text' placeholder="Nombre completo" focus={true}/>
              <TextField label='dni' name='dni' type='text' placeholder="DNI"/>
              <TextField label='email' name='email' type='email' placeholder="Email"/>
              <TextField label='phone' name='phone' type='tel' placeholder="Telefono"/>
              <button className='form-body-btn' type="submit">Confirmar</button>
          </Form>
      </Formik>
    </FormAppointmentContainer>
  )
}

export default FormAppointment
