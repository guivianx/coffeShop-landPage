import { FunctionComponent } from "react"
import svg from "../../../assets/images/icon-remove-item.svg"
import './index.css'

interface ItemProps {
    product: {
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
    id: number,
    removeItem: Function,

}

export const Item: FunctionComponent<ItemProps> = ({ product, id, removeItem }) => {

    const price = product.price.toFixed(2)

    const totalValue = product.price * product.quantity
    
    return (
        <li >
            <div className="item-cart">

                <div className="item-cart-info">

                    <p className="product-name">{product.name}</p>

                    <div className="item-cart-details"> 

                        <p className="item-quantity">{product.quantity}x</p>

                        <p className="item-price">@ ${price}</p>

                        <p className="item-price-total">${totalValue.toFixed(2)} </p>

                    </div>

                </div>

                <img onClick={() => { removeItem(id) }} className="remove-item" src={svg} alt="remove" />

            </div>
        </li>
    )
}