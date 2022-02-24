import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddAppelOffreComponent } from "./add-appel-offre/add-appel-offre.component";
import { CandidatOffreComponent } from "./candidat-offre/candidat-offre.component";
import { EditAppelOffreComponent } from "./edit-appel-offre/edit-appel-offre.component";
import { ListAppelOffreComponent } from "./list-appel-offre/list-appel-offre.component";


const routes: Routes = [


    {path: '', component: ListAppelOffreComponent},
    {path: 'add', component: AddAppelOffreComponent},
    {path:'edit/:id',component:EditAppelOffreComponent},
    {path:'candidat/:id',component:CandidatOffreComponent}

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppelOffreRoutingModule {
  }
  