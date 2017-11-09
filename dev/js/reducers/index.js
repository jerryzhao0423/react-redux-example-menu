import {combineReducers} from 'redux';
import {selectedDishes} from './reducer-dishlist';
import Restaurant from './reducer-list';
import addComments from './reducer-comment';


const allReducers = combineReducers({
    restaurant: Restaurant,
    selectedDishes,
    addComments,
});

export default allReducers;
