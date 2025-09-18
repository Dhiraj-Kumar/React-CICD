import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    username: 'Guest',
    users: []
}

export const getUsers = createAsyncThunk("app/user", async (_) => {
    const res = await fetch('https://dummyjson.com/users');
    const jsonData = await res.json();
    return jsonData.users;
})

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = "Guest";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action)=>{
            state.users = action.payload;
        })
    }
});

const appActions = appSlice.actions;
export default appSlice.reducer;
export { appActions };