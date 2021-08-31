import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahimaComponent } from './mahima/mahima.component';
import { ManeeshaComponent } from './maneesha/maneesha.component';
import { MeghanaComponent } from './meghana/meghana.component';
import { PriyankaComponent } from './priyanka/priyanka.component';

const routes: Routes = [
  {path:"priyanka",component:PriyankaComponent},
  {path:"mahima",component:MahimaComponent},
  {path:"maneesha",component:ManeeshaComponent},
  {path:"meghana",component:MeghanaComponent},
  {path:"",redirectTo:'/priyanka',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
