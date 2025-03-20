/* eslint-disable react/react-in-jsx-scope */
import { P } from './styles'

export type tituloProps = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = ( {children, tipo = 'principal'} : tituloProps) => (

<P tipo={tipo}>{children}</P>

)

export default Paragrafo
