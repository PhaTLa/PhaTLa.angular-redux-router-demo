import Product from "../models/product";

export interface AppState {
    products: Array<Product>;
    crudProduct: Array<number>;
}