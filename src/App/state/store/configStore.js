import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from "./rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)
    return createStore(rootReducer, preloadedState, composedEnhancers)
}
