const initialState = {
    name: '',
    image: '',
    description: '',
    price: undefined,
    id: undefined
}

const SET_PRODUCT_INFO = 'SET_PRODUCT_INFO'

export const setProductInfo = (id, name, image, description, price) => {
    return {
        type: SET_PRODUCT_INFO,
        payload: {id, name, image, description, price}
    }
}

export default function productInfo(state = initialState, action){
    switch(action.type){
        case SET_PRODUCT_INFO:
            return{...state, ...action.payload};
        default:
            return state;
    }        
}