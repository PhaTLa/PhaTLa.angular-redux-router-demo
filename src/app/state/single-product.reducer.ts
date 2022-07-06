//do anything relate to a product, like create, delete, update...

import { createReducer, on } from "@ngrx/store";
import { addProduct } from "./product.action";

export const initialState: Array<number> = [];

export const singleProductReducer = createReducer(
    initialState,
    on(addProduct,(state,{productId})=>{
        if(state.indexOf(productId) > -1) return state;

        return [...state,productId];
    })
);