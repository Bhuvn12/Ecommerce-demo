import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from './services/product.service';
import {PRODUCT} from '../assets/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  wishList: PRODUCT [] = [];
  cartList: PRODUCT [] = [];
  constructor (private prodService: ProductService, private router: Router) {
  }
  ngOnInit() {
    this.prodService.AddWishList.subscribe(is_true => {
      this.wishList = this.prodService.wishList;
    });
    this.prodService.AddCartList.subscribe(is_true => {
      this.cartList = this.prodService.cartList;
    });
  }

  showCart() {
    this.router.navigate(['/cart-list']);
  }

  showWishList() {
    this.router.navigate(['/wish-list']);
  }
}
