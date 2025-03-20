/* eslint-disable react/react-in-jsx-scope */
import { P } from './styles'

export type tituloProps = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ( {children, tipo = 'principal', fontSize} : tituloProps) => (

<P fontSize={fontSize} tipo={tipo}>{children}</P>

)

export default Paragrafo
