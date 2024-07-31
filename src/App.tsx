import styled from 'styled-components'
import './index.css'

function App() {
  return (
      <Main>
        <h1>Hello World</h1>
      </Main>
  )
}

export default App

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`