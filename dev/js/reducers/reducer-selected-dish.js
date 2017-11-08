/*export default function (state=null, action){
    switch (action.type) {
        case "DISH_SELECTED":
            return action.payload;
            break;
    }
    return state
};*/
const addedDish=(state=[],action)=>{
    switch (action.type) {
        case "DISH_SELECTED":
            return [
                ...state,
                {
                    dish:action.dish,
                }];
        default:
            return state
    }
};
export default addedDish