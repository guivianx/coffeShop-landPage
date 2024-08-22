import { CardConfirm } from './components/card-confirm'
import { ListItens } from './components/list-itens'
import { Cart } from './components/cart'
import { useState } from 'react'
import './index.css'
import './app.css'

function App() {

  const [cartItems, setCartItems] = useState<Array<object>>([])

  const [confirmOrder, setConfirmOrder] = useState(false)

  function addToCart(item: any, confirm: boolean) {
    confirm ?
      cartItems.some((product: any) => { return product.name === item.name ? product.quantity = product.quantity + 1 : null }) ? setCartItems([...cartItems]) : setCartItems([...cartItems, item])
      :
      cartItems.some((product: any) => { return product.name === item.name && product.quantity > 1 ? product.quantity = product.quantity - 1 : null }) ? setCartItems([...cartItems]) : null
  }

  function removeItem(id: number) {
    const itemRemove = cartItems.splice(id, 1)
    setCartItems(cartItems.filter(item => item !== itemRemove))
  }

  return (
    <main>
      <div>
        <ListItens addToCart={addToCart} cartItems={cartItems} />
        <Cart cartItems={cartItems} removeItem={removeItem} setConfirmOrder={setConfirmOrder} />
        { confirmOrder ? <CardConfirm cartItems={cartItems} /> : null }
      </div>
    </main>
  )
}

export default App