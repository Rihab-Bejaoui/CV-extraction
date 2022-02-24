import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddAppelOffreComponent } from '../appel-offre/add-appel-offre/add-appel-offre.component';
import {ListproductComponent} from './listproduct/listproduct.component';

const routes: Routes = [


  {path: '', component: ListproductComponent},
  {path:'add',component:AddAppelOffreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
