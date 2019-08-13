import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {PRODUCT} from '../../assets/models';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor(private prodSerVice: ProductService, private router: Router) {
    if (this.prodSerVice.wishList.length === 0) {
      this.is_cartEmpty = true;
    }
  }
  is_cartEmpty = false;
  wishList: PRODUCT [];
  ngOnInit() {
    this.wishList = this.prodSerVice.wishList;
    this.prodSerVice.AddWishList.subscribe(is_true => {
      this.wishList = this.prodSerVice.wishList;
      if (this.prodSerVice.wishList.length !== 0) {
        this.is_cartEmpty = false;
      }
    });
    console.log(this.wishList);
  }

  removeWishList(obj, index) {
    this.wishList.splice(index, 1);
    this.prodSerVice.wishList = this.wishList;
    if (this.prodSerVice.wishList.length === 0) {
      this.is_cartEmpty = true;
    }
  }
  goBack() {
    this.router.navigate(['/product-list']);
  }
}
