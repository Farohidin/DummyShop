import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyDataApi = createApi({
    reducerPath: 'dummyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getTotalProducts: builder.query({
            query: ({ category = "", searchParams = "", page= + 1}) => {
                const limit =12;
                if (category) {
                    return {
                        url: `/products/category/${category}`,
                        params:{
                            limit,
                            skip: (page -1 ) * limit,
                        }
                    }
                } else if (searchParams) {
                    return {
                        url: `/products/search`,
                        params: {
                            q: searchParams,
                            limit,
                            skip: (page - 1) * limit,
                        }
                    }
                } else {
                    return {
                        url: `/products`,
                        params: {
                            limit,
                            skip: (page - 1) * limit,
                            
                        }
                    }
                }
            },
        }),
        getSigleProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
       
        getCategoryList: builder.query({
            query: () => "/products/category-list",
        }),
    }),
});

export const { useGetTotalProductsQuery, useGetSigleProductQuery, useGetCategoryListQuery } = dummyDataApi;
