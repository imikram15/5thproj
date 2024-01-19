import { NgIfContext } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent {

  forUpdate: boolean = false;
  totalPrice: number = 0;
  arrayValue: any = [];
  formValue: any;
  rowIndex: any;
  edit: any;
  assignmentForm: FormGroup;
  TotalRow: any;
  


  constructor(private fb: FormBuilder) {
    this.assignmentForm = this.fb.group({
      productRows: this.fb.array([this.additems()])
    });

  }
  additems() {
    return this.fb.group({
      productName: ['', Validators.required],
      type: ['', Validators.required],
      box: ['true'],
      price: ['', [Validators.required,  Validators.pattern("^[0-9]*$") ]]
    })
  }


  addProduct() {
    const product = <FormArray>this.assignmentForm.controls['productRows'];
    product.push(this.additems());
  }

  get productRows() {
    return this.assignmentForm.controls['productRows'] as FormArray
  }


  saveData() {
    if (this.rowIndex == null) {
      this.formValue = this.assignmentForm.getRawValue();
      this.arrayValue.push(...this.formValue.productRows.map((row: any) => ({
        productName: row.productName,
        type: row.type,
        box: row.box,
        price: row.price
      })));
      this.assignmentForm.reset();
      //for Deleting the remaining input Rows
      const newcontrol = <FormArray>this.assignmentForm.controls['productRows'];      
      if(newcontrol.value.length > 1){
       const forDeletion = newcontrol.value.length - 1;
         for (let i = 0; i <= forDeletion; i++) {
          newcontrol.removeAt(1);
         }
      }
      // for Calculating the Price.
      this.totalPrice = 0;
    for (let i = 0; i < this.arrayValue.length; i++) {
      const tprice = this.arrayValue[i].price || 0;
      this.totalPrice += parseInt(tprice);
    }
    }

    else {
      const control3 = (this.assignmentForm.get('productRows') as FormArray).at(0) as FormGroup;

      this.arrayValue[this.rowIndex] = {
        productName: control3.get('productName')?.value,
        type: control3.get('type')?.value,
        box: control3.get('box')?.value,
        price: control3.get('price')?.value,
      };
      this.rowIndex = null;
      this.assignmentForm.reset();
  
    }

    this.forUpdate = false;
  }



  editData(editIndex: any) {
    this.rowIndex = editIndex;
    this.edit = this.arrayValue[this.rowIndex];

    const productRows2 = this.assignmentForm.get('productRows') as FormArray;
    const editedProduct = productRows2.at(0) as FormGroup;
      
    editedProduct.patchValue({
      productName: this.edit?.productName,
      type: this.edit?.type,
      box: this.edit?.box,
      price: this.edit?.price,
    });
  
  this.forUpdate = true;
}

  deleteProduct(productindex: number) {
    let text = "Are You Sure. you wanr to Delete it?";

    const control = <FormArray>this.assignmentForm.controls['productRows'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      if (confirm(text) == true) {
        control.removeAt(productindex);
      }
    } else {
      alert('One Input Field is Mandatory.');
      return false;
    }
    return true;
  }

  delTableRow(index: number) {
    this.arrayValue.splice(index, 1);
  }

}

