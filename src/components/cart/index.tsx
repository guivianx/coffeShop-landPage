import "../../index.css"
import { CartEmpty } from "./cart-empty"
import styled from "styled-components"
import { CartItens } from "./cart-itens"
import { FunctionComponent } from "react"
import './index.css'


export const Cart: FunctionComponent<any> = ({ cartItems, removeItem, setConfirmOrder }) => {  
      
    let quantityCart: number = cartItems.map((item: any) => item.quantity).reduce((a: any, b: any) => a + b, 0)    
        
    return (
        <Div>
            <h2 className="cart-quantity">You Cart ({quantityCart})</h2>
            {quantityCart === 0 ? <CartEmpty /> : <CartItens item={cartItems} removeItem={removeItem} setConfirmOrder={setConfirmOrder} /> }            
        </Div>
    )
}

const Div = styled.div`
    padding: 20px;
    background-color: var(--Rose-50);
    border-radius: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;


`

