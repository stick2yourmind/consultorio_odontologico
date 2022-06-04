import type { CardType } from '../../../types'

export const cardsMock:Pick<CardType, 'img' | 'title' | 'desc'>[] = [
  {
    img: new URL('../img/aparatos.jpg', import.meta.url).href,
    title: 'Ortodoncia',
    desc: 'Ortodoncia y aparatos dentales estilizados e invisibles disponibles'
  },
  {
    img: new URL('../img/blanqueamiento.webp', import.meta.url).href,
    title: 'Blanqueamiento',
    desc: 'Blanqueamiento dental LED y enzimatico'
  },
  {
    img: new URL('../img/caries.jpg', import.meta.url).href,
    title: 'Tratamiento de caries',
    desc: 'Tratamiento de caries moderna de 5ta generación'
  },
  {
    img: new URL('../img/remocion-placa.jpg', import.meta.url).href,
    title: 'Remoción de placa',
    desc: 'Remoción de placa dental mecánica y ultrasonido'
  },
  {
    img: new URL('../img/corona.jpg', import.meta.url).href,
    title: 'Diseño de protesis',
    desc: 'Diseño de coronas protesis en porcelana, composite o de circonio; los implantes en titanio y las carillas en porcelana o composite'
  },
  {
    img: new URL('../img/placa-oclusal.jpg', import.meta.url).href,
    title: 'Diseño de placa oclusal',
    desc: 'Diseño de placa oclusal de acrílico duro o resina rígida'
  }
]
