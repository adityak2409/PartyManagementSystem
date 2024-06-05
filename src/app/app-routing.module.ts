import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPartyComponent } from './add-party/add-party.component';
import { AddVegComponent } from './add-veg/add-veg.component';

import { VegOrderComponent } from './veg-order/veg-order.component';
import { AddNonVegComponent } from './add-non-veg/add-non-veg.component';
import { NonVegOrderComponent } from './non-veg-order/non-veg-order.component';
import { VegListComponent } from './Admin/veg-list/veg-list.component';
import { UpdateVegComponent } from './Admin/update-veg/update-veg.component';
import { NonVegListComponent } from './Admin/non-veg-list/non-veg-list.component';
import { UpdateNonVegComponent } from './Admin/update-non-veg/update-non-veg.component';



const routes: Routes = [

  {path:'',component:AddPartyComponent},

  {path:'add-veg',component:AddVegComponent},
  {path:'veg-order',component:VegOrderComponent},

  
  {path:'add-nonveg',component:AddNonVegComponent},
  {path:'nonveg-order',component:NonVegOrderComponent},


  //Admin
  {path:'veg-list',component:VegListComponent},
  {path:'update-veg/:VegId',component:UpdateVegComponent},
  {path:'nonveg-list',component:NonVegListComponent},
  {path:'update-nonveg/:NonVegId',component:UpdateNonVegComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
