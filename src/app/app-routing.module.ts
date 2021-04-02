import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';



const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/color/:id",component:CarComponent},
  {path:"cars/brand/:id",component:CarComponent},
  {path:"cars/cardetail/:id",component:CarDetailComponent},
  {path:"cars/cardetail/:brandId/:colorId",component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarDetailComponent}
   

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
