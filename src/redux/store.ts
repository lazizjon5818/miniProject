import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./wishlistSlice";
import { loginApi, productDetailApi, productsApi } from "./productsApi";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, productDetailApi.middleware, loginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
