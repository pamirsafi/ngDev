import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarContainerComponent } from './home/car-container/car-container.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'car', component: CarContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
