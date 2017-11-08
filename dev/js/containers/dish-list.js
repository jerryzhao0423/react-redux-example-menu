import DishList from '../components/dish-list';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectDish} from "../actions/index";
require('../../scss/style.scss');

function mapStateToProps(state) {
    return{
        restaurant: state.restaurant
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectDish: selectDish}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DishList);