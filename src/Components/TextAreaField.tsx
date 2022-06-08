import React from 'react'
import { useField, ErrorMessage } from 'formik'
import { TextFieldProps } from '../../types'

const TextAreaField:React.FC<TextFieldProps> = ({ name, type, placeholder }) => {
  const [field, meta] = useField({ name, type, placeholder })
  return (
    <div className='TextFieldContainer'>
        {/* <label className='labelField' htmlFor={field.name}>{label}</label> */}
        <textarea className={`textField ${meta.touched && meta.error ? 'isInvalid' : ''} `}
            {...field} name={name} placeholder={placeholder} >
        </textarea>
        <div className='error-field-container'>
          <ErrorMessage className='error-field' name={field.name} component="p" />
        </div>
    </div>
  )
}

export default TextAreaField
