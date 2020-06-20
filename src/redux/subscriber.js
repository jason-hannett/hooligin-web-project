const initialState = {
    email: ''
}

const SET_SUBSCRIBER_INFO = 'SET_SUBSCRIBER_INFO'

export const setSubscriberInfo = (email) => {
    return {
        type: SET_SUBSCRIBER_INFO,
        payload: {email}
    }
}

export default function subscriberInfo(state = initialState, action){
    switch(action.type){
        case SET_SUBSCRIBER_INFO:
            return{...state, ...action.payload};
        default:
            return state;
    }        
}