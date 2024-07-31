import { FunctionComponent } from "react";
import { Button } from "../button-add-to-cart"

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
    return (
        <li>
            <img className="product-image" src={data.image.desktop} alt={data.name} />
            <Button>Add to cart</Button>
            <p className="category">{data.category}</p>
            <p className="name">{data.name}</p>
            <p className="price">${data.price}</p>
        </li>
    )
};