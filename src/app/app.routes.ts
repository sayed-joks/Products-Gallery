import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { ProductDetails } from './Pages/product-details/product-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Home' },
  {
    path: 'details/:id',
    component: ProductDetails,
    title: 'Product Details',
  },
];
