import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { EditusersComponent } from './editusers/editusers.component';
import { AdduserComponent } from './adduser/adduser.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChildrenComponent } from './children/children.component';

@NgModule({
  declarations: [UsersComponent, EditusersComponent, AdduserComponent, ChildrenComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
