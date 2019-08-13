import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { asapScheduler } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private _snackBar: MatSnackBar) { }
  productList;
  toggle_sort = 'asec';

  public searchText: string;
  public searchText1: string;
  async ngOnInit() {
    this.productService.getProductList().subscribe(res => {
      this.productList = res;
      this.productService.productList = res;
    }, err => {
      console.log('something went wrong');
    });
  }


  sortArr() {    const sortedArr = this.productList.sort(function (obj1: any, obj2: any) {
      return obj1.price - obj2.price;
    });
    this.productList = [];
    this.productList = Array.from(sortedArr);
  }
  sortDesc() {
    const sortedArr = this.productList.sort(function (obj1: any, obj2: any) {
      return obj2.price - obj1.price;
    });
    this.productList = [];
    this.productList = Array.from(sortedArr);
  }

  addToCart(Obj) {
    this.productService.calculateCartList(Obj);

  }

  addWishList(Obj) {
    this.productService.calculateWishList(Obj);
  }
}
