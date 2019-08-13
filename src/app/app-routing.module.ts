import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
const routes: Routes = [
  {path : '' , redirectTo : 'product-list', pathMatch: 'full' },
  {path : 'product-list' , component: ProductListComponent },
  {path : 'cart-list' , component: CartComponent },
  {path : 'wish-list' , component: WishListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
