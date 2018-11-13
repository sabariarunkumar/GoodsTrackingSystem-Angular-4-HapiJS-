import { CustomerproductComponent } from './customerproduct/customerproduct.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { LeftgetComponent } from './leftget/leftget.component';

import {RightgetComponent} from './rightget/rightget.component';
const appRoutes: Routes = [
   { path: 'leftget', component: LeftgetComponent },
  {path:'rightget',component:RightgetComponent},
  {path:'customerproduct',component:CustomerproductComponent}

  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
       // <-- debugging purposes only
    )
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
