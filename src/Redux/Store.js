import {applyMiddleware, combineReducers, createStore} from 'redux';
import TableReducer from "./Table-reducer";
import ThunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  tableReducer: TableReducer
});
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store