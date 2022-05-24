import { combineReducers } from 'redux';
import { newsReducer } from './Reducers';

export const allReducers = combineReducers({
	news: newsReducer,
});