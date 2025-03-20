import styled from 'styled-components'
import { tituloProps} from '.'

export const Titulo = styled.h3<tituloProps>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: bold;
  margin-bottom: 16px;
`
