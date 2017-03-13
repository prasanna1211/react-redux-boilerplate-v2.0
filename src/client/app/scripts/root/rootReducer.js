/*
 *  Root Reducer - Include reducers of all modules here
 */
import { combineReducers } from 'redux-immutable';

const defaultReducer = () => 'default';

export default combineReducers({
  defaultReducer,
});
