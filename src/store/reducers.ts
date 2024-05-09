import { combineReducers } from 'redux'
import listReducer from '../pages/list/redux/slice'

export default combineReducers({
  list: listReducer,
})
