const initialState = {
    id: undefined,
    song_image: '',
    type: '',
    title: '',
    spotify: '',
    apple: '',
    soundcloud: ''
}

const SET_SONG_INFO = 'SET_SONG_INFO'

export const setSongInfo = (song_image, type, title, spotify, apple, soundcloud) => {
    return {
        type: SET_SONG_INFO,
        payload: {song_image, type, title, spotify, apple, soundcloud}
    }
}

export default function songInfo(state = initialState, action){
    switch(action.type){
        case SET_SONG_INFO:
            return{...state, ...action.payload};
        default:
            return state;
    }        
}