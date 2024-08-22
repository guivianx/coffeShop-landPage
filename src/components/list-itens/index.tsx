import productsJson from "../../json/data.json"
import { FunctionComponent } from "react";
import { CardItem } from "../item";
import './index.css'

interface ButtonProps {
    addToCart: Function,
    cartItems: object[],
}

export const ListItens: FunctionComponent<ButtonProps> = ({ addToCart, cartItems }) => {
    return (
        <div>

            <h1>Desserts</h1>

            <ul className="list-products">

                { productsJson.data.map((item, index) => ( <CardItem key={index} data={item} addToCart={addToCart} cartItems={cartItems} /> )) }

            </ul>

        </div>
    )
}