import { ListItens } from './components/list-itens'
import { Cart } from './components/cart'
import styled from 'styled-components'
import { useState } from 'react'
import './index.css'

function App() {

  const [cartItems, setCartItems] = useState<Array<object>>([])

  function addToCart(item: object) {
    setCartItems([...cartItems, item])
  }
  
  function removeItem(id: number) {
    const itemRemove = cartItems.splice(id, 1)
    setCartItems(cartItems.filter(item => item !== itemRemove))
  }

  return (
    <Main>
      <Div>
        <ListItens addToCart={addToCart} cartItems={cartItems} />
        <Cart cartItems={cartItems} removeItem={removeItem}/>
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