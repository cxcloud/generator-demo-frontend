import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '@cxcloud/ct-types/products';
import { CommerceService } from '../../core/commerce/commerce.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [CommerceService]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  defaultImage = './assets/images/comingsoon.png';

  constructor(
    private commerceService: CommerceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get all products by category id
      this.getProducts(params['id']);
    });
  }

  getProducts(categoryId) {
    this.commerceService
      .getProducts(categoryId)
      .subscribe(data => (this.products = data.results));
  }

  getAllVariants() {
    // Add master variant as first item in variants
    this.products.forEach(product => {
      if (product.masterVariant) {
        product.variants.unshift(product.masterVariant);
      }
    });
  }
}
