import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './comment-input'

class CommentList extends Component{
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render(){
        const {comments}=this.props;
        return(
            <div>
                {comments.map((comment,i) =>
                    <Comment key={comment.id}
                             index={i}
                             onDeleteComment={this.handleDeleteComment.bind(this)}
                             {...comment}
                    />)}
            </div>
        )
    }
}


CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default CommentList
