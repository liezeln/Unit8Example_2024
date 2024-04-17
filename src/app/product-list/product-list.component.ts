import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../_data/mock-products';
import { ProductsService } from '../_services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;

  constructor(private productService: ProductsService, private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() : void {
    this.products = this.productService.getProducts();
  }

  // Navigate to route programmatically
  goToProductDetails(id: number) {
    this.router.navigate(['product-details', id]);
  }
}
