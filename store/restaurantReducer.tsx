import {createAction, createSlice} from "@reduxjs/toolkit";
import {DishType} from "../src/components/RestaurantCard";

export type RestaurantType = {
    id: string | null
    imgUri: string | null
    title: string | null
    rating: number | null
    genre: string | null
    address: string | null
    description: string | null
    dishes: DishType[] | null
    long: number | null
    lat: number | null
}


type initialStateType = {
    restaurant: RestaurantType
};

const initialState: initialStateType = {
    restaurant: {
        id: null,
        imgUri: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        description: null,
        dishes: null,
        long:null,
        lat: null
    }
};


export const setRestaurantAC = createAction<RestaurantType>("restaurant/setRestaurantAC");


const slice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setRestaurantAC, (state, action) => {
                state.restaurant = action.payload
            })
    },
});

export const restaurantReducer = slice.reducer;
