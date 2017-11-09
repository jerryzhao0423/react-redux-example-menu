let nextCommentId = 0;
export const addComment = (text,rating) => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    text: text,
    rating:rating
});

export function deleteComment(commentIndex) {
    console.log("deleted!");
    return {
        type: 'DELETE_COMMENT',
        commentIndex,
    };
}
