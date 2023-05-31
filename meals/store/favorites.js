import { createSlice } from "@reduxjs/toolkit";

const favorites = createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    reducers:{
        addFavourites:(state,action)=>{
             state.push(action.payload.id)
        },
        removeFavourites:(state,action)=>{
             state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})


export const addFavourites = favorites.actions.addFavourites;
export const removeFavourites = favorites.actions.removeFavourites;
export default favorites.reducer;