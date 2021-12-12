import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { ViewAnnonceComponent } from './view-annonce/view-annonce.component';

const routes: Routes = [
  { path: '', component: ListAnnonceComponent },
  { path: 'view/:id', component: ViewAnnonceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
