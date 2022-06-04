import { Formik, Form as FormikForm, useField, ErrorMessage } from 'formik'
import React from 'react'
import { validationSchema } from '../Schemas/formSchema'
import { FormContainer } from '../Styles/ComponentStyle'

interface TextFieldProps{
  label: string,
  name: string,
  type: string,
  placeholder: string
}

interface FormValues{
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  message: string
}

const initForm = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  message: ''
}

const TextField:React.FC<TextFieldProps> = ({ name, type, placeholder }) => {
  const [field, meta] = useField({ name, type, placeholder })
  return (
    <div className='TextFieldContainer'>
        {/* <label className='labelField' htmlFor={field.name}>{label}</label> */}
        <input className={`textField ${meta.touched && meta.error ? 'isInvalid' : ''} `}
            {...field} name={name} type={type} placeholder={placeholder} />
        <ErrorMessage className='error-field' name={field.name} component="div" />
    </div>
  )
}

const TextAreaField:React.FC<TextFieldProps> = ({ name, type, placeholder }) => {
  const [field, meta] = useField({ name, type, placeholder })
  return (
    <div className='TextFieldContainer'>
        {/* <label className='labelField' htmlFor={field.name}>{label}</label> */}
        <textarea className={`textField ${meta.touched && meta.error ? 'isInvalid' : ''} `}
            {...field} name={name} placeholder={placeholder} >
        </textarea>
        <ErrorMessage className='error-field' name={field.name} component="div" />
    </div>
  )
}

interface FormProps{
  onSubmit?: React.FormEventHandler;
  handleSubmit: Function;
}

export const Form:React.FC<FormProps> = ({ handleSubmit }) => {
  const onSubmitHandler = (values:FormValues) => {
    const formData = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      email: values.email,
      message: values.message
    }
    handleSubmit()
    console.log(formData)
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
