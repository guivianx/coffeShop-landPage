import svgCake from "/images/illustration-empty-cart.svg"
import './index.css'

export const CartEmpty = () => {
    return (
        <div className="cart-empty-div">
            <img src={svgCake} alt="delivy"  className="img-empty"/>
            <p className="cart-empty">You added items will appear here</p>
        </div>
    )
}