import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: string | null;
}

const initialState: AuthState = {
  user: localStorage.getItem("Token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      localStorage.setItem("Token", action.payload);
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("Token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
