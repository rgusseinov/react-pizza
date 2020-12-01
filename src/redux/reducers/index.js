import {combineReducers} from 'redux'
import filterReducer from './filters'
import pizzas from './pizzas'
import cart from './cart'

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzas,
    cart: cart
})

export default rootReducer