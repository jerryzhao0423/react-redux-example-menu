let nextDishId=0;
export const selectDish = (dish) => {
 //   console.log(dish)
    return {
        type: "DISH_SELECTED",
        id: nextDishId++,
        dish
    }
};


