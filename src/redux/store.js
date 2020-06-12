import {combineReducers, createStore} from 'redux';
import reducer from './reducer'
import subscriber from './subscriber'

const rootReducer = combineReducers({
    reducer,
    subscriber
})

export default createStore(rootReducer)