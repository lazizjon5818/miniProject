import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    loading: boolean;
    error: string | null;
    isLoggedIn: boolean;
}

// Foydalanuvchi ma'lumotlarini olish (async thunk)
export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://dummyjson.com/user/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const data = await response.json();
            return {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address.address,
            };
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
        }
    }
);

const initialState: UserState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    loading: false,
    error: null,
    isLoggedIn: !!localStorage.getItem("token"),
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.isLoggedIn = false;
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.address = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.email = action.payload.email;
                state.address = action.payload.address;
                state.isLoggedIn = true;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
