import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1
}

const PaginateSlice = createSlice({
    name: 'paginate',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
    },
});

export const {
    setCurrentPage
} = PaginateSlice.actions;
export default PaginateSlice.reducer