import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  billForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<BillDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) {
     }

  ngOnInit() {
    this.billForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      price: ['', [Validators.required]],
      total: ['', [Validators.required]]
    });
  }

  get f() {
    return this.billForm.controls;
  }
  close() {
    this.dialogRef.close();
  }

  save() {
    this.submitted = true;
    if (this.billForm.invalid) {
      return;
    } else {
/* */
      this.dialogRef.close();
    }
  }

}
