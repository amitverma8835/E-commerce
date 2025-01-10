import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
        name:"cart",
        initialState:[],
        reducers:{
                AddItem:(state,action)=>{
                        state.push(action.payload)
                },
                RemoveItem:(state,action)=>{
                        return state.filter((item)=>(
                                item.id !== action.payload
                        ))
                }
        
        },
})

export const {AddItem,RemoveItem}=cartSlice.actions

export default cartSlice.reducer