
import { createStore } from 'redux'

let initialState = {
    basket: [],
    wish: [],
    user: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, basket: [...state.basket, action.items] }
        case "ADD_TO_WISH":
            return { ...state, wish: [...state.wish, action.items] }
        case "REMOVE_CART":
            let newBasket = [...state.basket]
            let index = newBasket.findIndex(item => item.id === action.id)
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`can't remove product id ${action.id} as it is not in baskets!`);
            }
            return { ...state, basket: newBasket }
        case "REMOVE_WISH":
            let newWish = [...state.wish]
            let wishIndex = newWish.findIndex(item => item.id === action.id)
            if (wishIndex >= 0) {
                newWish.splice(wishIndex, 1)
            }
            else {
                console.warn(`can't remove product id ${action.id} as it is not in baskets!`);
            }
            return { ...state, wish: newWish }
        case "SET_USER":
            return { ...state, user: action.user }
        case "EMPTY_BASKET":
            return { ...state, basket: [] }
        default:
            return state;
    }
}

let FlipkartStore = createStore(reducer);

export default FlipkartStore;