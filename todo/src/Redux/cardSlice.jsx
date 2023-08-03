import { createSlice } from "@reduxjs/toolkit";
 

 
const cardSlice = createSlice({
  name: 'card',
  initialState:{
    items:[],
  },
  reducers:{
  getInf:(state,action) =>{
    state.items=[...state.items,action.payload]
  }}
  })

export const {getInf} = cardSlice.actions;
 
export default cardSlice.reducer;