import svgCake from "../../../assets/images/illustration-empty-cart.svg"
import styled from "styled-components"

export const CartEmpty = () => {
    return (
        <DivCart>
            <img src={svgCake} alt="delivy" />
            <p className="cart-empty">You added items will appear here</p>
        </DivCart>
    )
}

const DivCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    margin-top: 50px;

`