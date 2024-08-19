import svgCart from "../../../assets/images/icon-add-to-cart.svg"
import { FunctionComponent } from "react"
import './index.css'

interface ButtonProps {
    data: {
        image: {
            thumbnail: string,
            mobile: string,
            tablet: string,
            desktop: string,
        },
        name: string,
        category: string,
        price: number,
        quantity: number
    },
    addToCart: Function
}

export const ButtonAddToCart: FunctionComponent<ButtonProps> = ({  addToCart, data}) => {    
    return (
        <button className="button-add-to-cart" onClick={() => { addToCart(data, true) }}>
            <img src={svgCart} alt="delivy" />
            <p className="txt-add-to-cart">Add to Cart</p>
        </button>
    )
}