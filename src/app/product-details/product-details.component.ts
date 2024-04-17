import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductsService } from '../_services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  id: number | undefined;

  constructor(private productService: ProductsService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    if (this.id)
      {
        this.getProduct(this.id);
      }

  }

  getProduct(id: number) : void {
    this.product = this.productService.getProduct(id);
  }

}
