import { FunctionComponent, useState } from "react";
import { addToCart } from "../action/add-to-cart";
import { ButtonAddToCart } from "../button-add-to-cart/addToCart/addToCart";
import { ButtonQuantity } from "../button-add-to-cart/cartQuant/cartquant";

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
    }
}

export const CardItem: FunctionComponent<CardItemProps> = ({ data }) => {

    const [border, setBorder] = useState(false)

    const buttonClick = () => {
        addToCart(data)
        setBorder(true)        
    }

    return (
        <li>
            <img className={`product-image${border ? '-border' : ''}`} src={data.image.desktop} alt={data.name} />

            {border ? <ButtonQuantity/> : <ButtonAddToCart buttonClick={buttonClick}/>}

            <p className="category">{data.category}</p>

            <p className="name">{data.name}</p>

            <p className="price">${data.price}</p>

        </li>
    )
};