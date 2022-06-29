import React, { useEffect } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import TextField from '../Components/TextField'
import TextAreaField from './TextAreaField'
import { validationSchema } from '../Schemas/formSchema'
import { FormContainer } from '../Styles/ComponentStyle'
import useAxiosFunction from '../hooks/useAxiosFunction'
import axiosDB from '../app/api/axiosDB'
import { FormContactPageValues, FormContactPageType, FetchedFormContactPage } from '../../types'

const initForm = {
  name: '',
  phone: '',
  email: '',
  message: ''
}

export const Form:React.FC<FormContactPageType> = ({ confirmSubmit }) => {
  const [response, error, loading, axiosFetch]:FetchedFormContactPage = useAxiosFunction()
  const onSubmitHandler = (values:FormContactPageValues) => {
    axiosFetch({
      axiosInstance: axiosDB,
      method: 'post',
      url: '/contactMessages',
      requestConfig: {
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message
      }
    })
  }
  useEffect(() => {
    // Verifying no error response to confirm submit
    !loading && (response?.error === false) && confirmSubmit(true)
  }
  , [response, error, loading])
  return (
    <FormContainer>
      <h2 className='form-title'>Formulario de contacto</h2>
      <Formik
          initialValues={initForm}
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
      >
          <FormikForm className='form-body'>
              <TextField label='Nombre' name='name' type='text' placeholder="Nombre" focus/>
              <TextField label='Telefono' name='phone' type='tel' placeholder="Telefono"/>
              <TextField label='Email' name='email' type='email' placeholder="Email"/>
              <TextAreaField label='Mensaje' name='message' type='text' placeholder="Mensaje"/>
              <button className='form-body-btn' type='submit'>Enviar</button>
              {!loading && error && <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${error}`}</p>}
          </FormikForm>
      </Formik>
    </FormContainer>
  )
}
