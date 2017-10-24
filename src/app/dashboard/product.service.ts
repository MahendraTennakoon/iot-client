import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Product } from "./product";
import { Config } from "../shared/config";

@Injectable()
export class ProductService {

    constructor(private http: Http) {}

    getProducts(): Observable<Product[]> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(
            Config.apiUrl, 
            { headers: headers }
        )
        .map(res => res.json())
        .catch(this.handleErrors)
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}