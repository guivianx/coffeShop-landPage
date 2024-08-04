import "../../index.css"
import { CartEmpty } from "./cart-empty"
import styled from "styled-components"
import { CartItens } from "./cart-itens"

export const Cart = () => {
    return (
        <Div>
            <h2>You Cart ({"0"})</h2>
            {/* <CartEmpty /> */}
            <CartItens />
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

