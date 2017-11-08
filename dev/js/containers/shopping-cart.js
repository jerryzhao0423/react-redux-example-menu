import ShoppingCart from '../components/shopping-cart';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        addDish: state.addedDish
    };
}

export default connect(mapStateToProps)(ShoppingCart);