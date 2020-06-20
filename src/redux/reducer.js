const initialState = {
    email: '',
    id: 0
}

const SET_USER_INFO = 'SET_USER_INFO'
const LOGOUT_USER = 'LOGOUT_USER'

export const setUserInfo = (id, email) => {
    console.log(email)
    console.log(id)
    return {
        type: SET_USER_INFO,
        payload: {id, email}
    }
}


export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: {}
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_USER_INFO:
            console.log(action.payload)
            return {...state, ...action.payload};
        case LOGOUT_USER:
            return {...state, user: action.payload};
        default: 
            return state;
    }
}