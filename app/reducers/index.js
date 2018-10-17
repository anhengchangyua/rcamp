import { combineReducers } from 'redux';
import home from './home';
import cover from './cover';
const rootReducer = combineReducers({
  home,
  cover
});

export default rootReducer;
