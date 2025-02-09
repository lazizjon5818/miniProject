import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

interface WishlistState {
  items: Product[];
  loading: boolean;
}

const initialState: WishlistState = {
  items: JSON.parse(localStorage.getItem("wishlist") || "[]"),
  loading: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        state.loading = false;
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    setWishlist: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.items)); 
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist,setLoading} =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
