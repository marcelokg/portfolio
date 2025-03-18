/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')}
`

function Teste (){
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Cancelar</Botao>
    </>
  )
}

export default Teste
