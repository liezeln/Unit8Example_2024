import { Injectable } from '@angular/core';
import { Product } from '../_models/product';
import { PRODUCTS } from '../_data/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : Product[] {
    return PRODUCTS;
  }

  getProduct(id: number) : Product | undefined {
    if (!id) return;
    return PRODUCTS.find(p => p.id == id);
  }
}
