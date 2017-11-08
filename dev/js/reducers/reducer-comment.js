import {ADD_COMMENT, DELETE_COMMENT,} from '../actions/comment-action';

let comments;
(() => {
    if (localStorage.comments) {
        comments = JSON.parse(localStorage.comments);
    } else {
        comments = [];
    }
})();
const commentList= (state=comments, action)=>{
    switch (action.type){
        case ADD_COMMENT:
            return [
                ...state,
                {comment: action.text}];
        case DELETE_COMMENT:
            localStorage.setItem('comments', JSON.stringify([
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0, action.index),
                ...state.slice(parseInt(action.index) + 1)
            ];
        default:
            return state;
    }
};

export default commentList;
