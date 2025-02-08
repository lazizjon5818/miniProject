import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string; 
    rating: number;
}

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

export const { useGetProductsQuery } = productsApi;
