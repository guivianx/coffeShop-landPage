import { FunctionComponent } from 'react'
import svg from '../../assets/images/icon-order-confirmed.svg'
import './index.css'

interface CardConfirmProps {
    cartItems: object[]
}

export const CardConfirm: FunctionComponent<CardConfirmProps> = ({ cartItems }) => {
    
    return (
        <>
            <div className='overlay'>

                <div className="card-confirm">

                    <img src={svg} alt="carbon-neutral" />

                    <h1>Order Confirmed</h1>

                    <p className='text-card'>We hope you enjoy your food!</p>

                    <div>

                        <ul className='list-card-confirm'>

                            {cartItems.map((item: any, index: number) => (<li key={index} className='item-card-confirm'>

                                <div className='card-confirm-info'>

                                    <img src={item.image.thumbnail} className='img-card-confirm' alt="img" />

                                    <div>

                                        <p className='item-name-card-confirm'>{item.name}</p>

                                        <article className='article-card-confirm'>

                                            <p className='quantity-card-confirm'>{item.quantity}x</p>

                                            <p className='price-card-confirm'>@ ${item.price.toFixed(2)}</p>

                                        </article>



                                    </div>

                                </div>

                                <h4 className='total-quantity-card-confirm'>${(item.price * item.quantity).toFixed(2)}</h4>

                            </li>))}

                            <section className='order-total-card-confirm'>

                                <p>Order Total</p>

                                <h3>${cartItems.map((item: any) => item.price * item.quantity).reduce((a: any, b: any) => a + b, 0).toFixed(2)}</h3>

                            </section>

                        </ul>

                    </div>

                    <button className='button-card-confirm' onClick={() => window.location.reload()}>Start New Order</button>
                </div>
            </div>
        </>
    )
}