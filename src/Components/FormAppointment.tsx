import { Formik, Form } from 'formik'
import TextField from '../Components/TextField'
import appointmentSchema from '../Schemas/formSchemaAppointment'
import { FormAppointmentContainer } from '../Styles/ComponentStyle'
import { FormValues, ResPutAppointmentAPI, ReturnErrUseAxiosFn, ReturnLoadUseAxiosFn, ReturnUseAxiosFn } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { forward, update } from '../app/features/appointment/appointmentSlice'
import useAxiosFunction from '../hooks/useAxiosFunction'
import { RootState } from '../app/store'
import axiosDB from '../app/api/axiosDB'
import { useEffect } from 'react'

type Taux = [ResPutAppointmentAPI, ReturnErrUseAxiosFn, ReturnLoadUseAxiosFn, ReturnUseAxiosFn]

const initForm = {
  fullName: '',
  dni: '',
  email: '',
  phone: ''
}
const FormAppointment = () => {
  const data = useSelector((state:RootState) => state.appointment.data)
  const [responseData, error, loading, axiosFetch]:Taux = useAxiosFunction()

  const dispatch = useDispatch()
  // only triggers after pass validation
  const onSubmitHandler = (values:FormValues) => {
    const formData = {
      fullName: values.fullName,
      dni: values.dni,
      email: values.email,
      phone: values.phone
    }
    console.log(formData)
    dispatch(update({ contactInfo: formData }))
    axiosFetch({
      axiosInstance: axiosDB,
      method: 'put',
      url: `/appointments/${data.appointmentId}`,
      requestConfig: {
        professionalId: data.professional as string,
        specialtyId: data.specialty as string,
        user: {
          dni: formData.dni,
          email: formData.email,
          fullName: formData.fullName,
          phone: formData.phone
        }
      }
    })
  }
  useEffect(() => {
    !loading && !error && (responseData?.statusCode === 200) && dispatch(forward(null))
  }
  , [responseData, error, loading])

  return (
    <FormAppointmentContainer>
      <>
      <Formik
          initialValues={initForm}
          validationSchema={appointmentSchema}
          onSubmit={onSubmitHandler}
      >
          <Form className='form-body'>
              <TextField label='fullName' name='fullName' type='text' placeholder="Nombre completo" focus/>
              <TextField label='dni' name='dni' type='text' placeholder="DNI"/>
              <TextField label='email' name='email' type='email' placeholder="Email"/>
              <TextField label='phone' name='phone' type='tel' placeholder="Telefono"/>
              <button className='form-body-btn' type="submit">Confirmar</button>
          </Form>
      </Formik>
      {!loading && error && <p>{`Un error ha ocurrido: ${error}`}</p>}
      </>
    </FormAppointmentContainer>
  )
}

export default FormAppointment
