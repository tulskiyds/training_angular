import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(private http: HttpClient) {}

    getAll() {
       return this.http.get(URL: 'https://fakestoreapi.com/products')
    }
}