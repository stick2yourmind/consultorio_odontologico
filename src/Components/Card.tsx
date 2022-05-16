import type { CardType } from '../../types'
import { CardStyle } from '../Styles/ComponentStyle'

const Card = ({ img, title, desc }: CardType) => {
  return (
    <CardStyle>
      <div className="img-card-container">
        <img className='img-card' src={img} alt={desc}/>
      </div>
      <h6 className='title-card'> {title} </h6>
    </CardStyle>
  )
}

export default Card
