import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {LayoutComponent} from './home/layout/layout.component';
import {AuthGuard} from './guards/auth.guard';
import { HobbiesComponent } from './hobbies/hobbies.component';





const routes: Routes = [


  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  
  

  {
    path: '', component: HomeComponent,
    

    children: [

      {path: '', component: LayoutComponent},
      
      {
        path:'appeloffre',
        loadChildren:'./home/appel-offre/appel-offre.module#AppelOffreModule'
      },
      {
        path:'categories',
        loadChildren:'./home/categories/categories.module#CategoriesModule',
       
      },

 
    ]


  },
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
