import { Injectable } from '@angular/core';

export interface ProductDetail
{
  name: string,
  product_code: string,
  release_day: string,
  product_description: string,
}

@Injectable({
  providedIn: 'root'
})

export class ProductListService {

  constructor() { }
}
