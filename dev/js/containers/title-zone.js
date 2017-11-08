import TitleZone from '../components/title-zone';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(TitleZone);