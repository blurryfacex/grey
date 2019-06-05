import { combineReducers } from 'redux'
import merge from 'loadash/merge'


let _states = {}

for (let i in states) {
  _states[i] = merge({}, states[i](), {})
}

_states = JSON.stringify(_states)
export const initialStateJSON = _states
export default combineReducers(states)