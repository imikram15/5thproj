import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageNotFoundComponent } from './pageNotFound';

const routes: Routes = [
  {
    path:'forms',
    loadChildren: ()=>import('./forms/forms.module').then(m=> m.angularFormsModule),
    data:{preload:true},
  },
  {path:'**', component:pageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
