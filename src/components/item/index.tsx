import { FunctionComponent, useState } from "react";
import { ButtonAddToCart } from "../button-add-to-cart/addToCart/addToCart";
import { ButtonQuantity } from "../button-add-to-cart/cartQuant/cartquant";
import './index.css'

interface CardItemProps {
    data: {
        image: {
            thumbnail: string,
            desktop: string,
        },
        name: string,
        category: string,
        price: number,
        quantity: number
    },
    addToCart: Function,
    cartItems: object[],
}

export const CardItem: FunctionComponent<CardItemProps> = ({ data, addToCart, cartItems }) => {

    const selected = cartItems.some((item: any) => item.name === data.name)

    const [quantity, setQuantity] = useState(data.quantity)

    return (

        <li className="item">

            <img className={selected ? 'selected' : 'Unselected'} src={data.image.desktop} alt={data.name} />

            { selected ?
                <ButtonQuantity data={data} setQuantity={setQuantity} itemQuantity={quantity} addToCart={addToCart} />
                :
                <ButtonAddToCart addToCart={addToCart} data={data} />
            }

            <p className="category">{data.category}</p>

            <p className="name">{data.name}</p>

            <p className="price">${data.price.toFixed(2)}</p>
            
        </li>
    )
}