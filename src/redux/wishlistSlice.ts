import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.items));  
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items)); 
    },
    setWishlist: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
