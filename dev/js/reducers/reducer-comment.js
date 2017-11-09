let initialState=[];


const addComments = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log(action.id);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    rating:action.rating,
                    createdTime: +new Date()
                }
            ];
        case 'DELETE_COMMENT':
            return [...state.slice(0,action.commentIndex), ...state.slice(action.commentIndex + 1)]
        default:
            return state
    }
};

export default addComments