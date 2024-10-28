import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("basket")) || [],
    countBasket: localStorage.getItem("countBasket") || 0,
}

export const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const itemExtists = state.value.find(item => item.id ===  action.payload.id)
            if(itemExtists){
                state.value = state.value.filter(item => item.id !== action.payload.id)
            }else{
                state.value.push(action.payload)
            }
            
            localStorage.setItem("basket", JSON.stringify(state.value))
            state.countBasket = state.value.length
            localStorage.setItem("countBasket", state.countBasket)
        },
        removeFromBasket: (state, action) => {
            state.value = state
                .value
                .filter((item) => item.id !== action.payload)
            localStorage.setItem("basket", JSON.stringify(state.value))
            state.countBasket = state.value.length
            localStorage.setItem("countBasket", state.countBasket)
        }
    }
})

export const {
    removeFromBasket,
    addToBasket
} = BasketSlice.actions

export default BasketSlice.reducer