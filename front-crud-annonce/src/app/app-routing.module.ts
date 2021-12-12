import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

const routes: Routes = [
  { path: '', component: ListAnnonceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
