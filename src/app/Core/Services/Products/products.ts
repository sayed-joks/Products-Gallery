import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
  getSpecificProducts(id: any): Observable<any> {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}
