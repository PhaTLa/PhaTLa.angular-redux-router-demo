import { createReducer, on } from "@ngrx/store";
import Product from "../models/product";
import { retrieveProductList } from "./product.action";


export const initialState: Array<Product> = [];

//to do anything relate to a list of Product
export const productsReducer = createReducer(
    initialState,
    on(retrieveProductList, (state, { products }) => products)
);