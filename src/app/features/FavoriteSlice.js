import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("favorite")) || [],
    countFavorite: localStorage.getItem("countFavorite") || 0,
}

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.value.push(action.payload)
            localStorage.setItem("favorite", JSON.stringify(state.value))
            state.countFavorite = state.value.length
            localStorage.setItem("countFavorite", state.countFavorite)
        },
        removeFromFavorite: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload)
            localStorage.setItem("favorite", JSON.stringify(state.value))
            state.countFavorite = state.value.length 
            localStorage.setItem("countFavorite", state.countFavorite)
        }
    },
})

export const {
    addToFavorite,
    removeFromFavorite
} = FavoriteSlice.actions

export default FavoriteSlice.reducer