import styled from "styled-components"
import "../../index.css"
import svgCake from "../../assets/images/illustration-empty-cart.svg"

export const Cart = () => {
    return (
        <Div>
            <h2>You Cart ({"0"})</h2>
            <img src={svgCake} alt="delivy" />
            <p className="cart-empty">You added items will appear here</p>
        </Div>
    )
}

const Div = styled.div`
    padding: 20px;
    background-color: var(--Rose-50);
    border-radius: 10px;
    width: 400px;
    max-height: 345px;
    

    

`