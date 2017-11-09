let indexNum = 0;
export const addToCart = (dish, price) =>{
    //console.log(id,dish,price);
    return {
    type: "ADD_DISH",
    id: indexNum++,
    dish: dish,
    price: price
}
};

export const onIncrease = (id, quantity) =>{
    //console.log("add one");
    return{
        type:"ON_INC",
        id:id,
        quantity: quantity+1
    }
};
export const onDecrease = (id, quantity) =>{
    return {
        type:"ON_DEC",
        id:id,
        quantity: quantity-1
    }
};
export const onRemove=(id)=>{
    return{
        type:"REMOVE",
        id:id
    }
}