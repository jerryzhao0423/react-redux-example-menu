import {combineReducers} from 'redux';
import addedDish from './reducer-selected-dish';
import Restaurant from './reducer-list';
import commentList from './reducer-comment';
import {routerReducer} from 'react-router-redux'


const allReducers = combineReducers({
    restaurant: Restaurant,
    addedDish,
    commentList,
    routerReducer
});

export default allReducers;
