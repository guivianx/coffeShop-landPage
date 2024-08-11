import { FunctionComponent, useState } from "react";
import svgIncrement from '../../../assets/images/icon-increment-quantity.svg'
import svgDecrement from '../../../assets/images/icon-decrement-quantity.svg'
import './index.css'


export const ButtonQuantity: FunctionComponent = () => {

    const [itemQuantity, setItemQuantity] = useState(1)

    return (
        <button className='button-count-quantity'>

            <img onClick={() => { itemQuantity === 1 ? '' : setItemQuantity(itemQuantity - 1) } } className={itemQuantity > 1 ? 'decrement' : 'disable'} src={svgDecrement} alt="delivy" />

            <p className="quantityProduct">{itemQuantity}</p>

            <img onClick={() => setItemQuantity(itemQuantity + 1)} className="increment" src={svgIncrement} alt="delivy" />
        </button>

    )
}