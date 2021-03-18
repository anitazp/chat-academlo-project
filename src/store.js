import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { chatReducer } from './redux/reducer/reducer'
import { loginAndSignup } from './redux/reducer/datsReducer'

const rootReducer = combineReducers({
    chat: chatReducer,
    datsMethod: loginAndSignup,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    
export const generateStore = () => {
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk.withExtraArgument()) ))
    return store
}

