import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isAuth: false,
        count: 0,
    },
    reducers : {
        auth(state) {
            state.isAuth = true
        },
        unAuth(state) {
            state.isAuth = false
        },
        increment(state) {
            state.count++
        },
    }
})

export default usersSlice.reducer
export const {auth, unAuth, increment} = usersSlice.actions