import { createFeatureSelector, createSelector } from "@ngrx/store";
import Product from "../models/product";

export const selectProducts = createFeatureSelector<Array<Product>>('products');

export const selectCrudProducts = createFeatureSelector<Array<number>>('crudProduct');

export const selectProductState = createSelector(
    selectProducts,
    selectCrudProducts,
    (products, crudProduct)=>{
        return crudProduct.map((id) => products.find(((product) => product.id === id)))
    }
);