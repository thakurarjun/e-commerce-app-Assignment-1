import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null
};


const authSlicer = createSlice({
    name: "authUser",
    initialState,
    reducers : {
        loginSuccess: (state,action) => {
            state.user = action.payload.foundUser
            state.token = action.payload.encodedToken
        },
        logout: (state)=>{
            state.user= null;
            state.token = null;
        },
        signupSuccess: (state,action)=>{
            state.user = action.payload.createdUser;
            state.token = action.payload.encodedToken;

        }
    }
})

export const {
    loginSuccess,
    logout,
    signupSuccess
} = authSlicer.actions;
export default authSlicer.reducer;