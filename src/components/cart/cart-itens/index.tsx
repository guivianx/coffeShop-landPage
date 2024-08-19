import { FunctionComponent } from "react"
import svg from "../../../assets/images/icon-carbon-neutral.svg"
import { Item } from "../item"
import './index.css'

interface CartItensProps {
    item: {
        image: {
            thumbnail: string,
            mobile: string,
            tablet: string,
            desktop: string,
        },
        name: string,
        category: string,
        price: number,
        index: number,
        quantity: number,
        map: Function
    },
    removeItem: Function,
    setConfirmOrder: Function
}

export const CartItens: FunctionComponent<CartItensProps> = ({ item, removeItem, setConfirmOrder }) => {

    return (
        <div className="divmain">

            <ul>
                {item.map((item: any, index: number) => (<Item product={item} key={index} id={index} removeItem={removeItem} />))}
            </ul>

            <div className="div-total-order">

                <p className="order-total">Order total</p>

                <h3 className="total-price">${item.map((item: any) => item.price * item.quantity).reduce((a: any, b: any) => a + b, 0).toFixed(2)}</ h3>

            </div>

            <div className="div-message">

                <img src={svg} alt="carbon-neutral" />

                This is a<strong>carbon-neutral</strong>delivery

            </div>

            <button className="button-cart" onClick={() => { setConfirmOrder(true) }}>Confirm order</button>

        </div>
    )
}