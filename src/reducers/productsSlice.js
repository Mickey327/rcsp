import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {id: 1, name: "Shooter"},
        {id: 2, name: "Strategy"},
    ],
    companies: [
        {id: 1, name: "Blizzard"},
        {id: 2, name: "Activision"},
    ],
    products: [
        //TODO: ADD PICTURES
        {id: 1, name: "Destiny", price: 259, description: "Крутая дестини", rating: 5},
        {id: 2, name: "Halo 5", price: 349, description: "Новая хало", rating: 5},
        {id: 3, name: "Dishonored", price: 449, description: "Классический dishonored", rating: 5},
        {id: 4, name: "Call of Duty", price: 549, description: "Неотразимый call of duty", rating: 5},
    ],
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers : {

    }
})

export default productsSlice.reducer
//export const {} = productsSlice.actions