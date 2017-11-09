import { connect } from 'react-redux'
import CommentList from '../../components/comment-page/comment-list'
import {deleteComment} from "../../actions/comment-action";

const mapStateToProps = (state) => ({
    comments: state.addComments
});

const mapDispatchToProps = (dispatch)=>{
    return {
        onDeleteComment: (commentIndex) => {
            dispatch(deleteComment(commentIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)