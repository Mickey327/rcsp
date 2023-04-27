import {createSlice} from "@reduxjs/toolkit";
//TODO: Rework after backend finished, to make single Auth reducer
const usersSlice = createSlice({
    name: "users",
    initialState: {
        isAuth: false,
        count: 0,
        role: "guest",
    },
    reducers : {
        auth(state) {
            state.isAuth = true
            state.role = "user"
        },
        authAdmin(state) {
            state.isAuth = true
            state.role = "admin"
        },
        unAuth(state) {
            state.isAuth = false
            state.role = "guest"
        },
        increment(state) {
            state.count++
        },
    }
})

export default usersSlice.reducer
export const {auth, unAuth, increment, authAdmin} = usersSlice.actions