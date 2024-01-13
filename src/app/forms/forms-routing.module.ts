import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';

const formRoutes: Routes = [
  {
    path:'',
    component:FormsComponent,
    children:[
      {
        path: 'formassignment',
        component: FormAssignmentComponent,
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
