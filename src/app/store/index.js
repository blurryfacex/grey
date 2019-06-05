import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

let middleware = [ thunk ]

if (process.env.NODE_ENV == 'development' && typeof __SERVER__ == 'undefined' || process.env.NODE_ENV == 'development' && typeof __SERVER__ != 'undefined' && !__SERVER__
) {
  middleware.push(createLogger())
}

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  )

  return store
}