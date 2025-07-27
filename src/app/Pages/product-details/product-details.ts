import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../Core/Services/Products/products';
import { ISpecificProduct } from '../../Shared/InterFaces/ispecific-product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly products = inject(Products);
  ProdDetails: ISpecificProduct = {} as ISpecificProduct;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (res) => {
        let id = res.get('id');
        this.products.getSpecificProducts(id).subscribe({
          next: (res) => {
            this.ProdDetails = res;
          },
        });
      },
    });
  }
}
