import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCandidatComponent } from "./add-candidat/add-candidat.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CandidatComponent } from "./details/candidat/candidat.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [


    {path: '', component: CategoriesComponent},
    {path:'details/:category/:numberCv',component:DetailsComponent},
    {path:'details/:category/:numberCv/candidat/:id',component:CandidatComponent},
    {path:'details/:category/:numberCv/add',component:AddCandidatComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CategoriesRoutingModule {
  }