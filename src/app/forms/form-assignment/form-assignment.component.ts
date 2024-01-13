import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent {


  assignmentForm: FormGroup;
  inputForm: FormGroup;
  proValues: any = [];
  edit: any;
  rowindex: any;

  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      productName: ['', Validators.required],
      type: ['Product Type', Validators.required],
      box: ['true'],
      price: ['', Validators.required]
    })
    this.assignmentForm = this.fb.group({
      productRows: this.fb.array([])
    })
  }

  inputadd() {

  }
  getProductControls(): FormGroup[] {
    return (this.assignmentForm.get('productRows') as FormArray)?.controls as FormGroup[];
  }

  get productRows() {
    // console.log(this.assignmentForm.get('productRows')?.value);

    return this.assignmentForm.controls['productRows'] as FormArray
  }

  saveData() {
    if (this.rowindex == null) {

      (this.assignmentForm.get("productRows") as FormArray).push(this.fb.group({
        productName: [this.inputForm.value.productName],
        type: [this.inputForm.value.type],
        box: [this.inputForm.value.box],
        price: [this.inputForm.value.price]
      }))
      this.inputForm.get('productName')?.reset()
      this.inputForm.get('price')?.reset()
      this.inputForm.get('type')?.reset()
    }

    else {
      const control3 = (this.assignmentForm.get('productRows') as FormArray).at(this.rowindex) as FormGroup;

      control3.setValue({
        productName: this.inputForm.get('productName')?.value,
        type: this.inputForm.get('type')?.value,
        box: this.inputForm.get('box')?.value,
        price: this.inputForm.get('price')?.value,
      });
      this.inputForm.get('productName')?.reset()
      this.inputForm.get('price')?.reset()
      this.inputForm.get('type')?.reset()
    }

    //   if(this.rowindex != null){
    //     const control3 = (this.assignmentForm.get('productRows') as FormArray).at(this.rowindex);
    //  control3.value.productName = this.inputForm.get('productName')?.value ;
    // control3.value.type = this.inputForm.get('type')?.value 
    // control3.value.box = this.inputForm.get('box')?.value 
    // control3.value.price = this.inputForm.get('price')?.value 
    //   }


  }



  editData(index: any) {
    this.rowindex = index;
    this.edit = this.assignmentForm.value.productRows[this.rowindex];
    this.inputForm.setValue({
      productName: this.edit?.productName,
      type: this.edit?.type,
      box: this.edit?.box,
      price: this.edit?.price,
    });

  }

  deleteProduct(productindex: number) {
    let text = "Are You Sure. you wanr to Delete it?";
    if (confirm(text) == true) {
      this.productRows.removeAt(productindex);
    }
    }

}



// additems() {
//   return this.fb.group({
//     productName: ['', Validators.required],
//     type: ['Select the Product Type', Validators.required],
//     box: ['true'],
//     price: ['', Validators.required]
//   })
// }

// addProduct() {
//   const products = <FormArray>this.assignmentForm.controls['productRows'];
//   products.push(this.additems());
//   // console.log(this.productRows);
// }