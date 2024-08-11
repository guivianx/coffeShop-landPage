import svgCart from "../../../assets/images/icon-add-to-cart.svg"
import { FunctionComponent } from "react"
import './index.css'

interface ButtonProps {
    addToCart: Function,
    data: object
}

export const ButtonAddToCart: FunctionComponent<ButtonProps> = ({  addToCart, data}) => {
    return (
        <button className="button-add-to-cart" onClick={() => { addToCart(data) }}>
            <img src={svgCart} alt="delivy" />
            <p className="txt-add-to-cart">Add to Cart</p>
        </button>
    )
}