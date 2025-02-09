import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product,ProductDetail,LoginResponse,LoginRequest } from'../types/index'



interface ProductsResponse {
    products: Product[];
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 
        import.meta.env.VITE_BASE_URL,
     }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, number>({
            query: (limit) => `products?limit=${limit}`,
            transformResponse: (response: any): ProductsResponse => ({
                products: response.products.map((product: any) => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail, 
                    rating: product.rating, 
                }))
            })
        }),
    }),
});



export const productDetailApi = createApi({
    reducerPath: "productDetailApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    endpoints: (builder) => ({
        getProductDetail: builder.query<ProductDetail, number>({
            query: (id) => `products/${id}`,
            transformResponse: (response: any): ProductDetail => ({
                id: response.id,
                title: response.title,
                price: response.price,
                description: response.description,
                images: response.images,
                rating: response.rating,
                stock: response.stock,
                brand: response.brand,
                category: response.category,
            }),
        }),
    }),
});


export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: any): LoginResponse => {
                console.log('API response:', response);
                return response; 
            },
        }),
    }),
});


 
export const { useLoginMutation } = loginApi;
export const { useGetProductsQuery } = productsApi;
export const { useGetProductDetailQuery } = productDetailApi;
