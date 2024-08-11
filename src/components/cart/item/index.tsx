import { FunctionComponent } from "react"
import svg from "../../../assets/images/icon-remove-item.svg"
import './index.css'

interface Props {
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
    },
    id: number,
    removeItem: Function,

}

export const Item: FunctionComponent<Props> = ({ product, id, removeItem }) => {

    return (
        <li >
            <div className="item-cart">
                <div className="item-cart-info">
                    <p className="product-name">{product.name}</p>
                    <div className="item-cart-details"> 
                        <p className="item-quantity">1x</p>
                        <p className="item-price">@ ${product.price} </p>
                        <p className="item-price-total">$total </p>
                    </div>
                </div>
                <img onClick={() => {removeItem(id)}} className="icon-remove" src={svg} alt="remove" />
            </div>
        </li>
    )
}