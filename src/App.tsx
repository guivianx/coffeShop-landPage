import styled from 'styled-components'
import { Cart } from './components/cart'
import './index.css'

import { ListItens } from './components/list-itens'

function App() {
  return (
    <Main>
      <Div>
        <ListItens />
        <Cart/>
      </Div>
    </Main>
  )
}

export default App

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  `
  
  const Div = styled.div`
  display: flex;
  gap: 40px;
`