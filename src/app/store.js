import {
    configureStore
} from '@reduxjs/toolkit'
import BasketSlice from './features/BasketSlice'
import {
    dummyDataApi
} from './api/dummyDataApi'
import BannerSlice from './features/BannerSlice'
import FavoriteSlice from './features/FavoriteSlice'
import PaginateSlice from './features/PaginateSlice'


export const store = configureStore({
    reducer: {
        paginate: PaginateSlice,
        basket: BasketSlice,
        categoryBanner: BannerSlice,
        favorite: FavoriteSlice,
        [dummyDataApi.reducerPath]: dummyDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dummyDataApi.middleware),
})