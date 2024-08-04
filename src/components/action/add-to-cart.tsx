export function addToCart(product: object) {
    console.log(product)
    const action = {
        type: "ADD_TO_CART",
        payload: product
    }
    return action
}

export function removeFromCart(product: object) {
    const action = {
        type: "REMOVE_FROM_CART",
        payload: product
    }
    return action
}   