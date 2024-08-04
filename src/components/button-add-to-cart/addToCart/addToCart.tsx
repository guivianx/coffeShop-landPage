import svgCart from "../../../assets/images/icon-add-to-cart.svg"
import { FunctionComponent } from "react"

interface ButtonProps {
    buttonClick: Function
}

export const ButtonAddToCart: FunctionComponent<ButtonProps> = ({ buttonClick }) => {
    return (
        <button className="button-add-to-cart" onClick={() => buttonClick()}>
            <img src={svgCart} alt="delivy" />
            Add to cart
        </button>
    )
}