import { FunctionComponent } from "react";
import svgCart from "../../assets/images/icon-add-to-cart.svg"

interface ButtonProps {
    children: string
    onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({children}) => {
    return (
        <button className="button-add-to-cart">
        <img src={svgCart} alt="delivy" />
        {children}</button>
    )
}