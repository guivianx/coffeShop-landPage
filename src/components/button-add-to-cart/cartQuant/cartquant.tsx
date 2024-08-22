import { FunctionComponent } from "react";
import svgIncrement from '../../../assets/images/icon-increment-quantity.svg'
import svgDecrement from '../../../assets/images/icon-decrement-quantity.svg'
import './index.css'

interface ButtonProps {
    itemQuantity: number,
    setQuantity: Function,
    addToCart: Function,
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
    }
}

export const ButtonQuantity: FunctionComponent<ButtonProps> = ({ itemQuantity, setQuantity, addToCart, data }) => {
    return (
        <button className='button-count-quantity'>

            <img 
                onClick={() => { itemQuantity != 1 ? setQuantity(itemQuantity - 1) : null ; addToCart(data, false) }} 
            
                className={itemQuantity > 1 ? 'decrement' : 'disable'} src={svgDecrement} alt="delivy" 
            />

            <p className="quantityProduct">{itemQuantity}</p>

            <img onClick={() => {setQuantity(itemQuantity + 1) ; addToCart(data, true)}} className="increment" src={svgIncrement} alt="delivy" />
        </button>

    )
}