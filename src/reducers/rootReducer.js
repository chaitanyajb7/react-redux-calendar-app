import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import calenderReducer from './calenderReducer';
export default combineReducers({
  calenderReducer,
  form: formReducer
});
