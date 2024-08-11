import { FunctionComponent } from "react";
import { ButtonAddToCart } from "../button-add-to-cart/addToCart/addToCart";
import { ButtonQuantity } from "../button-add-to-cart/cartQuant/cartquant";
import './index.css'

interface CardItemProps {
    data: {
        image: {
            thumbnail: string,
            mobile: string,
            tablet: string,
            desktop: string,
        },
        name: string,
        category: string,
        price: number
    },
    addToCart: Function,
    cartItems: object[],
}


export const CardItem: FunctionComponent<CardItemProps> = ({ data, addToCart, cartItems }) => {

    const selected = cartItems.some((item: any) => item.name === data.name)

    return (
        <li className="item">
            <img className={selected ? 'selected' : 'Unselected'} src={data.image.desktop} alt={data.name} />

            {selected ? <ButtonQuantity /> : <ButtonAddToCart addToCart={addToCart} data={data} />}

            <p className="category">{data.category}</p>

            <p className="name">{data.name}</p>

            <p className="price">${data.price}</p>
        </li>
    )
}