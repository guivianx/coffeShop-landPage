import { ListItens } from './components/list-itens'
import { Cart } from './components/cart'
import styled from 'styled-components'
import { useState } from 'react'
import { CardConfirm } from './components/card-confirm'
import './index.css'

function App() {

  const [cartItems, setCartItems] = useState<Array<object>>([])

  const [confirmOrder, setConfirmOrder] = useState(false)

  function addToCart(item: any, confirm: boolean) {
    confirm ?
      cartItems.some((product: any) => { return product.name === item.name ? product.quantity = product.quantity + 1 : null }) ? setCartItems([...cartItems]) : setCartItems([...cartItems, item])
      :
      cartItems.some((product: any) => { return product.name === item.name && product.quantity > 1 ? product.quantity = product.quantity - 1 : null }) ? setCartItems([...cartItems]) : ''
  }

  function removeItem(id: number) {
    const itemRemove = cartItems.splice(id, 1)
    setCartItems(cartItems.filter(item => item !== itemRemove))
  }



  return (
    <Main>
      <Div>
        <ListItens addToCart={addToCart} cartItems={cartItems} />
        <Cart cartItems={cartItems} removeItem={removeItem} setConfirmOrder={setConfirmOrder}/>
        { confirmOrder ? <CardConfirm cartItems={cartItems} /> : ''}
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