import type { CardType } from '../../../types'

const cardsMock:CardType[] = [
  {
    img: new URL('../svg/appointment-specialties/ortodoncia.svg', import.meta.url).href,
    title: 'Ortodoncia',
    _id: '2303837a-ae42-4a7f-a743-d88148cebd17'
  },
  {
    img: new URL('../svg/appointment-specialties/blanqueamiento.svg', import.meta.url).href,
    title: 'Blanqueamiento',
    _id: '0578ec7e-5c8a-4a84-a590-d66ab00fc617'
  },
  {
    img: new URL('../svg/appointment-specialties/tratamiento-caries.svg', import.meta.url).href,
    title: 'Tratamiento de caries',
    _id: '55538a57-f729-4d75-a446-0a84b5e3d4ae'
  },
  {
    img: new URL('../svg/appointment-specialties/remocion-placa.svg', import.meta.url).href,
    title: 'Remoción de placa',
    _id: '152a25d1-aa45-4eca-9af9-fac7d1518822'
  },
  {
    img: new URL('../svg/appointment-specialties/protesis.svg', import.meta.url).href,
    title: 'Diseño de protesis',
    _id: '95d65b9e-c55b-47f6-a3e9-4e14291e0ae4'
  },
  {
    img: new URL('../svg/appointment-specialties/placa-oclusal.svg', import.meta.url).href,
    title: 'Diseño de placa oclusal',
    _id: '17d0999b-aeb7-457a-b80d-42d80eee4fbc'
  }
]

export default cardsMock
