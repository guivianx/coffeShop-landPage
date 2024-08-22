import { CartEmpty } from "./cart-empty"
import { CartItens } from "./cart-itens"
import { FunctionComponent } from "react"
import './index.css'
import "../../index.css"


export const Cart: FunctionComponent<any> = ({ cartItems, removeItem, setConfirmOrder }) => {  
      
    let quantityCart: number = cartItems.map((item: any) => item.quantity).reduce((a: any, b: any) => a + b, 0)    
        
    return (
        <div className="div-cart">

            <h2 className="cart-quantity">You Cart ({quantityCart})</h2>

            { quantityCart === 0 ? 
                <CartEmpty /> 
                : 
                <CartItens item={cartItems} removeItem={removeItem} setConfirmOrder={setConfirmOrder} /> 
            }       

        </div>
    )
}


