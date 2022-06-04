import React from 'react'
import type { MCardType } from '../../types'
import { MinimalistCardStyle } from '../Styles/ComponentStyle'

const MinimalistCard:React.FC<MCardType> = ({ img, title, desc, variant }) => {
  return (
    <MinimalistCardStyle variant={variant}>
      <h6 className='title-minimalist-card'> {title} </h6>
      <img className='img-minimalist-card' src={img} alt={desc ?? title}/>
    </MinimalistCardStyle>
  )
}

export default MinimalistCard
