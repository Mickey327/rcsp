import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    companies: [],
    selectedCategory: {},
    selectedCompany: {},
    products: [],
}

const productsSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers : {
        setSelectedCategory(state, action) {
            if (state.selectedCategory.id !== action.payload.id) {
                state.selectedCategory = action.payload
            } else {
                state.selectedCategory = {}
            }
        },
        setSelectedCompany(state, action) {
            if (state.selectedCompany.id !== action.payload.id) {
                state.selectedCompany = action.payload
            } else {
                state.selectedCompany = {}
            }
        },
        setCategories(state, action) {
            state.categories = action.payload
        },
        setCompanies(state, action) {
            state.companies = action.payload
        },
        setProducts(state, action) {
            state.products = action.payload
        }
    }
})

export default productsSlice.reducer
export const { setProducts, setCompanies, setCategories ,setSelectedCategory, setSelectedCompany} = productsSlice.actions