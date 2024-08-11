import "../../index.css"
import { CartEmpty } from "./cart-empty"
import styled from "styled-components"
import { CartItens } from "./cart-itens"
import { FunctionComponent } from "react"
import './index.css'


export const Cart: FunctionComponent<any> = ({ cartItems, removeItem }) => {  
      
    let quantityCart: number = Object.keys(cartItems).length 
        
    return (
        <Div>
            <h2 className="cart-quantity">You Cart ({quantityCart})</h2>
            {quantityCart === 0 ? <CartEmpty /> : <CartItens item={cartItems} removeItem={removeItem} /> }            
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

