export const ADD_COMMENT='ADD_COMMENT';
export const DELETE_COMMENT='DELETE_COMMENT';


export const addComment = (text) => {
    return (dispatch, getState) => {
        const state = getState();
        localStorage.setItem('comments',
            JSON.stringify([
                ...state.comments, {
                    comment: text
                }
            ])
        );
        setTimeout(() => {
            dispatch({
                type: ADD_COMMENT,
                text,
            });
        }, 2);
    };
};

export function deleteComment(index) {
    return {
        type: DELETE_COMMENT,
        index,
    };
}