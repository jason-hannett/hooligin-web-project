import {combineReducers, createStore} from 'redux';
import reducer from './reducer'
import subscriber from './subscriber'
import product from './product'
import songs from './songs'

const rootReducer = combineReducers({
    reducer,
    subscriber,
    product,
    songs
})

export default createStore(rootReducer)