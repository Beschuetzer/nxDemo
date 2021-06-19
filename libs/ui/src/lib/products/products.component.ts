import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '@prisma/client';

@Component({
  selector: 'test-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public $products: Observable<Product[]> | null = null;

  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.$products = this.productsService.getProducts();
  }

}
