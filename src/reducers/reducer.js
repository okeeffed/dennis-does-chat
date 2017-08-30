import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// reducer-import
import { HomeReducer } from '../components/home/HomeReducer';

export default combineReducers({
	// target
	HomeReducer: HomeReducer,
	routing: routerReducer
});
