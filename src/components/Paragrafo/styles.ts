import styled from 'styled-components'
import { tituloProps} from '.'

export const P = styled.p<tituloProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : '14px')};
  color: ${(props => (props.tipo === 'principal' ? props.theme.corPrincipal : props.theme.corSecundaria))};
  line-height: 22px;
`
