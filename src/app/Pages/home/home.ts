import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../Core/Services/Products/products';
import { IProducts } from '../../Shared/InterFaces/iproducts';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../Shared/Pipes/Search/search-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, FormsModule, SearchPipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly _Products = inject(Products);
  allProducts: IProducts[] = [];
  text: string = '';
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._Products.getProducts().subscribe({
      next: (res) => {
        this.allProducts = res;
      },
    });
  }

  get sortedProducts(): IProducts[] {
    return this.allProducts.slice().sort((a, b) => {
      if (a.price === b.price) {
        return a.title.localeCompare(b.title, 'ar');
      }
      return a.price - b.price;
    });
  }
}
