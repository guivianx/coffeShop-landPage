import styled from "styled-components"
import svg from "../../../assets/images/icon-carbon-neutral.svg"

export const CartItens = () => {
    return (
        <DivCart>
            

            <DivOrderTotal>
                <P>Order total</P>
                <h3>${}</h3>
            </DivOrderTotal>
            <DivMessage> 
                <img src={svg} alt="carbon-neutral" /> 
                This is a<strong>carbon-neutral</strong>delivery
            </DivMessage>
            <Button>Confirm order</Button>
        </DivCart>
    )
}


const DivOrderTotal = styled.div`    
    display: flex; 
    justify-content: space-between;
    align-items: center;

` 

const P = styled.p`
    color: var(--Rose-900);
`

const DivMessage =styled.div`
    padding: 15px;
    background-color: var(--Rose-100);
    border-radius: 10px;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    gap: 10px;
    color: var(--Rose-900);

`


const DivCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

const Button = styled.button`
    background-color: var(--Red);
    padding: 20px 0px;
    color: var(--Rose-50);
    border-radius: 50px;
    font-weight: var(--Weight600);
    cursor: pointer;
`