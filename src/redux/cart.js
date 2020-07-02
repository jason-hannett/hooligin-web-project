const initialState = {
    cart: [{name: '',
    price: undefined,
    description: '',
    size: '',
    qty: undefined,
    total: undefined}],   
}

const GET_CART = 'GET_CART'

export const setCart = (arr) => {
    return {
        type: GET_CART,
        payload: arr
    }
}

export default function cart(state = initialState, action){
    switch(action.type){
        case GET_CART:
            return{...state, cart: action.payload};
        default:
            return state;
    }        
}