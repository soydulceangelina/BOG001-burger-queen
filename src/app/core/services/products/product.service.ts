import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from './../../../../environments/environment';

import {Product} from '../../models/product.model';
import {ApiResponse} from '../../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {}

  getAllProducts(){
    return this.http.get<ApiResponse<Product[]>>(environment.api_url);
  }

  getProduct(id: string){
    return this.http.get<ApiResponse<Product>>(`${environment.api_url}/${id}`);
  }
}
