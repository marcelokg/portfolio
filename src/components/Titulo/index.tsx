/* eslint-disable react/react-in-jsx-scope */
import { Titulo as TituloEstilo} from './styles'

export type tituloProps = {
  children: string
  fontSize?: number
}

const Titulo = (props : tituloProps) => (

<TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>

)

export default Titulo
