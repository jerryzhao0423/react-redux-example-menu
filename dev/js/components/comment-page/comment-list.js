import React, {Component} from 'react';

class CommentList extends Component{
    constructor(props) {
        super(props);
        this.handleDel = this.handleDel.bind(this);
    }
    handleDel(e) {
        const delindex = e.target.getAttribute('data-key');
        this.props.onDel(delindex);
    }

    render() {
    let number = 0;
    this.props.commentList.map((item) => {
        if (item.comment) {
            number += 1;
        }
        return true;
    });
    console.log(this.props.commentList)
    return (
        <div>
            <ul>{
                this.props.commentList.map((item, i) => {
                    if (item.comment) {
                        return (
                            <li key={i}>
                                <p>{item.comment}</p>
                                <footer data-key={i} onClick={this.handleDel}>Remove</footer>
                            </li>
                        );
                    }
                    return true;
                })
            }
            </ul>
        </div>
    );
}
}

export default CommentList
/*    render(){
        return(
        <div>
            <li>{this.props.commentList}</li>
        </div>
        )
    }
}*/