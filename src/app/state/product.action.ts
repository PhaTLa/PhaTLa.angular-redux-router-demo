import { createAction, props } from "@ngrx/store";
import Product from "../models/product";


export const addProduct = createAction('Add Product',props<{productId: number}>());

export const deleteProduct = createAction('Delete Product',props<{productId: number}>());

export const updateProduct = createAction('Update Product',props<{productId: number}>());

export const retrieveProductList = createAction('Retrieve Products',props<{products: Array<Product>}>());