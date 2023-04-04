import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import{NavbarComponent} from './navbar/navbar.component';
import{ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {DeleteFormComponent} from './delete-form/delete-form.component';
import {UpdateFormComponent} from './update-form/update-form.component';



const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'reactive-form', component: ReactiveFormComponent},
  {path: 'delete-form', component: DeleteFormComponent},
  {path: 'update-form', component:UpdateFormComponent}
];

@NgModule({
  imports: [
  ReactiveFormsModule,
  RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
