import { Home } from '../Styles/PageStyle'
import Card from '../Components/Card'
import { Gallery } from '../Styles/ComponentStyle'
import { cardsMock } from '../assets/mocks/cardsMock.js'

const HomePage = () => {
  const imgUrl = new URL('../assets/img/blanqueamiento-principal.jpg', import.meta.url).href
  return (
    <Home className="home">
      <div className='main-img-container'>
        <img className="main-img" src={imgUrl} alt="tooth whitening"/>
      </div>
      <h3 id='services-title'>Nuestros servicios</h3>
      <Gallery>
        {
        cardsMock.map(card => { return (<Card {...card} key={card.img} />) })
        }
      </Gallery>
    </Home>
  )
}

export default HomePage
