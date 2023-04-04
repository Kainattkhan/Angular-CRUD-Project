import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdateFormComponent } from './update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReactiveFormComponent,
    DeleteFormComponent,
    UpdateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
