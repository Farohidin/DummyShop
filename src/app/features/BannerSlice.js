import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    category: [],
}

export const BannerSlice = createSlice({
    name: 'categoryBanner',
    initialState,
    reducers: {
        changeCategoryBanner: (state, action) => {
            state.category = action.payload
        }
    },
})

export const {
    changeCategoryBanner
} = BannerSlice.actions
export const selectedBannerCategoryImg = (state) => state.categoryBanner.category;

export default BannerSlice.reducer