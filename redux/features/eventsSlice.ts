import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState={
    value:[]
}

const eventsSlice=()=>createSlice({
    name:'hEvent',
    initialState,
    reducers:{
        addToFavs:(state,action.payload:PayloadAction<>)=>{

        }
        removeFav:(state,action.payload:PayloadAction<number>)=>{

        }
    }
})