import {createStore, combineReducers, applyMiddleware} from 'redux'
import { thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { prodcuctListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: prodcuctListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartIems : cartItemsFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store