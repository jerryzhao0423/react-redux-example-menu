import {connect} from 'react-redux';
import CategoryList from '../components/category-list';

function mapStateToProps(state) {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(CategoryList);