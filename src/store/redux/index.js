import { combineReducers } from 'redux';
import customization from './reducers/customization';
import theme from './reducers/theme';

const rootReducer = combineReducers({ ...theme, customization });

export default rootReducer;
