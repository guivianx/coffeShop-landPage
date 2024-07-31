import productsJson from "../../json/data.json"
import { FunctionComponent } from "react";
import { CardItem } from "../item";

export const ListItens: FunctionComponent = () => {
    return (
        <div>
            <h1>Desserts</h1>
            <ul>
                {productsJson.data.map((item, index) => (
                    <CardItem key={index} data={item} />
                ))}
            </ul>
        </div>
    )
}