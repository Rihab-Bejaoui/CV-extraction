import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdduserComponent} from './adduser/adduser.component';
import {EditusersComponent} from './editusers/editusers.component';

const routes: Routes = [


  {path: '', component: UsersComponent},
  {path: 'add', component: AdduserComponent},
  {path: 'edit/:id', component: EditusersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
