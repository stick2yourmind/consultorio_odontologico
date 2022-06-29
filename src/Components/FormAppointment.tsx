import { Formik, Form } from 'formik'
import TextField from '../Components/TextField'
import appointmentSchema from '../Schemas/formSchemaAppointment'
import { FormAppointmentContainer } from '../Styles/ComponentStyle'
import { FormValues, FetchedFormAppointmentStep } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { forward } from '../app/features/appointment/appointmentSlice'
import useAxiosFunction from '../hooks/useAxiosFunction'
import { RootState } from '../app/store'
import axiosDB from '../app/api/axiosDB'
import { useEffect } from 'react'
import { initForm } from '../utils/const/form'

const FormAppointment = () => {
  const data = useSelector((state:RootState) => state.appointment.data)
  const [responseData, error, loading, axiosFetch]:FetchedFormAppointmentStep = useAxiosFunction()

  const dispatch = useDispatch()
  // only triggers after pass validation
  const onSubmitHandler = (values:FormValues) => {
    axiosFetch({
      axiosInstance: axiosDB,
      method: 'put',
      url: `/appointments/${data.appointmentId}`,
      requestConfig: {
        professionalId: data.professional as string,
        specialtyId: data.specialty as string,
        user: {
          dni: Number(values.dni),
          email: values.email,
          fullName: values.fullName,
          phone: values.phone
        }
      }
    })
  }
  useEffect(() => {
    // Verifying no error response to continue to next step
    !loading && (responseData?.error === false) && dispatch(forward(null))
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
              <TextField label='fullName' name='fullName' type='text' placeholder="Nombre completo" focus />
              <TextField label='dni' name='dni' type='text' placeholder="DNI"/>
              <TextField label='email' name='email' type='email' placeholder="Email"/>
              <TextField label='phone' name='phone' type='tel' placeholder="Telefono"/>
              <button className='form-body-btn' type="submit">Confirmar</button>
          </Form>
      </Formik>
      {!loading && error && <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${error}`}</p>}
      </>
    </FormAppointmentContainer>
  )
}

export default FormAppointment
