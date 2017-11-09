const initialState={
    dishDetail:[]
};
export function selectedDishes  (state = initialState.dishDetail, action)  {
    let num=1;
    switch (action.type) {
        case 'ADD_DISH':
            return [
                ...state,
                {
                    id: action.id,
                    dish: action.dish,
                    price:action.price,
                    quantity:num,
                    subtotal:action.price
                }
            ];
        case 'ON_INC':
            let indexId = action.id;
            console.log(indexId);
            state[indexId].quantity = action.quantity;
            state[indexId].subtotal=state[indexId].price * action.quantity;
            console.log(state);
            return state;
        case 'ON_DEC':
            let decId = action.id;
            console.log(decId);
            state[decId].quantity = action.quantity;
            state[indexId].subtotal=state[indexId].price * action.quantity;
            return state;
        case 'REMOVE':
            console.log(state);
            return [...state.slice(0,action.id), ...state.slice(action.id+ 1)];
        default:
            return state
    }
};
