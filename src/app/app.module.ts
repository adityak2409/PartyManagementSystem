import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AddPartyComponent } from './add-party/add-party.component';
import { PartyListComponent } from './party-list/party-list.component';
import { UpdatePartyComponent } from './update-party/update-party.component';
import { AddVegComponent } from './add-veg/add-veg.component';

import { VegOrderComponent } from './veg-order/veg-order.component';
import { AddNonVegComponent } from './add-non-veg/add-non-veg.component';
import { NonVegOrderComponent } from './non-veg-order/non-veg-order.component';
import { VegListComponent } from './Admin/veg-list/veg-list.component';
import { NonVegListComponent } from './Admin/non-veg-list/non-veg-list.component';
import { UpdateVegComponent } from './Admin/update-veg/update-veg.component';
import { UpdateNonVegComponent } from './Admin/update-non-veg/update-non-veg.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    AddPartyComponent,
     PartyListComponent,
     UpdatePartyComponent,
     AddVegComponent,

     VegOrderComponent,
      AddNonVegComponent,
      NonVegOrderComponent,
      VegListComponent,
      NonVegListComponent,
      UpdateVegComponent,
      UpdateNonVegComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
