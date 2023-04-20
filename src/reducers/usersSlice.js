import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        isAuth: false,
    },
    reducers : {
        auth(state) {
            state.isAuth = true
        },
        unAuth(state) {
            state.isAuth = false
        }
    }
})

export default usersSlice.reducer
export const {auth, unAuth} = usersSlice.actions