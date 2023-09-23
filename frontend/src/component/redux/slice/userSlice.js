import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={
    user:''
}

export const userSlice=createSlice({
    name:'user',
    initialState:initialStateValue,
    reducers:{
        loginInfo:(state,action)=>{
            console.log('action',action.payload);
            state.user=action.payload
        }
    }
})

export const {loginInfo}=userSlice.actions
export default userSlice.reducer