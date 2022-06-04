import type { CardType } from '../../../types'

const cardsMock:CardType[] = [
  {
    img: new URL('../svg/appointment-specialties/ortodoncia.svg', import.meta.url).href,
    title: 'Ortodoncia'
  },
  {
    img: new URL('../svg/appointment-specialties/blanqueamiento.svg', import.meta.url).href,
    title: 'Blanqueamiento'
  },
  {
    img: new URL('../svg/appointment-specialties/tratamiento-caries.svg', import.meta.url).href,
    title: 'Tratamiento de caries'
  },
  {
    img: new URL('../svg/appointment-specialties/remocion-placa.svg', import.meta.url).href,
    title: 'Remoción de placa'
  },
  {
    img: new URL('../svg/appointment-specialties/protesis.svg', import.meta.url).href,
    title: 'Diseño de protesis'
  },
  {
    img: new URL('../svg/appointment-specialties/placa-oclusal.svg', import.meta.url).href,
    title: 'Diseño de placa oclusal'
  }
]

export default cardsMock
