import {createReducer} from "@reduxjs/toolkit";
import destiny from "../assets/destiny.jpg";
import halo from "../assets/halo-5-guardians-game-wallpaper_1680x1050.jpg";
import dishonored from "../assets/Dishonored.jpg";
import callofduty from "../assets/Call_Of_Duty.jpg";

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
        {id: 1, name: "Destiny", price: 259, description: "Крутая дестини", rating: 5, image: destiny},
        {id: 2, name: "Halo 5", price: 349, description: "Новая хало", rating: 5, image: halo},
        {id: 3, name: "Dishonored", price: 449, description: "Классический dishonored", rating: 5, image: dishonored},
        {id: 4, name: "Call of Duty", price: 549, description: "Неотразимый call of duty", rating: 5, image: callofduty},
    ],
}


export default createReducer(initialState,
    {


    }
)