import {createSlice} from "@reduxjs/toolkit";
//TODO: Rework after backend finished, to make single Auth reducer
const usersSlice = createSlice({
    name: "users",
    initialState: {
        id: 0,
        email: "",
        isAuth: false,
        role: "guest",
        order: {},
    },
    reducers : {
        auth(state) {
            state.isAuth = true
        },
        setUserRole(state, action) {
            state.role = action.payload
        },
        setUserEmail(state, action) {
            state.email = action.payload
        },
        setUserId(state, action) {
            state.id = action.payload
        },
        unAuth(state) {
            state.email = ""
            state.isAuth = false
            state.role = "guest"
        },
        setOrder(state, action) {
            state.order = action.payload
        },

    }
})

export default usersSlice.reducer
export const {setOrder, setUserId, unAuth, auth, setUserRole, setUserEmail} = usersSlice.actions