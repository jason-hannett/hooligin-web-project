const initialState = {
    email: ''
}

const SET_SUBSCRIBER = 'SET_SUBSCRIBER'

export const setSubscriberInfo = (email) => {
    return {
        type: SET_SUBSCRIBER,
        payload: {email}
    }
}

export default function subscriberInfo(state = initialState, action){
    switch(action.type){
        case SET_SUBSCRIBER:
            return{...state, ...action.payload};
        default:
            return state;
    }        
}