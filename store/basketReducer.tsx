import {createAction, createSlice} from "@reduxjs/toolkit";
import {DishRowPropsType} from "../src/components/DishRow";

type initialStateType = {
    items: DishRowPropsType[]
};

const initialState: initialStateType = {
    items: []
};


export const addToBasketAC = createAction<{ value: DishRowPropsType }>("basket/addToBasketAC");
export const removeFromBasketAC = createAction<{id:string}>("basket/removeFromBasketAC");


// export const sendPushTokenTh = createAsyncThunk('app/sendTushTokenTh', async (token: string, {
//   dispatch,
//   rejectWithValue,
// }) => {
//
//   },
// );

const slice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addToBasketAC, (state, action) => {
                state.items = [...state.items, action.payload.value]
            })
            .addCase(removeFromBasketAC, (state, action) => {
                const index = state.items.findIndex((item) => item.id === action.payload.id)
                if (index >= 0) {
                    state.items.splice(index, 1)
                }
            });

    },
});

export const basketReducer = slice.reducer;
