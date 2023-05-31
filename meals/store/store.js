import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from 'favorites.js';


const store = configureStore({
    ids:[],
    reducer:{
        favoritesMeals:favoritesReducer
    }
})

export default store;