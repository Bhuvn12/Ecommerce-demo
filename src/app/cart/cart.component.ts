import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BillDetailsComponent } from '../bill-details/bill-details.component';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { PRODUCT } from '../../assets/models';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private prodSerVice: ProductService, private router: Router, public dialog: MatDialog,
    private _snackBar: MatSnackBar) {
    if (this.prodSerVice.cartList.length === 0) {
      this.is_cartEmpty = true;
      // this.router.navigate(['/product-list']);
    }
  }
  cartList: PRODUCT[];
  is_cartEmpty = false;
  ngOnInit() {
    this.cartList = this.prodSerVice.cartList;
    this.prodSerVice.AddCartList.subscribe(is_true => {
      this.cartList = this.prodSerVice.cartList;
      if (this.prodSerVice.cartList.length !== 0) {
        this.is_cartEmpty = false;
      }
    });
  }

  openDialog(obj, index) {
    const dialogRef = this.dialog.open(BillDetailsComponent, {
      width: '450px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      this._snackBar.open('Product is purchased successfully', 'Undo', {
        duration: 3000
      });
      this.cartList.slice(index, 1);
      this.prodSerVice.cartList = this.cartList;
      if (this.prodSerVice.cartList.length === 0) {
        this.is_cartEmpty = true;
      }
    });
  }

  removeCart(obj, index) {
    this.cartList.slice(index, 1);
    this.prodSerVice.cartList = this.cartList;
    if (this.prodSerVice.cartList.length === 0) {
      this.is_cartEmpty = true;
    }
  }
  goBack() {
    this.router.navigate(['/product-list']);
  }
}
