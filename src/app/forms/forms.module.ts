import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { FormsComponent } from './forms.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ConfirmMsgComponent } from './confirm-msg/confirm-msg.component';

@NgModule({
  declarations: [
    FormAssignmentComponent,
    FormsComponent,
    ConfirmMsgComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class angularFormsModule { }
