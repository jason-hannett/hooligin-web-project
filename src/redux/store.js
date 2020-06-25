import {combineReducers, createStore} from 'redux';
import reducer from './reducer'
import subscriber from './subscriber'
import product from './product'
import songs from './songs'
import cart from './cart'

const rootReducer = combineReducers({
    reducer,
    subscriber,
    product,
    songs,
    cart
})

export default createStore(rootReducer)