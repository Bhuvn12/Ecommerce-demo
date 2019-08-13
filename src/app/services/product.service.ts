import { Injectable , Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PRODUCT} from '../../assets/models';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Output() AddCartList: EventEmitter<boolean> = new EventEmitter();
  @Output() AddWishList: EventEmitter<boolean> = new EventEmitter();
  constructor(private httpService: HttpClient, private _snackBar: MatSnackBar) { }
  productList: PRODUCT [];
  wishList: PRODUCT [] = [];
  cartList: PRODUCT [] = [];
  getProductList(): Observable<PRODUCT[]> {
    return this.httpService.get<PRODUCT[]>('../../assets/product.json');
  }

  calculateWishList(Obj) {
    this.wishList.push(Obj);
    this._snackBar.open('Added in wishList', 'Undo', {
      duration: 2000
    });
    this.AddWishList.emit(true);
  }

  calculateCartList(Obj) {
    this.cartList.push(Obj);
    this._snackBar.open('Added in Cart', 'Undo', {
      duration: 2000
    });
    this.AddCartList.emit(true);
  }
}
