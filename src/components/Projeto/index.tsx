/* eslint-disable react/react-in-jsx-scope */
import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"
import { Card, LinkBotao } from "./styles"


const Projeto = () => (
  <div>
    <Card>
      <Titulo>Lista de Projetos</Titulo>
      <Paragrafo tipo="secundario">Descrição do Projeto</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  </div>
)

export default Projeto


