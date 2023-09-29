export const initialState = {
    basket: [
        {
            id: 12350,
            title:
                'Sony Bravia 195 cm (77 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-77A80L (Black)',
            price: '4,13,990',
            rating: 5,
            image: "https://m.media-amazon.com/images/I/81sFUK4Sv0L._SX466_.jpg",
        },
    ],
    user: null
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)


function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its in basket`
                );
            }
            return { ...state, basket: newBasket }
        default:
            return state;
    }
}

export default reducer;