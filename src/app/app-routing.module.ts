import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent,
         RegisterComponent } from "@app/components";

const routes: Routes = [
  {
    path: '', component: RegisterComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'profile', component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
