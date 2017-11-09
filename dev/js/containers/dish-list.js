import DishList from '../components/dish-list'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {addToCart} from "../actions/index"

function mapStateToProps(state) {
    return{
        restaurant: state.restaurant
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addToCart},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DishList);