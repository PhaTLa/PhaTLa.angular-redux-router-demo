import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import Product from "../models/product";


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    env = environment;

    constructor(private httpClient: HttpClient) { };

    getBooks(): Observable<Array<Product>> {

        return this.httpClient.get<Array<Product>>(

            `${this.env.apiBaseUrl}/lists`

        ).pipe(map((products) => products || []));
    }
}