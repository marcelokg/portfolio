/* eslint-disable react/react-in-jsx-scope */

import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SideBarContainer } from "./styles"

type Props = {
  trocaTema: () => void
}

const Sidebar = (props : Props) => (
  <aside>
    <SideBarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={17}>Marcelo Kriiger</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>marcelokg</Paragrafo>
      <Descricao tipo="principal" fontSize={13}>Desenvolvedor Front-End</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
