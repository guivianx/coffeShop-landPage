import { FunctionComponent } from "react";
import svgIncrement from '../../../assets/images/icon-increment-quantity.svg'
import svgDecrement from '../../../assets/images/icon-decrement-quantity.svg'
import './index.css'

export const ButtonQuantity: FunctionComponent = () => {
    return (
        <button className='button-count-quantity'>
            <img className="button-count-decrement" src={svgDecrement} alt="delivy" />
            <p>4</p>
            <img className="button-count-increment" src={svgIncrement} alt="delivy" />
        </button>

    )
 }