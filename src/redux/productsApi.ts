import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string; // image o'rniga
    rating: number; // rating.rate dan olinadi
}

interface ProductsResponse {
    products: Product[];
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, number>({
            query: (limit) => `products?limit=${limit}`,
            transformResponse: (response: any): ProductsResponse => ({
                products: response.products.map((product: any) => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail, // image maydoni o'rniga
                    rating: product.rating, // rating obyektidan olindi
                }))
            })
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;
