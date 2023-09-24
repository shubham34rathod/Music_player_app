import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={
    login:false,
    user:null,
    currentSong:null
}

export const userSlice=createSlice({
    name:'user',
    initialState:initialStateValue,
    reducers:{
        loginInfo:(state,action)=>{
            // console.log('action',action.payload);
            state.user=action.payload
            state.login=true
        },
        setPlayingSong:(state,action)=>{
            // console.log('payload',action.payload);
            // console.log('state',state.currentSong);
            state.currentSong=action.payload
        },
        handleLogout:(state)=>{
            state.login=false
            state.user=null
        }
    }
})

export const {loginInfo,setPlayingSong,handleLogout}=userSlice.actions
export default userSlice.reducer