/* eslint-disable react/react-in-jsx-scope */

import { ThemeProvider } from "styled-components"
import Projetos from "./containers/Projetos"
import Sidebar from "./containers/Sidebar"
import Sobre from "./containers/Sobre"
import EstiloGlobal, { Container } from "./styles"
import TemaLight from "./themes/light"
import TemaDark from "./themes/dark"
import { useState } from "react"

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema () {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? TemaDark : TemaLight}>
      <EstiloGlobal/>
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre/>
          <Projetos/>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
