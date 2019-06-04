import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

let middleware = [thunk]

if (process.env.NODE_ENV == 'development' && __CLIENT__) middleware.push(createLogger)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose)
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}